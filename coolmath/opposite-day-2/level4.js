levels[3] = {
    objects: [
        { type: "cube", x: 500, y: 2000, collide: false, collected: false, alpha: 0, onBlue: true, noCollect: true },
        { type: "block", x: -600, y: -1000, w: 100, h: 2000, slippery: true, blue: true },
        { type: "block", x: -500, y: 100, w: 1500, h: 3000, slippery: true, blue: true },
        { type: "block", x: 900, y: 100, w: 700, h: 2000, id: "fake block", alpha: 1 },
        { type: "block", x: 1500, y: 100, w: 2000, h: 2760, slippery: true, blue: true },
        { type: "block", x: 1540, y: 2850, w: 500, h: 200, blue: true },
        { type: "block", x: 1500, y: 2859, w: 2000, h: 1000, id: "push block", blue: true },
        { type: "block", x: 400, y: 2900, w: 2000, h: 3000, blue: true },
        { type: "eye blob", x: 0, y: 0 },
        { type: "text", content: "These walls are", x: 1250, y: 2500, font: "40px rubik", id: "fall in pit text", alpha: 0 },
        { type: "text", content: "your prison.", x: 1250, y: 2550, font: "40px rubik", id: "fall in pit text 2", alpha: 0 },
        { type: "block", x: 1000, y: 100, w: 500, h: 2800, collide: false, alpha: 0, eyeCollide: true, exitBlock: true },
        { type: "block", x: -600, y: 3000, w: 5000, h: 2800, collide: false, alpha: 0, eyeCollide: true, nonEnterable: true },
        { type: "block", x: -600, y: -100, w: 5000, h: 200, collide: false, alpha: 0, eyeCollide: true, exitBlock: true },
        { type: "block", x: 200, y: 100, w: 100, h: 3000, collide: false, alpha: 0, eyeCollide: true, nonEnterable: true },
        { type: "block", x: 2400, y: 100, w: 1000, h: 1850, collide: false, eyeCollide: true, drawType: "cutout", nonEnterable: true, id: "red cube top wall" },
        { type: "block", x: 2400, y: 2300, w: 100, h: 510, collide: false, eyeCollide: true, nonEnterable: true },
        { type: "block", x: 2400, y: 2810, w: 100, h: 300, collide: false, eyeCollide: true, drawType: "cutout", nonEnterable: true, id: "red cube permeable wall" },
        { type: "block", x: 3100, y: 900, w: 100, h: 2200, collide: false, eyeCollide: true, nonEnterable: true },
        { type: "block", x: 2400, y: 1950, w: 100, h: 350, collide: false, eyeCollide: true, id: "red cube entrance", nonEnterable: true },
        { type: "text", content: "Sorry about this one.", x: 2187.5, y: 2125, font: "30px rubik", alpha: 0, redCube: true },
        { type: "block", x: 1700, y: 2600, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 2130, y: 2500, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 1650, y: 2100, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 1950, y: 2000, w: 475, h: 250, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 2000, y: 1700, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 1750, y: 1500, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 2150, y: 1100, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 1700, y: 1000, w: 300, h: 300, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 2100, y: 400, w: 200, h: 200, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 1800, y: 700, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 1700, y: 300, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 400, y: 1300, w: 200, h: 800, collide: false, eyeCollide: true, drawType: "cutout", id: "blue cube enterable" },
        { type: "block", x: 730, y: 920, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 510, y: 660, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 780, y: 1660, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 670, y: 2500, w: 200, h: 200, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 430, y: 2370, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 820, y: 2090, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "block", x: 600, y: 2850, w: 100, h: 100, collide: false, eyeCollide: true, drawType: "cutout" },
        { type: "clue", x: 500, y: 1250, collide: false, blue: true, alpha: 0, hidden: true, proximity: 1, radius: 0, down: true, id: "cube clue" },
        { type: "clue", x: 560, y: 1500, angle: 45, collide: false, blue: true, ultra: true, alpha: 0, hidden: true, noAlpha: true, proximity: 1, radius: 0, id: "ultra blue cube clue" },
        { type: "clue", x: 440, y: 1690, angle: -45, collide: false, blue: true, ultra: true, alpha: 0, hidden: true, noAlpha: true, proximity: 1, radius: 0, id: "ultra blue cube clue 2" },
        { type: "clue", x: 560, y: 1880, angle: 45, collide: false, blue: true, ultra: true, alpha: 0, hidden: true, noAlpha: true, proximity: 1, radius: 0, id: "ultra blue cube clue 3" },
        { type: "clue", x: 1290, y: 50, collide: false, id: "shortcut clue", air: true, alpha: 0, color: { r: 0, g: 230, b: 0 }, down: true, angle: 180, radius: 0, proximity: 1 },
        { type: "clue", x: 1060, y: -90, collide: false, id: "ultra shortcut clue", air: true, alpha: 0, ultra: true, down: true, angle: 270, radius: 0, proximity: 1 },
        { type: "text", content: "Good luck.", x: 1290, y: -50, font: "40px rubik", alpha: 0, shortcut: true },
        { type: "lava", x: 1400, y: 75, w: 5000, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "lava", x: -1800, y: 75, w: 3000, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "lava", x: 1175, y: 100, w: 25, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "lava", x: 1400, y: 100, w: 25, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "lava", x: 1175, y: 125, w: 250, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "unstable", x: 1400, y: 25, w: 100, h: 50, collide: false, alpha: 0, shortcut: true, decayValue: 0.05 },
        { type: "unstable", x: 1700, y: 25, w: 50, h: 50, collide: false, alpha: 0, shortcut: true, decayValue: 0.05 },
        { type: "unstable", x: 1600, y: -180, w: 50, h: 50, collide: false, alpha: 0, shortcut: true, decayValue: 0.05 },
        { type: "unstable", x: 2100, y: -230, w: 50, h: 50, collide: false, alpha: 0, shortcut: true, decayValue: 0.05 },
        { type: "clue", x: 2375, y: 1975, collide: false, id: "red cube clue 1", blue: true, color: { r: 255, g: 100, b: 100 }, down: true, angle: 270, radius: 0, proximity: 1 },
        { type: "clue", x: 2375, y: 2275, collide: false, id: "red cube clue 2", blue: true, color: { r: 255, g: 100, b: 100 }, down: true, angle: 270, radius: 0, proximity: 1 },
        { type: "lava", x: 2550, y: 950, w: 100, h: 1800, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "block", x: 2500, y: 2761, w: 500, h: 50, collide: false, eyeCollide: true, alpha: 0, redCube: true, nonEnterable: true },
        { type: "block", x: 2675, y: 2741, w: 25, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true, nonEnterable: true },
        { type: "lava", x: 2680, y: 2021, w: 20, h: 720, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2720, y: 950, w: 20, h: 1800, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2980, y: 2021, w: 20, h: 740, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2730, w: 10, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2970, y: 2730, w: 10, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2770, y: 2730, w: 180, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2690, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2650, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2610, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2570, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2530, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2490, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2450, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2410, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2370, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2330, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2290, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2250, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2210, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2960, y: 2150, w: 20, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2100, w: 20, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2960, y: 2050, w: 20, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2000, w: 23, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "cube", x: 2600, y: 2910, collide: false, collected: false, red: true, onBlue: true, alpha: 0, redCube: true },
    ],
    triggers: [
        {
            name: "fall in pit",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > 1000 && player.x < 1500) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.x > 1500) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "fake block");
                o.decay = 0.1;
                o.collide = false;
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.type == "player");
                if (!o) return;
                if (o.x < 800) return;
                if (o.y < 200) o.xmove *= 0.99;
                game.cam.x = game.cam.x * 0.95 + 1200 * 0.05;
            }
        },
        {
            name: "fall in pit text",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y > 2800) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "fall in pit text");
                o.decay = -0.05;
                var o = game.objects.objects.find(e => e.id == "fall in pit text 2");
                o.decay = -0.05;
            }
        },
        {
            name: "push block",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.input.right) return false;
                var o = game.objects.objects.find(e => e.id == "push block");
                var xDist = o.x - player.x - player.w;
                if (xDist < 1 && o.y + 1 == player.y) return true;
                return false;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "push block");
                o.x += 0.5;
                var player = game.objects.objects.find(e => e.type == "player");
                player.x += 0.5;
            }
        },
        {
            name: "way out",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x != 1500) return false;
                if (player.y != 2860) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) return true;
                if (game.level.triggers.tripped("respawn player background")) return true;
                return false;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.type = "block";
                player.id = "player block";
                player.color = "rgb(50,50,255)";
                player.w += 2;
                player.h += 2;
                player.y--;
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation = -50;
                    o.blueAnimationOrigin = { x: player.x - o.x, y: player.y - o.y };
                }

                var playerEye1 = {};
                playerEye1.type = "player eye";
                playerEye1.id = "player eye 1";
                playerEye1.x = player.eyePositions[0].x - 3.7;
                playerEye1.y = player.eyePositions[0].y - 3.7;
                playerEye1.w = 10;
                playerEye1.h = 10;
                playerEye1.controlDelay = 50;
                var playerEye2 = {};
                playerEye2.type = "player eye";
                playerEye2.id = "player eye 2";
                playerEye2.x = player.eyePositions[1].x - 3.7;
                playerEye2.y = player.eyePositions[1].y - 3.7;
                playerEye2.w = 10;
                playerEye2.h = 10;
                playerEye2.controlDelay = 50;
                game.objects.objects.push(playerEye1);
                game.objects.objects.push(playerEye2);
                game.cam.viewportBoundary.x += 800;
                game.cam.viewportBoundary.w -= 800;
                for (var o of game.objects.objects.filter(e => e.hidden && !e.noAlpha)) {
                    o.alpha = 1;
                }
            },
            untrip: function () {
                game.cam.viewportBoundary.x -= 800;
                game.cam.viewportBoundary.w += 800;
                for (var o of game.objects.objects.filter(e => e.hidden && !e.noAlpha)) {
                    o.alpha = 0;
                }
            },
            passive: function () {
                if (game.level.playerDead) return;
                var n = 0;
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation++;
                    if (o.blueAnimation == 7 && n === 0) game.soundEffects.bubblesStart();
                    n++;
                }
            }
        },
        {
            name: "respawn player background",
            check: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1) return false;
                if (!player2) return false;
                if (!player1.blobState) return false;
                if (!player1.collidingEnterable) return false;
                if (!player1.collidingEnterable.exitBlock) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.a < 60) return false;
                return true;
            },
            trip: function () {
                game.objects.objects.find(e => e.id == "player block").delete = true;
                game.objects.objects.find(e => e.id == "push block").x = 1500;
                var o1 = game.objects.objects.find(e => e.id == "player eye 1");
                var o2 = game.objects.objects.find(e => e.id == "player eye 2");
                var x = (o1.x + o2.x) / 2;
                var y = (o1.y + o2.y) / 2;
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation = 80;
                    o.blueAnimationOrigin = { x: x - o.x, y: y - o.y };
                }
            },
            untrip: function () {
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation = 0;
                }
            },
            passive: function () {
                var o1 = game.objects.objects.find(e => e.id == "player eye 1");
                var o2 = game.objects.objects.find(e => e.id == "player eye 2");
                var x, y;
                if (!o1 || !o2) {
                    var player = game.objects.objects.find(e => e.type == "player");
                    x = player.x + 20;
                    y = player.y + 20;
                } else {
                    var x = (o1.x + o2.x) / 2;
                    var y = (o1.y + o2.y) / 2;
                }
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimationOrigin = { x: x - o.x, y: y - o.y };
                    o.blueAnimation--;
                }
            }
        },
        {
            name: "respawn player",
            check: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1) return false;
                if (!player2) return false;
                if (!player1.blobState) return false;
                if (!player1.collidingEnterable) return false;
                if (!player1.collidingEnterable.exitBlock) return false;
                if (player1.blobStateTime < 30) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.a < 60) return false;
                return true;
            },
            trip: function () {
                var o1 = game.objects.objects.find(e => e.id == "player eye 1");
                var o2 = game.objects.objects.find(e => e.id == "player eye 2");
                o1.delete = true;
                o1.noDeathEffect = true;
                o2.delete = true;
                o2.noDeathEffect = true;
                var xmove = (o1.xmove + o2.xmove) / 2;
                var ymove = (o1.ymove + o2.ymove) / 2;
                var x = (o1.x + o2.x) / 2;
                var y = (o1.y + o2.y) / 2;
                var player = game.level.createPlayer(x - 20 + 7, y - 3.5);
                player.xmove = xmove;
                player.ymove = ymove;
                player.a = 0;
                player.updatePlayer = false;
                game.objects.objects.push(player);
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.a++;
                if (player.a > 5) {
                    player.updatePlayer = true;
                } else {
                    player.x += player.xmove;
                    player.y += player.ymove;
                }
            }
        },
        {
            name: "show shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < 1110) return false;
                if (player.x > 1150) return false;
                if (player.xmove < 0) return false;
                if (player.y > 60) return false;
                return true;
            },
            stop: function () {
                return game.level.triggers.tripped("fall in pit text");
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.time = 0;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 0;
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.time++;
                o.alpha = o.time / 10;
            }
        },
        {
            name: "shortcut",
            check: function () {
                if (!game.level.triggers.tripped("show shortcut")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x, player.y);
                if (dist > 40) return false;
                if (game.input.upStart == 0 || game.input.upStart > 10) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.shortcut)) {
                    o.decay = -0.1;
                    o.collide = true;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;

                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                if (!o.peeked) {
                    //o.alpha = 1;
                    o.decay = 0.05;
                    o.peeked = true;
                }
            },
            untrip: function () {
                game.background.effect.end("green");
                for (var o of game.objects.objects.filter(e => e.shortcut)) {
                    o.alpha = Math.min(o.alpha, 1);
                    o.decay = 0.1;
                    o.collide = false;
                }
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = false;
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
                if (dist > 40) return false;
                if (game.input.rightStart > 20 || !game.input.right) return false;
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
                var player = game.objects.objects.find(e => e.type == "player");
                player.xmove = 20;
                player.ymove = -2;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                o.alpha = 0;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                game.objects.updatePlayer(player);
            }
        },
        {
            name: "cube",
            check: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return false;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                var minDist = Math.min(distTo(player1.x, player1.y, o.x, o.y), distTo(player2.x, player2.y, o.x, o.y));
                if (minDist > 100) return false;
                if (!player1.blobState) return false;
                if (player1.blobStateAngle !== 180) return false;
                return true;
            },
            stop: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return true;
                if (!player1.blobState) return true;
                return false;
            },
            trip: function () {
                game.level.discoverBlueCube();
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.type == "cube" && !e.red);
                o.alpha = 1;
                o.decay = 0;
                o.noCollect = false;
                game.background.effect.start("blue", { x: o.x, y: o.y });
                if (!o.collected) {
                    var o = game.objects.objects.find(e => e.id == "ultra blue cube clue");
                    if (!o.peeked) {
                        o.peeked = true;
                        //o.alpha = 1;
                        o.decay = 0.1;
                        var o = game.objects.objects.find(e => e.id == "ultra blue cube clue 2");
                        //o.alpha = 1;
                        o.decay = 0.1;
                        var o = game.objects.objects.find(e => e.id == "ultra blue cube clue 3");
                        //o.alpha = 1;
                        o.decay = 0.1;
                    }
                }
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.type == "cube" && !e.red);
                o.alpha = 1;
                o.noCollect = true;
                if (!o.collected) o.decay = 0.1;
            }
        },
        {
            name: "ultra blue cube",
            check: function () {
                return false;
                if (!game.level.triggers.tripped("cube")) return false;
                var o = game.objects.objects.find(e => e.type == "cube" && !e.red);
                if (o.collected) return false;
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return false;
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue");
                var dist = Math.min(distTo(player1.x, player1.y, o.x, o.y), distTo(player2.x, player2.y, o.x, o.y));
                if (dist > 30) return false;
                if (!game.input.left || !game.input.down || game.input.leftStart > 15 || game.input.downStart > 15) return false;
                return true;
            },
            stop: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return true;
                var o = game.objects.objects.find(e => e.type == "cube" && !e.red);
                if (o.collected) return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue");
                game.background.effect.start("magenta", o);
                game.level.discoverUltraBlueCube();
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue 2");
                o.alpha = 1;
                o.decay = 0;
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue 3");
                o.alpha = 1;
                o.decay = 0;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue");
                o.activated = false;
                o.alpha = 1;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue 2");
                o.activated = false;
                o.alpha = 1;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue 3");
                o.activated = false;
                o.alpha = 1;
                o.decay = -0.1;
            },
            passive: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return;
                var o = game.objects.objects.find(e => e.id == "blue cube enterable");
                var colliding1 = blocksColliding(o, { x: player1.x, y: player1.y, w: 0, h: 0 });
                var colliding2 = blocksColliding(o, { x: player2.x, y: player2.y, w: 0, h: 0 });
                if ((!colliding1 || !colliding2) && !game.level.playerInvincible) {
                    player1.delete = true;
                    player2.delete = true;
                    game.particles.createEffect("eye death", player1);
                    game.particles.createEffect("eye death", player2);
                    game.cam.screenshake = 20;
                    game.soundEffects.death();
                }
                if (game.level.triggers.tripped("ultra blue cube 2")) return;
                player1.xmove = -10;
                player1.ymove = 14;
                player2.xmove = -10;
                player2.ymove = 14;
            }
        },
        {
            name: "ultra blue cube 2",
            check: function () {
                if (!game.level.triggers.tripped("ultra blue cube")) return false;
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return false;
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue 2");
                var dist = Math.min(distTo(player1.x, player1.y, o.x, o.y), distTo(player2.x, player2.y, o.x, o.y));
                if (dist > 30) return false;
                if (!game.input.right || !game.input.down || game.input.rightStart > 15 || game.input.downStart > 15) return false;
                return true;
            },
            stop: function () {
                return !game.level.triggers.tripped("ultra blue cube");
            },
            trip: function () {
                game.soundEffects.blueCubePreClue();
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue 2");
                o.activated = true;
            },
            passive: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return;
                if (game.level.triggers.tripped("ultra blue cube 3")) return;
                player1.xmove = 10;
                player1.ymove = 14;
                player2.xmove = 10;
                player2.ymove = 14;
            }
        },
        {
            name: "ultra blue cube 3",
            check: function () {
                if (!game.level.triggers.tripped("ultra blue cube 2")) return false;
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return false;
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue 3");
                var dist = Math.min(distTo(player1.x, player1.y, o.x, o.y), distTo(player2.x, player2.y, o.x, o.y));
                if (dist > 30) return false;
                if (!game.input.left || !game.input.down || game.input.leftStart > 15 || game.input.downStart > 15) return false;
                return true;
            },
            stop: function () {
                return !game.level.triggers.tripped("ultra blue cube");
            },
            trip: function () {
                game.soundEffects.blueCubePreClue();
                var o = game.objects.objects.find(e => e.id == "ultra blue cube clue 3");
                o.activated = true;
            },
            passive: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return;
                player1.xmove = -10;
                player1.ymove = 14;
                player2.xmove = -10;
                player2.ymove = 14;
            }
        },
        {
            name: "red cube",
            check: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return false;
                var o1 = game.objects.objects.find(e => e.id == "red cube clue 1");
                var o2 = game.objects.objects.find(e => e.id == "red cube clue 2");
                var dist1 = Math.min(distTo(player1.x, player1.y, o1.x, o1.y), distTo(player2.x, player2.y, o1.x, o1.y));
                var dist2 = Math.min(distTo(player1.x, player1.y, o2.x, o2.y), distTo(player2.x, player2.y, o2.x, o2.y));
                return dist1 < 40 && dist2 < 40;
            },
            stop: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return false;
                return player1.redCubeExitTime >= 100;
            },
            trip: function () {
                game.level.discoverRedCube();
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                player1.redCubeExitTime = 0;
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                var avgX = player1.x * 0.5 + player2.x * 0.5;
                var avgY = player1.y * 0.5 + player2.y * 0.5;
                game.background.effect.start("red", { x: avgX, y: avgY });
                var o = game.objects.objects.find(e => e.id == "red cube clue 1");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "red cube clue 2");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "red cube entrance");
                o.alpha = 0;
                o.eyeCollide = false;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
                var o = game.objects.objects.find(e => e.id == "red cube top wall");
                o.nonEnterable = false;
            },
            untrip: function () {
                game.background.effect.end("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue 1");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "red cube clue 2");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "red cube entrance");
                o.alpha = 1;
                o.eyeCollide = true;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 1;
                    o.decay = 0.1;
                }
                var o = game.objects.objects.find(e => e.id == "red cube top wall");
                o.nonEnterable = true;
            }
        },
        {
            name: "red cube camera",
            check: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (player1 && player2) {
                    if (player1.redCubeExitTime) return false;
                    if (player1.x < 2350 && player2.x < 2350) return false;
                    if (player1.y < 1800 && player2.y < 1800) return false;
                }
                if (game.level.triggers.tripped("red cube")) return true;
            },
            stop: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (player1 && player2) {
                    if (player1.x < 2350 && player2.x < 2350) return true;
                    if (player1.y < 1800 && player2.y < 1800) return true;
                    if (player1.y > 2800 && player1.blobState) return true;
                }
                if (!game.level.triggers.tripped("red cube")) return true;
            },
            trip: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                if (player1) player1.redCubeExitTime = 0;
            },
            untrip: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                if (player1) player1.redCubeExitTime = 1;
            }
        },
        {
            name: "red cube exit",
            check: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return false;
                return player1.y > 2800 && player2.y > 2800;
            },
            stop: function () {
                if (!game.level.triggers.tripped("red cube")) return true;
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return true;
                if (player1.x <= 2365 && player2.x <= 2365) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube permeable wall");
                o.nonEnterable = false;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube permeable wall");
                o.nonEnterable = true;
            }
        }
    ],
    viewportBoundary: { x: 0, y: 0, w: 1900, h: 2500 },
    checkForManualRespawn: function () {
        return game.level.triggers.tripped("red cube");
    },
    beforeManualRespawn: function () {
        var a = Math.min(Math.max((100 - this.playerRespawnTime) / 100, 0), 1);
        var p0 = easeInOut(a);
        game.cam.x = game.cam.x * (1 - p0) + (2470) * p0;
        game.cam.y = game.cam.y * (1 - p0) + (2120) * p0;
    },
    manualRespawn: function () {
        this.playerDead = false;
        var playerEye1 = {};
        playerEye1.type = "player eye";
        playerEye1.id = "player eye 1";
        playerEye1.x = 2470;
        playerEye1.y = 2020;
        playerEye1.w = 10;
        playerEye1.h = 10;
        playerEye1.spawnAnimation = 100;
        var playerEye2 = {};
        playerEye2.type = "player eye";
        playerEye2.id = "player eye 2";
        playerEye2.x = 2470;
        playerEye2.y = 2220;
        playerEye2.w = 10;
        playerEye2.h = 10;
        playerEye2.spawnAnimation = 100;
        game.objects.objects.push(playerEye1);
        game.objects.objects.push(playerEye2);
    },
    camFunction: function () {
        if (game.level.triggers.tripped("way out")) {
            if (game.level.triggers.tripped("red cube camera")) {
                game.cam.viewportBoundary.w = 1800;
            } else {
                var playerEye = game.objects.objects.find(e => e.id == "player eye 1");
                if (playerEye && playerEye.redCubeExitTime) {
                    playerEye.redCubeExitTime++;
                    if (playerEye.redCubeExitTime < 100) {
                        var playerEye2 = game.objects.objects.find(e => e.id == "player eye 2");
                        if (playerEye2) playerEye2.xmove = Math.min(playerEye2.xmove, 0);
                        playerEye.xmove = Math.min(playerEye.xmove, 0);
                    }
                    var a = easeInOut(playerEye.redCubeExitTime / 100);
                    game.cam.viewportBoundary.w = 1800 - 700 * a;
                }
            }
        }
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        if (player.x > 2420) return true;
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
        x: -270,
        y: 0
    }
}