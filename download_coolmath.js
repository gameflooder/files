/**
 * CoolMath Games Downloader
 * 
 * Per CoolMath TOS (https://www.coolmathgames.com/terms-use):
 * "These materials may be copied, shared, and redistributed, as long as 
 * explicit and visible credit is given to Coolmath.com LLC as the original source."
 * 
 * This script downloads games and adds required attribution.
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Games to download - add more as needed
const GAMES = [
    {
        name: "slice-master",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/50815/",
        displayName: "Slice Master"
    },
    {
        name: "run-3",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/49436/",
        displayName: "Run 3"
    },
    {
        name: "bloxorz",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/48807/",
        displayName: "Bloxorz"
    },
    {
        name: "papas-freezeria",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/48987/",
        displayName: "Papa's Freezeria"
    },
    {
        name: "suika-watermelon",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/50752/",
        displayName: "Suika Watermelon Game"
    },
    {
        name: "moto-x3m",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/48859/",
        displayName: "Moto X3M"
    },
    {
        name: "fireboy-watergirl",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/48881/",
        displayName: "Fireboy and Watergirl"
    },
    {
        name: "where-is-my-water",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/51085/",
        displayName: "Where's My Water"
    },
    {
        name: "bob-the-robber",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/48863/",
        displayName: "Bob the Robber"
    },
    {
        name: "tiny-fishing",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/50792/",
        displayName: "Tiny Fishing"
    },
    {
        name: "getaway-shootout",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/49618/",
        displayName: "Getaway Shootout"
    },
    {
        name: "bitlife",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/49888/",
        displayName: "BitLife"
    },
    {
        name: "parking-fury-3",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/49132/",
        displayName: "Parking Fury 3"
    },
    {
        name: "duck-life-4",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/48873/",
        displayName: "Duck Life 4"
    },
    {
        name: "snake-game",
        embedUrl: "https://www.coolmathgames.com/sites/default/files/public_games/48884/",
        displayName: "Snake"
    }
];

// Attribution HTML to inject
const ATTRIBUTION = `
<!-- 
    ATTRIBUTION NOTICE
    This game is from CoolMathGames.com
    Redistributed under their Terms of Use: https://www.coolmathgames.com/terms-use
    "These materials may be copied, shared, and redistributed, as long as 
    explicit and visible credit is given to Coolmath.com LLC as the original source."
-->
<div id="coolmath-attribution" style="position:fixed;bottom:0;left:0;right:0;background:rgba(0,0,0,0.8);color:#fff;text-align:center;padding:5px;font-size:12px;z-index:99999;font-family:Arial,sans-serif;">
    Game from <a href="https://www.coolmathgames.com" target="_blank" style="color:#4CAF50;text-decoration:none;font-weight:bold;">CoolMathGames.com</a> • © Coolmath.com LLC
</div>
`;

function fetch(url) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            }
        };
        
        protocol.get(url, options, (res) => {
            // Handle redirects
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetch(res.headers.location).then(resolve).catch(reject);
            }
            
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode} for ${url}`));
                return;
            }
            
            const chunks = [];
            res.on('data', chunk => chunks.push(chunk));
            res.on('end', () => resolve(Buffer.concat(chunks)));
            res.on('error', reject);
        }).on('error', reject);
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
        console.error(`  Failed to download ${url}: ${e.message}`);
        return false;
    }
}

async function downloadGame(game) {
    console.log(`\n📥 Downloading: ${game.displayName}`);
    
    const gameDir = path.join(__dirname, 'coolmath', game.name);
    if (!fs.existsSync(gameDir)) {
        fs.mkdirSync(gameDir, { recursive: true });
    }
    
    // Download index.html
    const indexUrl = game.embedUrl + (game.embedUrl.endsWith('/') ? 'index.html' : '/index.html');
    console.log(`  Fetching: ${indexUrl}`);
    
    try {
        let html = await fetch(indexUrl);
        html = html.toString('utf-8');
        
        // Inject attribution before </body>
        if (html.includes('</body>')) {
            html = html.replace('</body>', ATTRIBUTION + '\n</body>');
        } else {
            html += ATTRIBUTION;
        }
        
        // Add attribution comment at top
        html = `<!-- Game: ${game.displayName} | Source: CoolMathGames.com | © Coolmath.com LLC -->\n` + html;
        
        fs.writeFileSync(path.join(gameDir, 'index.html'), html);
        console.log(`  ✅ Saved index.html with attribution`);
        
        // Parse and download referenced files (JS, CSS, images)
        const baseUrl = game.embedUrl.endsWith('/') ? game.embedUrl : game.embedUrl + '/';
        
        // Find JS files
        const jsMatches = html.match(/(?:src|href)=["']([^"']+\.js[^"']*)/gi) || [];
        for (const match of jsMatches) {
            const file = match.replace(/(?:src|href)=["']/i, '');
            if (!file.startsWith('http') && !file.startsWith('//')) {
                const fileUrl = new URL(file, baseUrl).href;
                const fileName = path.basename(file.split('?')[0]);
                console.log(`  Downloading: ${fileName}`);
                await downloadFile(fileUrl, path.join(gameDir, fileName));
            }
        }
        
        // Find CSS files
        const cssMatches = html.match(/href=["']([^"']+\.css[^"']*)/gi) || [];
        for (const match of cssMatches) {
            const file = match.replace(/href=["']/i, '');
            if (!file.startsWith('http') && !file.startsWith('//')) {
                const fileUrl = new URL(file, baseUrl).href;
                const fileName = path.basename(file.split('?')[0]);
                console.log(`  Downloading: ${fileName}`);
                await downloadFile(fileUrl, path.join(gameDir, fileName));
            }
        }
        
        console.log(`  ✅ ${game.displayName} downloaded!`);
        return true;
    } catch (e) {
        console.error(`  ❌ Failed to download ${game.displayName}: ${e.message}`);
        return false;
    }
}

async function main() {
    console.log('🎮 CoolMath Games Downloader');
    console.log('📜 Per TOS: https://www.coolmathgames.com/terms-use');
    console.log('   "Materials may be copied, shared, and redistributed with credit"\n');
    
    let success = 0;
    let failed = 0;
    
    for (const game of GAMES) {
        const result = await downloadGame(game);
        if (result) success++;
        else failed++;
    }
    
    console.log(`\n📊 Results: ${success} downloaded, ${failed} failed`);
    console.log(`\n📁 Games saved to: ${path.join(__dirname, 'coolmath')}`);
    console.log('\nNext steps:');
    console.log('  git add .');
    console.log('  git commit -m "Add CoolMath games with attribution"');
    console.log('  git push');
}

main();
