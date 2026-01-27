/**
 * CoolMath Games FULL Downloader
 * Downloads ALL games with ALL assets
 * 
 * Per CoolMath TOS (https://www.coolmathgames.com/terms-use):
 * "These materials may be copied, shared, and redistributed, as long as 
 * explicit and visible credit is given to Coolmath.com LLC as the original source."
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Load all games from JSON
const gamesJson = require('../www_coolmathgames_com/games.json');

// Attribution HTML
const ATTRIBUTION = `
<!-- 
    ATTRIBUTION NOTICE - Required by CoolMath TOS
    Original Source: CoolMathGames.com (https://www.coolmathgames.com)
    © Coolmath.com LLC - Redistributed with attribution as permitted
-->
<div id="coolmath-attribution" style="position:fixed;bottom:0;left:0;right:0;background:linear-gradient(90deg,#1a1a2e,#16213e);color:#fff;text-align:center;padding:8px;font-size:12px;z-index:99999;font-family:Arial,sans-serif;box-shadow:0 -2px 10px rgba(0,0,0,0.3);">
    🎮 Game from <a href="https://www.coolmathgames.com" target="_blank" rel="noopener" style="color:#4ade80;text-decoration:none;font-weight:bold;">CoolMathGames.com</a> • © Coolmath.com LLC
</div>
`;

// Track stats
const stats = { success: 0, failed: 0, skipped: 0 };
const results = [];

function fetch(url, retries = 3) {
    return new Promise((resolve, reject) => {
        const doFetch = (attempt) => {
            const protocol = url.startsWith('https') ? https : http;
            const options = {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Accept': '*/*',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Referer': 'https://www.coolmathgames.com/',
                },
                timeout: 30000
            };
            
            const req = protocol.get(url, options, (res) => {
                if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    let redirectUrl = res.headers.location;
                    if (!redirectUrl.startsWith('http')) {
                        const base = new URL(url);
                        redirectUrl = new URL(redirectUrl, base.origin).href;
                    }
                    return fetch(redirectUrl, retries).then(resolve).catch(reject);
                }
                
                if (res.statusCode !== 200) {
                    if (attempt < retries) {
                        setTimeout(() => doFetch(attempt + 1), 1000);
                        return;
                    }
                    reject(new Error(`HTTP ${res.statusCode}`));
                    return;
                }
                
                const chunks = [];
                res.on('data', chunk => chunks.push(chunk));
                res.on('end', () => resolve(Buffer.concat(chunks)));
                res.on('error', reject);
            });
            
            req.on('error', (e) => {
                if (attempt < retries) {
                    setTimeout(() => doFetch(attempt + 1), 1000);
                } else {
                    reject(e);
                }
            });
            
            req.on('timeout', () => {
                req.destroy();
                if (attempt < retries) {
                    setTimeout(() => doFetch(attempt + 1), 1000);
                } else {
                    reject(new Error('Timeout'));
                }
            });
        };
        doFetch(1);
    });
}

async function downloadFile(url, destPath) {
    try {
        const data = await fetch(url);
        const dir = path.dirname(destPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(destPath, data);
        return true;
    } catch (e) {
        return false;
    }
}

function slugify(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .substring(0, 50);
}

function extractAssets(html, baseUrl) {
    const assets = new Set();
    
    // JS files
    const jsRegex = /(?:src|href)=["']([^"']*\.js[^"']*)/gi;
    let match;
    while ((match = jsRegex.exec(html)) !== null) {
        assets.add(match[1]);
    }
    
    // CSS files
    const cssRegex = /href=["']([^"']*\.css[^"']*)/gi;
    while ((match = cssRegex.exec(html)) !== null) {
        assets.add(match[1]);
    }
    
    // Images
    const imgRegex = /(?:src|href)=["']([^"']*\.(?:png|jpg|jpeg|gif|webp|svg|ico)[^"']*)/gi;
    while ((match = imgRegex.exec(html)) !== null) {
        assets.add(match[1]);
    }
    
    // Audio/Video
    const mediaRegex = /(?:src|href)=["']([^"']*\.(?:mp3|wav|ogg|mp4|webm|m4a)[^"']*)/gi;
    while ((match = mediaRegex.exec(html)) !== null) {
        assets.add(match[1]);
    }
    
    // JSON files
    const jsonRegex = /["']([^"']*\.json[^"']*)/gi;
    while ((match = jsonRegex.exec(html)) !== null) {
        if (!match[1].includes('manifest')) continue;
        assets.add(match[1]);
    }
    
    // WASM files
    const wasmRegex = /["']([^"']*\.wasm[^"']*)/gi;
    while ((match = wasmRegex.exec(html)) !== null) {
        assets.add(match[1]);
    }
    
    // Data files
    const dataRegex = /["']([^"']*\.(?:data|bin|pak)[^"']*)/gi;
    while ((match = dataRegex.exec(html)) !== null) {
        assets.add(match[1]);
    }
    
    return Array.from(assets).filter(a => 
        !a.startsWith('http') && 
        !a.startsWith('//') && 
        !a.startsWith('data:') &&
        !a.includes('googleapis') &&
        !a.includes('google') &&
        !a.includes('facebook')
    );
}

