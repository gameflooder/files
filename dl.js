/**
 * CoolMath Games Fast Downloader
 * Downloads games quickly with proper timeouts
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Load games
const gamesJson = require('../www_coolmathgames_com/games.json');

const ATTRIBUTION = `<div id="cmg-credit" style="position:fixed;bottom:0;left:0;right:0;background:#1a1a2e;color:#fff;text-align:center;padding:6px;font-size:11px;z-index:99999;">🎮 <a href="https://www.coolmathgames.com" target="_blank" style="color:#4ade80;">CoolMathGames.com</a> © Coolmath.com LLC</div>`;

let success = 0, failed = 0, skipped = 0;

function fetch(url) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Timeout')), 10000);
        const protocol = url.startsWith('https') ? https : http;
        
        protocol.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 Chrome/120' }
        }, (res) => {
            clearTimeout(timeout);
            if (res.statusCode === 301 || res.statusCode === 302) {
                return fetch(res.headers.location).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode}`));
                return;
            }
            const chunks = [];
            res.on('data', c => chunks.push(c));
            res.on('end', () => resolve(Buffer.concat(chunks)));
            res.on('error', reject);
        }).on('error', (e) => {
            clearTimeout(timeout);
            reject(e);
        });
    });
}

function slug(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
}

async function download(game) {
    const name = game.name.split(':')[0].replace(/^0\s+/, '').trim();
    const s = slug(name);
    const url = game.embedUrl;
    
    // Only download from public_games
    if (!url.includes('/public_games/')) {
        console.log(`⏭️  ${name} (external)`);
        skipped++;
        return;
    }
    
    const dir = path.join(__dirname, 'coolmath', s);
    if (fs.existsSync(path.join(dir, 'index.html'))) {
        console.log(`✓  ${name} (exists)`);
        skipped++;
        return;
    }
    
    const base = url.endsWith('/') ? url : url + '/';
    
    try {
        let html = (await fetch(base + 'index.html')).toString();
        
        if (!html.includes('<')) throw new Error('Not HTML');
        
        // Add credit
        html = html.replace('</body>', ATTRIBUTION + '</body>');
        html = `<!-- ${name} from CoolMathGames.com -->\n` + html;
        
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html);
        
        // Get JS/CSS files mentioned
        const files = [...html.matchAll(/(?:src|href)=["']([^"']+\.(js|css))["']/gi)]
            .map(m => m[1])
            .filter(f => !f.startsWith('http') && !f.startsWith('//'));
        
        for (const f of files.slice(0, 10)) {
            try {
                const data = await fetch(base + f);
                const fp = path.join(dir, path.basename(f.split('?')[0]));
                fs.writeFileSync(fp, data);
            } catch {}
        }
        
        console.log(`✅ ${name}`);
        success++;
    } catch (e) {
        console.log(`❌ ${name}: ${e.message}`);
        failed++;
    }
}

async function main() {
    console.log('🎮 Downloading CoolMath Games...\n');
    
    for (const game of gamesJson.games) {
        await download(game);
    }
    
    console.log(`\n✅ ${success} | ❌ ${failed} | ⏭️ ${skipped}`);
    console.log('\nRun: git add . && git commit -m "Add games" && git push');
}

main();
