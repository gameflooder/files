levels[2] = {
    objects: [
        { type: "text", content: "Behold!", x: 0, y: -250, font: "40px rubik", spawnAnimation: 120, spawnAnimationDuration: 50, id: "first text" },
        { type: "text", content: "The Mountain of Persistence!", x: 0, y: -180, font: "40px rubik", spawnAnimation: 210, spawnAnimationDuration: 50, id: "first text" },
        { type: "arrow", x: 0, y: -100, spawnAnimation: 210, spawnAnimationDuration: 50, angle: 180, lineWidth: 8, totalWidth: 130, height: 20, id: "first text" },
        { type: "text", content: "Sorry if that took you a while...", x: 0, y: -180, font: "40px rubik", alpha: 0, id: "second text" },
        { type: "arrow", x: 0, y: -100, angle: 0, lineWidth: 8, totalWidth: 130, height: 20, alpha: 0, id: "second arrow" },
        { type: "text", content: "Risk it for the biscuit.", x: -550, y: 250, font: "35px rubik" },
        { type: "block", x: -700, y: 100, w: 3000, h: 100 },
        { type: "block", x: -6000, y: 300, w: 5700, h: 5000 },
        { type: "block", x: -200, y: 300, w: 5200, h: 5000 },
        { type: "block", x: 500, y: -1000, w: 4000, h: 2000, id: "barrier", alpha: 0, slippery: true },
        { type: "lava", x: -2000, y: -350, w: 4000, h: 50, redCube: true, alpha: 0, collide: false },
        { type: "block", x: -910, y: 0, w: 110, h: 2000 },
        { type: "block", x: -1010, y: -100, w: 110, h: 2000 },
        { type: "block", x: -1110, y: -200, w: 110, h: 2000 },
        { type: "block", x: -1210, y: -300, w: 110, h: 2000 },
        { type: "block", x: -1310, y: -400, w: 110, h: 2000 },
        { type: "block", x: -1410, y: -500, w: 110, h: 2000 },
        { type: "block", x: -1510, y: -600, w: 110, h: 2000 },
        { type: "block", x: -1610, y: -700, w: 110, h: 2000 },
        { type: "block", x: -1710, y: -800, w: 110, h: 2000 },
        { type: "block", x: -1810, y: -900, w: 110, h: 2000 },
        { type: "block", x: -1910, y: -1000, w: 110, h: 2000 },
        { type: "block", x: -2010, y: -1100, w: 110, h: 2000 },
        { type: "block", x: -2110, y: -1200, w: 110, h: 2000 },
        { type: "block", x: -2210, y: -1300, w: 110, h: 2000 },
        { type: "block", x: -2310, y: -1400, w: 110, h: 2000 },
        { type: "block", x: -2410, y: -1500, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -2510, y: -1600, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -2610, y: -1700, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -2710, y: -1800, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -2810, y: -1900, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -2910, y: -2000, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3010, y: -2100, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3110, y: -2200, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3210, y: -2300, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3310, y: -2400, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3410, y: -2500, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3510, y: -2600, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3610, y: -2700, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3710, y: -2800, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3810, y: -2900, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3910, y: -3000, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4010, y: -3100, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4110, y: -3200, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4210, y: -3300, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4310, y: -3400, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4410, y: -3500, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4510, y: -3600, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -8010, y: -3700, w: 3510, h: 10000, collide: false, fake: true },
        { type: "block", x: -3710, y: -1500, w: 1410, h: 2000, alpha: 0, hidden: true },
        { type: "cube", x: -2400, y: -1600, collide: false, collected: false, alpha: 0, hidden: true },
        { type: "block", x: -4110, y: -3000, w: 1600, h: 4000, alpha: 0, hidden: true, slippery: true },
        { type: "lava", x: -300, y: 290, w: 20, h: 1010 },
        { type: "lava", x: -280, y: 290, w: 60, h: 1010, collide: false, alpha: 0.15 },
        { type: "clue", x: -250, y: 240, collide: false, proximity: 1, radius: 0, id: "ultra shortcut clue", ultra: true, air: true, alpha: 0 },
        { type: "lava", x: -280, y: 290, w: 60, h: 1010, id: "ultra shortcut lava" },
        { type: "lava", x: -220, y: 290, w: 20, h: 1010 },
        { type: "lava", x: 0, y: 290, w: 100, h: 1010 },
        { type: "lava", x: 320, y: 290, w: 100, h: 1010 },
        { type: "lava", x: 640, y: 290, w: 100, h: 1010 },
        { type: "block", x: -900, y: 100, w: 10000, h: 10000, id: "shortcut passage" },
        { type: "clue", x: -150, y: 150, collide: false, proximity: 1, radius: 0, id: "first shortcut passage clue", down: true, color: { r: 0, g: 230, b: 0 }, alpha: 0, decay: -0.005 },
        { type: "clue", x: -750, y: 150, collide: false, proximity: 1, radius: 0, id: "shortcut passage clue", down: true, color: { r: 0, g: 230, b: 0 }, alpha: 0 },
        { type: "block", x: 900, y: -200, w: 25, h: 170, id: "cube wall jump", alpha: 0 },
        { type: "block", x: 900, y: -500, w: 25, h: 300, id: "cube wall jump", alpha: 0, slippery: true },
        { type: "clue", x: 650, y: -165, collide: false, alpha: 0, proximity: 100, radius: 0, id: "cube clue", air: true },
        { type: "clue", x: -1000, y: -700, collide: false, proximity: 1, radius: 0, id: "blue cube ultra clue", air: true, ultra: true, angle: 135, alpha: 0 },
        { type: "arrow", x: 650, y: -85, collide: false, alpha: 0, angle: 180, lineWidth: 8, totalWidth: 130, height: 20, id: "cube arrow" },
        { type: "text", content: "Second time's the charm", x: 650, y: -235, font: "35px rubik", alpha: 0, id: "cube text" },
        { type: "clue", x: -1250, y: -350, collide: false, proximity: 1, radius: 0, id: "red cube jump clue", down: true, angle: 225, color: { r: 255, g: 100, b: 100 } },
        { type: "clue", x: -540, y: -400, collide: false, proximity: 1, radius: 0, air: true, id: "red cube clue", down: true, angle: 180, color: { r: 255, g: 100, b: 100 } },
        { type: "clue", x: 200, y: -800, collide: false, proximity: 1, radius: 0, air: true, id: "red cube ultra clue", ultra: true, angle: 135, alpha: 0 },
        { type: "unstable", x: -120, y: -500, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -60, y: -650, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -200, y: -800, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -500, y: -960, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -100, y: -1110, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: 0, y: -1270, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -400, y: -1400, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -300, y: -1600, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "cube", x: -550, y: -1700, collide: false, collected: false, red: true, alpha: 0, redCube: true },
        { type: "text", content: "Actually impossible.", x: -540, y: -500, font: "35px rubik", alpha: 0, redCube: true },
        { type: "text", content: "You can do it.", x: -2200, y: -1900, font: "40px rubik", id: "motivational message", jumps: 0, text: 0 },
        { type: "text", content: "You can do it.", x: -2200, y: -1850, font: "40px rubik", id: "motivational message 2", jumps: 0, text: 0 }
    ],
    triggers: [
        {
            name: "first mountain illusion",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -1400) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube jump clue");
                o.alpha = 1;
                o.decay = 0.1;
                if (o.activated) o.alpha = 0;
                o.x += 100;
                o.y += 100;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.alpha = 1;
                o.decay = 0.1;
                for (var o of game.objects.objects.filter(e => e.id == "first text")) {
                    o.alpha = 0;
                }
                for (var o of game.objects.objects.filter(e => e.id == "second text")) {
                    o.alpha = 1;
                }
                var o = game.objects.objects.find(e => e.id == "second arrow");
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.alpha = 0;
                var o = game.objects.objects.find(e => e.id == "first shortcut passage clue");
                o.alpha = 0;
                o.decay = 0;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "barrier");
                o.x += 500;
                game.cam.viewportBoundary.w += 400;
            }
        },
        {
            name: "revert text",
            check: function () {
                if (!game.level.triggers.tripped("first mountain illusion")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "first text")) {
                    o.alpha = 1;
                }
                for (var o of game.objects.objects.filter(e => e.id == "second text")) {
                    o.alpha = 0;
                }
            },
            passive: function() {
                var o = game.objects.objects.find(e => e.id == "second arrow");
                o.alpha = 0;
                o.decay = 0;
            }
        },
        {
            name: "mountain illusion",
            check: function () {
                if (game.level.triggers.tripped("end mountain illusion")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -1400) return false;
                return true;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                for (var o of player.positionHistory) {
                    o.x += 100;
                    o.y += 100;
                }
                player.x += 100;
                player.y += 100;
                game.cam.x += 100;
                game.cam.y += 100;
                for (var o of game.particles.objects) {
                    o.x += 100;
                    o.y += 100;
                }
                game.backgroundOffset.x += 100 * 0.8;
                game.backgroundOffset.y += 100 * 0.8;
                var o = game.objects.objects.find(e => e.id == "motivational message");
                var o2 = game.objects.objects.find(e => e.id == "motivational message 2");
                var texts = ["You can do it.", "I believe in you.", "Almost there.", "Keep going.", "Don't give up.", "So close.", "There aren't"];
                o.x += 100;
                o.y += 100;
                o2.x += 100;
                o2.y += 100;
                if (o.x > -600) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o2.alpha = 1;
                    o2.decay = 0.1;
                }
                if (o.y >= 0) {
                    o.x -= 2000;
                    o.y -= 2000;
                    o.alpha = 1;
                    o.decay = 0;
                    o2.x -= 2000;
                    o2.y -= 2000;
                    o2.alpha = 1;
                    o2.decay = 0;
                }
                if (o.jumps % 20 == 19) {
                    o.text++;
                    o.content = texts[o.text % 13];
                }
                if (o.content.startsWith("There aren't")) {
                    o.content = `There aren't ${100 + o.jumps}`;
                    o2.content = "steps left.";
                } else {
                    o2.content = "";
                }
                o.jumps++;
            }
        },
        {
            name: "pre-shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("first mountain illusion") && !game.level.triggers.tripped("end mountain illusion")) return false;
                var o = game.objects.objects.find(e => e.id == "first shortcut passage clue");
                var dist = distTo(player.x + player.w / 2, player.y + player.y / 2, o.x, o.y);
                if (dist < 80 && game.input.down && game.input.downStart < 10) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "first shortcut passage clue");
                o.activated = true;
                o.alpha = 1.5;
                o.decay = 0.02;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.alpha = 1;
                game.soundEffects.preShortcut();
            }
        },
        {
            name: "shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.level.triggers.tripped("pre-shortcut")) return false;
                if (game.level.triggers.tripped("first mountain illusion") && !game.level.triggers.tripped("end mountain illusion")) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                var dist = distTo(player.x + player.w / 2, player.y + player.y / 2, o.x, o.y);
                if (dist < 67 && game.input.down && game.input.downStart < 10) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y <= 60) return true;
                return false;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.collide = false;
                o.decay = 0;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.activated = true;
                if (!game.level.triggers.tripped("end mountain illusion")) {
                    var o = game.objects.objects.find(e => e.id == "barrier");
                    o.x += 500;
                    game.cam.viewportBoundary.w += 400;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) {
                    player.againstBottom = {
                        current: false,
                        last: 10000,
                        time: 0
                    }
                }

                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                if (!o.peeked) {
                    //o.alpha = 3;
                    o.decay = 0.05;
                    o.peeked = true;
                }
            },
            untrip: function () {
                game.background.effect.end("green");
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.collide = true;
                o.decay = -0.05;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.activated = false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!game.level.triggers.tripped("end mountain illusion") && player) {
                    var o = game.objects.objects.find(e => e.id == "barrier");
                    o.x -= 500;
                    game.cam.viewportBoundary.w -= 400;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y > 60) {
                    player.xmove *= 1.03;
                    game.cam.offset.y = 200;
                } else {
                    game.cam.offset.y = 0;
                }
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                if (!o.alpha) o.alpha = 1;
                o.alpha = Math.min(Math.max(1 - easeInOut((player.y - 60) / 170), 0.15), o.alpha);
            }
        },
        {
            name: "ultra shortcut",
            check: function () {
                return false;
                if (!game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                if (!player) return false;
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist > 30) return false;
                if (game.input.downStart > 20 || !game.input.down) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                game.level.discoverUltraShortcut();
                game.background.effect.start("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                o.activated = true;
                o.alpha = 1;
                o.decay = 0;
                for (var o of game.objects.objects.filter(e => e.id == "ultra shortcut lava")) {
                    o.collide = false;
                    o.alpha = 0;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.xmove = 0;
                player.ymove = 40;
                game.cam.viewportBoundary.h = 10500;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                o.alpha = 0;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove = 0;
                player.ymove = 40;
            }
        },
        {
            name: "end mountain illusion",
            check: function () {
                return game.level.triggers.tripped("cube");
            }
        },
        {
            name: "cube",
            check: function () {
                var cube = game.objects.objects.find(e => e.type == "cube" && !e.red);
                if (cube.collected) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.level.triggers.tripped("first mountain illusion")) return false;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist < 60) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                var cube = game.objects.objects.find(e => e.type == "cube" && !e.red);
                if (cube.collected) return true;
                return false;
            },
            trip: function () {
                game.level.discoverBlueCube();
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "cube arrow");
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "cube text");
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "second arrow");
                o.decay = 0.1;
                o.alpha = 1;
                if (game.level.triggers.tripped("pre-shortcut")) {
                    var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                    o.alpha = 1;
                } else {
                    var o = game.objects.objects.find(e => e.id == "first shortcut passage clue");
                    o.alpha = 1;
                }
                var o = game.objects.objects.find(e => e.id == "motivational message");
                o.alpha = 0;
                var o = game.objects.objects.find(e => e.id == "motivational message 2");
                o.alpha = 0;
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                if (!o.peeked) {
                    //o.alpha = 1.5;
                    o.peeked = true;
                }
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = false;
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "cube arrow");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "cube text");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "second arrow");
                o.decay = -0.1;
                o.alpha = 0;
            }
        },
        {
            name: "stop cube background",
            check: function () {
                if (!game.level.triggers.tripped("cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                var o = game.objects.objects.find(e => e.type == "cube");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 70) return true;
                return false;
            },
            trip: function () {
                game.background.effect.end("blue");
            }
        },
        {
            name: "hide blue cube ultra clue",
            check: function () {
                if (!game.level.triggers.tripped("cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.x < -1100) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                o.decay = 0.05;
            }
        },
        {
            name: "blue cube ultra",
            check: function () {
                return false;
                if (!game.level.triggers.tripped("cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.type == "cube" && !e.red);
                if (o.collected) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.upStart > 20 || !game.input.up || game.input.leftStart > 20 || !game.input.left) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                var o = game.objects.objects.find(e => e.type == "cube" && !e.red);
                return o.collected;
            },
            trip: function () {
                game.level.discoverUltraBlueCube();
                game.background.effect.start("magenta");
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                o.alpha = 1;
                o.decay = 0;
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.xmove = -50;
                player.ymove = -40;
                game.level.playerControlDelay = 100;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                o.alpha = 1;
                o.decay = 0.1;
                o.activated = false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.ymove = -5;
                player.xmove = 80;
                game.level.playerControlDelay = 0;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.ymove = -32;
                player.xmove = -50;
            }
        },
        {
            name: "red cube jump",
            check: function () {
                if (game.level.triggers.tripped("collect red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("red cube")) return false;
                if (game.level.triggers.tripped("first mountain illusion")) return false;
                if (!(player.againstBottom.last < 10 && Math.abs(player.y + 440) < 10)) return false;
                if (player.xmove <= 0) return false;
                if (!game.input.up) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -351) return true;
                if (player.xmove < 0) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube jump clue");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -14;
                player.y--;
                game.soundEffects.redCubePreClue();
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube jump clue");
                o.activated = false;
            }
        },
        {
            name: "red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.level.triggers.tripped("red cube jump")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 40 && (game.input.upStart && game.input.upStart < 10)) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.x < -1200) return true;
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist < 70) return true;
                return false;
            },
            trip: function () {
                game.level.discoverRedCube();
                game.background.effect.start("red");
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.decay = -0.1;
                    o.collide = true;
                }

                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                if (!o.peeked) {
                    //o.alpha = 6;
                    o.decay = 0.05;
                    o.peeked = true;
                }
            },
            untrip: function () {
                game.background.effect.end("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    if (o.alpha > 1 || o.alpha === undefined) o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
            }
        },
        {
            name: "red cube ultra",
            check: function () {
                return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist > 30) return false;
                if (game.input.leftStart > 10 || !game.input.left || game.input.upStart > 10 || !game.input.up) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (!game.level.triggers.tripped("red cube")) return true;
                return false;
            },
            trip: function () {
                game.level.discoverUltraRedCube();
                game.background.effect.start("magenta");
                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                o.alpha = 1;
                o.decay = 0;
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.xmove = -13;
                player.ymove = -17;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                o.alpha = 1;
                o.decay = 0.1;
                o.activated = false;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.delete) return;
                var o = player;
                game.objects.updateControlsForUpdateAngle(o);
                game.objects.updatePlayerMovement(o);
                game.objects.revertControlsForUpdateAngle(o);
                game.objects.updatePlayerCollisions(o);
                game.objects.updatePlayerPortalCollisions(o);
                game.objects.updatePlayerCubeCollection(o);
                game.objects.updatePlayerCoyoteTime(o);
            }
        },
        {
            name: "collect red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist < 70) return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube jump clue");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.alpha = 1;
                o.decay = 0.1;
            }
        }
    ],
    viewportBoundary: { x: -3300, y: -10000, w: 3300, h: 20000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (game.level.levelAnimationTime < 550) {
            var o = game.objects.objects.find(e => e.id == "motivational message");
            o.alpha = 0;
            var o = game.objects.objects.find(e => e.id == "motivational message 2");
            o.alpha = 0;
        }
        if (game.level.levelAnimationTime > 250) {
            game.backgroundOpacity = 1 - easeInOut((game.level.levelAnimationTime - 250) / 50);
            this.zoom = 1 - easeInOut((game.level.levelAnimationTime - 300) / 50) * 0.9;
            if (game.level.levelAnimationTime < 500) {
                this.x = -1700 * easeInOut((game.level.levelAnimationTime - 315) / 50);
                this.y = 80 - 1000 * easeInOut((game.level.levelAnimationTime - 315) / 50);
            }
        }
        if (game.level.levelAnimationTime == 300) game.soundEffects.whoosh();
        if (game.level.levelAnimationTime > 485) {
            game.backgroundOpacity = easeInOut((game.level.levelAnimationTime - 540) / 50);
            this.zoom = 0.1 + easeInOut((game.level.levelAnimationTime - 500) / 50) * 0.9;
            if (game.level.levelAnimationTime <= 535) {
                this.x = -1700 * (1 - easeInOut((game.level.levelAnimationTime - 485) / 50));
                this.y = 80 - 1000 * (1 - easeInOut((game.level.levelAnimationTime - 485) / 50));
            }
        }
        if (game.level.levelAnimationTime == 500) game.soundEffects.reverseWhoosh();
        if (game.level.levelAnimationTime == 550) {
            for (var o of game.objects.objects.filter(e => e.hidden)) {
                o.alpha = 1;
            }
            for (var o of game.objects.objects.filter(e => e.fake)) {
                o.alpha = 0;
            }
            var o = game.objects.objects.find(e => e.id == "motivational message");
            o.alpha = 1;
        }
    },
    reload: function () {
        for (var o of game.objects.objects.filter(e => e.hidden)) {
            o.alpha = 1;
        }
        for (var o of game.objects.objects.filter(e => e.fake)) {
            o.alpha = 0;
        }
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        if (player.y > 350 && game.level.triggers.tripped("ultra shortcut")) return true;
        if (player.x > 900) return true;
        return false;
    },
    camOffset: {
        x: 0,
        y: 0
    },
    camStartingPosition: {
        x: 0,
        y: 0
    },
    spawnPoint: {
        x: 300,
        y: 0
    },
    playerControlDelay: 500
}