async function downloadGame(game) {
    const name = game.name.split(':')[0].replace(/^0\s+/, '').trim();
    const slug = slugify(name);
    const embedUrl = game.embedUrl;
    
    // Skip external games that aren't on coolmathgames.com domain
    if (!embedUrl.includes('coolmathgames.com') && 
        !embedUrl.includes('coolmathgames.com/sites')) {
        console.log(`⏭️  Skipping external: ${name}`);
        stats.skipped++;
        return null;
    }
    
    // Skip if it's not a /public_games/ URL (those are the downloadable ones)
    if (!embedUrl.includes('/public_games/') && !embedUrl.includes('/sites/default/files/public_games/')) {
        console.log(`⏭️  Skipping non-static: ${name}`);
        stats.skipped++;
        return null;
    }
    
    console.log(`\n📥 Downloading: ${name} (${slug})`);
    
    const gameDir = path.join(__dirname, 'coolmath', slug);
    if (fs.existsSync(gameDir) && fs.existsSync(path.join(gameDir, 'index.html'))) {
        console.log(`  ⏭️  Already exists, skipping...`);
        stats.skipped++;
        return { name, slug, status: 'exists' };
    }
    
    if (!fs.existsSync(gameDir)) {
        fs.mkdirSync(gameDir, { recursive: true });
    }
    
    // Normalize embed URL
    let baseUrl = embedUrl;
    if (!baseUrl.endsWith('/')) baseUrl += '/';
    
    // Try to get index.html
    const indexUrl = baseUrl + 'index.html';
    console.log(`  Fetching: ${indexUrl}`);
    
    try {
        let html = await fetch(indexUrl);
        html = html.toString('utf-8');
        
        // Check if it's actually HTML
        if (!html.includes('<') || html.includes('Access Denied') || html.includes('404')) {
            throw new Error('Not valid HTML');
        }
        
        // Extract and download assets
        const assets = extractAssets(html, baseUrl);
        console.log(`  Found ${assets.length} assets to download`);
        
        let downloaded = 0;
        for (const asset of assets) {
            const assetUrl = new URL(asset, baseUrl).href;
            const assetPath = asset.split('?')[0];
            const destPath = path.join(gameDir, assetPath);
            
            const success = await downloadFile(assetUrl, destPath);
            if (success) downloaded++;
        }
        console.log(`  Downloaded ${downloaded}/${assets.length} assets`);
        
        // Also try common files that might not be in HTML
        const commonFiles = [
            'game.js', 'main.js', 'app.js', 'bundle.js', 'script.js',
            'style.css', 'styles.css', 'game.css', 'main.css',
            'manifest.json', 'game.json', 'config.json',
            'game.data', 'game.wasm', 'game.framework.js', 'game.loader.js'
        ];
        
        for (const file of commonFiles) {
            const fileUrl = baseUrl + file;
            const destPath = path.join(gameDir, file);
            if (!fs.existsSync(destPath)) {
                await downloadFile(fileUrl, destPath);
            }
        }
        
        // Inject attribution before </body>
        if (html.includes('</body>')) {
            html = html.replace('</body>', ATTRIBUTION + '\n</body>');
        } else if (html.includes('</BODY>')) {
            html = html.replace('</BODY>', ATTRIBUTION + '\n</BODY>');
        } else {
            html += ATTRIBUTION;
        }
        
        // Add attribution comment at top
        html = `<!-- Game: ${name} | Source: CoolMathGames.com | © Coolmath.com LLC -->\n` + html;
        
        fs.writeFileSync(path.join(gameDir, 'index.html'), html);
        console.log(`  ✅ ${name} downloaded!`);
        
        stats.success++;
        return { name, slug, status: 'success' };
        
    } catch (e) {
        console.log(`  ❌ Failed: ${e.message}`);
        
        // Clean up empty directory
        try {
            if (fs.existsSync(gameDir) && fs.readdirSync(gameDir).length === 0) {
                fs.rmdirSync(gameDir);
            }
        } catch {}
        
        stats.failed++;
        return { name, slug, status: 'failed', error: e.message };
    }
}

async function main() {
    console.log('🎮 CoolMath Games FULL Downloader');
    console.log('📜 Per TOS: https://www.coolmathgames.com/terms-use');
    console.log('   "Materials may be copied, shared, and redistributed with credit"\n');
    console.log(`📦 Found ${gamesJson.games.length} games in list\n`);
    
    // Process games
    for (const game of gamesJson.games) {
        const result = await downloadGame(game);
        if (result) results.push(result);
        
        // Small delay to be nice to server
        await new Promise(r => setTimeout(r, 500));
    }
    
    // Save results
    const report = {
        timestamp: new Date().toISOString(),
        stats,
        games: results
    };
    fs.writeFileSync(path.join(__dirname, 'download_report.json'), JSON.stringify(report, null, 2));
    
    console.log(`\n${'='.repeat(50)}`);
    console.log(`📊 RESULTS`);
    console.log(`   ✅ Success: ${stats.success}`);
    console.log(`   ❌ Failed: ${stats.failed}`);
    console.log(`   ⏭️  Skipped: ${stats.skipped}`);
    console.log(`\n📁 Games saved to: ${path.join(__dirname, 'coolmath')}`);
    console.log(`📄 Report saved to: ${path.join(__dirname, 'download_report.json')}`);
    
    // List successful games
    const successful = results.filter(r => r.status === 'success' || r.status === 'exists');
    if (successful.length > 0) {
        console.log(`\n🎮 Available games (${successful.length}):`);
        successful.forEach(g => {
            console.log(`   https://gameflooder.github.io/files/coolmath/${g.slug}/`);
        });
    }
}

main().catch(console.error);
