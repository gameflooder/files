// YoHoHo.io Hacks - Size & Speed Cheats
// Paste this in browser console (F12) while playing yohoho.io

(function() {
    'use strict';
    
    console.log('🏴‍☠️ YoHoHo.io Hacks Loading...');
    
    // ============================================
    // CONFIGURATION - Adjust these values
    // ============================================
    const CONFIG = {
        sizeMultiplier: 2.0,      // 1.0 = normal, 2.0 = 2x size, 3.0 = 3x size (visual only)
        speedMultiplier: 1.5,     // Movement speed boost (client-side visual)
        autoCollect: false,       // Auto-collect nearby coins
        showHitboxes: false,      // Show collision boxes
        godMode: false            // Experimental - may not work online
    };
    
    // ============================================
    // FIND GAME VARIABLES
    // ============================================
    let Fe = null;  // Entity array
    let We = null;  // Local player ID
    let player = null;
    
    // Scan window for game variables
    function findGameVars() {
        // Look for the entity container (Fe) and player ID (We)
        for (let key in window) {
            try {
                let val = window[key];
                if (val && typeof val === 'object' && !Array.isArray(val)) {
                    // Check if it looks like an entity container
                    for (let id in val) {
                        let entity = val[id];
                        if (entity && entity.foodEaten !== undefined && entity.scale) {
                            Fe = val;
                            console.log('Found entity container:', key);
                            break;
                        }
                    }
                }
            } catch(e) {}
        }
        
        // Find local player ID
        if (Fe) {
            for (let id in Fe) {
                let entity = Fe[id];
                if (entity && entity.foodEaten !== undefined) {
                    // Check if this might be the local player
                    if (entity.weaponContainer && entity.weaponContainer.filters && 
                        entity.weaponContainer.filters.length > 0) {
                        We = id;
                        player = entity;
                        console.log('Found local player ID:', We);
                        break;
                    }
                }
            }
        }
        
        return player !== null;
    }
    
    // ============================================
    // SIZE HACK (Visual Only)
    // ============================================
    function applySizeHack() {
        if (!player) return;
        
        const originalScale = player.scale.x;
        const newScale = originalScale * CONFIG.sizeMultiplier;
        
        // Apply visual scale
        player.scale.set(newScale);
        if (player.bar) player.bar.scale.set(newScale);
        if (player.barFrame) player.barFrame.scale.set(newScale);
        if (player.weaponContainer) player.weaponContainer.scale.set(newScale);
    }
    
    // ============================================
    // SPEED HACK (Visual Interpolation)
    // ============================================
    let speedHackActive = false;
    let originalPosition = { x: 0, y: 0 };
    
    function applySpeedHack() {
        if (!player || !speedHackActive) return;
        
        // Boost visual movement interpolation
        // Note: Server still controls actual position
        const dx = player.x - originalPosition.x;
        const dy = player.y - originalPosition.y;
        
        player.x += dx * (CONFIG.speedMultiplier - 1);
        player.y += dy * (CONFIG.speedMultiplier - 1);
        
        originalPosition.x = player.x;
        originalPosition.y = player.y;
    }
    
    // ============================================
    // INSTANT FOOD BOOST (Local Visual)
    // ============================================
    function boostFood(amount = 1000) {
        if (!player) {
            console.log('Player not found!');
            return;
        }
        
        player.foodEaten += amount;
        
        // Trigger scale recalculation (Et function)
        const foodEaten = player.foodEaten;
        let scale = 3;
        if (foodEaten < 5000) {
            const n = foodEaten / 5000;
            scale = 1 * Math.pow(1 - n, 3) + 9 * Math.pow(1 - n, 2) * n + 
                    9 * Math.pow(n, 2) * (1 - n) + 3 * Math.pow(n, 3);
        }
        
        player.scale.set(scale * CONFIG.sizeMultiplier);
        if (player.bar) player.bar.scale.set(scale);
        if (player.barFrame) player.barFrame.scale.set(scale);
        if (player.weaponContainer) player.weaponContainer.scale.set(scale);
        
        console.log(`Food boosted to ${player.foodEaten}, Scale: ${scale}`);
    }
    
    // ============================================
    // ZOOM HACK
    // ============================================
    function setZoom(level = 0.5) {
        // Find the PIXI app/stage
        if (window.PIXI && PIXI.Container) {
            const stages = document.querySelectorAll('canvas');
            stages.forEach(canvas => {
                if (canvas.__pixi_stage) {
                    canvas.__pixi_stage.scale.set(level);
                }
            });
        }
        console.log(`Zoom set to ${level}`);
    }
    
    // ============================================
    // CONTROLS UI
    // ============================================
    function createUI() {
        const ui = document.createElement('div');
        ui.id = 'yohoho-hacks';
        ui.innerHTML = `
            <style>
                #yohoho-hacks {
                    position: fixed;
                    top: 10px;
                    right: 10px;
                    background: rgba(0, 0, 0, 0.85);
                    color: #fff;
                    padding: 15px;
                    border-radius: 10px;
                    font-family: Arial, sans-serif;
                    font-size: 14px;
                    z-index: 999999;
                    min-width: 200px;
                    border: 2px solid #ffd700;
                }
                #yohoho-hacks h3 {
                    margin: 0 0 10px 0;
                    color: #ffd700;
                    text-align: center;
                }
                #yohoho-hacks button {
                    width: 100%;
                    padding: 8px;
                    margin: 5px 0;
                    background: #2a2a2a;
                    color: #fff;
                    border: 1px solid #ffd700;
                    border-radius: 5px;
                    cursor: pointer;
                }
                #yohoho-hacks button:hover {
                    background: #ffd700;
                    color: #000;
                }
                #yohoho-hacks .slider-container {
                    margin: 10px 0;
                }
                #yohoho-hacks input[type="range"] {
                    width: 100%;
                }
                #yohoho-hacks .status {
                    font-size: 12px;
                    color: #888;
                    margin-top: 10px;
                }
            </style>
            <h3>🏴‍☠️ YoHoHo Hacks</h3>
            
            <div class="slider-container">
                <label>Size: <span id="size-val">${CONFIG.sizeMultiplier}x</span></label>
                <input type="range" id="size-slider" min="1" max="5" step="0.5" value="${CONFIG.sizeMultiplier}">
            </div>
            
            <div class="slider-container">
                <label>Speed: <span id="speed-val">${CONFIG.speedMultiplier}x</span></label>
                <input type="range" id="speed-slider" min="1" max="3" step="0.25" value="${CONFIG.speedMultiplier}">
            </div>
            
            <button id="boost-btn">🍖 Boost Food (+1000)</button>
            <button id="mega-btn">💀 MEGA SIZE</button>
            <button id="reset-btn">🔄 Reset</button>
            <button id="hide-btn">❌ Hide Menu</button>
            
            <div class="status" id="hack-status">Press F1 to toggle menu</div>
        `;
        
        document.body.appendChild(ui);
        
        // Event listeners
        document.getElementById('size-slider').addEventListener('input', (e) => {
            CONFIG.sizeMultiplier = parseFloat(e.target.value);
            document.getElementById('size-val').textContent = CONFIG.sizeMultiplier + 'x';
            applySizeHack();
        });
        
        document.getElementById('speed-slider').addEventListener('input', (e) => {
            CONFIG.speedMultiplier = parseFloat(e.target.value);
            document.getElementById('speed-val').textContent = CONFIG.speedMultiplier + 'x';
        });
        
        document.getElementById('boost-btn').addEventListener('click', () => boostFood(1000));
        document.getElementById('mega-btn').addEventListener('click', () => boostFood(5000));
        document.getElementById('reset-btn').addEventListener('click', () => location.reload());
        document.getElementById('hide-btn').addEventListener('click', () => {
            ui.style.display = 'none';
        });
        
        // F1 to toggle
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F1') {
                e.preventDefault();
                ui.style.display = ui.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
    
    // ============================================
    // MAIN LOOP
    // ============================================
    function mainLoop() {
        if (!player) {
            findGameVars();
        }
        
        if (player) {
            applySizeHack();
            applySpeedHack();
            
            document.getElementById('hack-status').textContent = 
                `Player found! Food: ${player.foodEaten || 0}`;
        } else {
            document.getElementById('hack-status').textContent = 'Searching for player...';
        }
        
        requestAnimationFrame(mainLoop);
    }
    
    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        // Wait for game to load
        setTimeout(() => {
            createUI();
            findGameVars();
            mainLoop();
            
            console.log('🏴‍☠️ YoHoHo.io Hacks Loaded!');
            console.log('Commands:');
            console.log('  boostFood(amount) - Add food/size');
            console.log('  setZoom(level) - Change zoom (0.5 = zoomed out)');
            console.log('  CONFIG.sizeMultiplier = X - Set size multiplier');
            
            // Expose to window for console access
            window.yohohoHacks = {
                boostFood,
                setZoom,
                CONFIG,
                findGameVars,
                getPlayer: () => player
            };
        }, 2000);
    }
    
    init();
    
})();
