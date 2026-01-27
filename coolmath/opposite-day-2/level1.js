var levels = [];
levels[0] = {
    objects: [
        { type: "text", content: "It's Opposite Day!", x: 0, y: -550, font: "80px rubikbold", spawnAnimation: 80, spawnAnimationDuration: 50 },
        { type: "text", content: "(again)", x: 0, y: -470, font: "50px rubik", spawnAnimation: 150, spawnAnimationDuration: 50 },
        { type: "image", image: "arrows", x: -200, y: -400, w: 140, h: 100, spawnAnimation: 200, spawnAnimationDuration: 50 },
        { type: "text", content: "or", x: 0, y: -350, font: "50px rubik", spawnAnimation: 210, spawnAnimationDuration: 50 },
        { type: "image", image: "wasd", x: 60, y: -400, w: 140, h: 100, spawnAnimation: 220, spawnAnimationDuration: 50 },
        { type: "text", content: "Go this way to win", x: 0, y: -200, font: "60px rubik", spawnAnimation: 300, spawnAnimationDuration: 50 },
        { type: "text", content: "You sure figured", x: -1150, y: -200, font: "40px rubik", alpha: 0, id: "figured text 1" },
        { type: "text", content: "that out quick...", x: -1150, y: -150, font: "40px rubik", alpha: 0, id: "figured text 2" },
        { type: "arrow", x: 0, y: -100, spawnAnimation: 300, spawnAnimationDuration: 50 },
        { type: "text", content: "It's Opposite Day by the way...", x: 1000, y: 440, font: "34px rubikbold" },
        { type: "text", content: "You're a clever one, aren't you.", x: 1000, y: 1000, font: "34px rubik" },
        { type: "text", content: "Need to go faster?", x: -1100, y: 200, font: "34px rubik" },
        { type: "lava", x: 660, y: 500, w: 800, h: 350 },
        { type: "block", x: 600, y: 100, w: 800, h: 2000, id: "false block" },
        { type: "block", x: -2000, y: 100, w: 1600, h: 200, id: "shortcut passage" },
        { type: "clue", x: -550, y: 150, collide: false, proximity: 1, radius: 0, id: "shortcut passage clue", down: true, color: { r: 0, g: 230, b: 0 } },
        { type: "clue", x: -900, y: 200, collide: false, proximity: 1, radius: 0, id: "ultra shortcut clue", ultra: true, angle: 90, air: true, alpha: 0 },
        { type: "lava", x: -1900, y: 150, w: 500, h: 25, collide: false, id: "ultra shortcut lava", alpha: 0 },
        { type: "lava", x: -1900, y: 225, w: 500, h: 25, collide: false, id: "ultra shortcut lava", alpha: 0 },
        { type: "block", x: -2000, y: 100, w: 1400, h: 50 },
        { type: "block", x: -2000, y: 250, w: 1600, h: 50 },
        { type: "block", x: -500, y: 100, w: 1200, h: 250 },
        { type: "block", x: -2000, y: 300, w: 2500, h: 1300 },
        { type: "block", x: 600, y: 450, w: 100, h: 500 },
        { type: "block", x: 600, y: 850, w: 800, h: 100 },
        { type: "block", x: 400, y: 1050, w: 1300, h: 1000 },
        { type: "block", x: 1650, y: 0, w: 100, h: 2000 },
        { type: "block", x: 1650, y: -1000, w: 100, h: 1010, slippery: true },
        { type: "block", x: 1300, y: 100, w: 52, h: 850, slippery: true },
        { type: "block", x: 1350, y: 100, w: 150, h: 850 },
        { type: "cube", x: 1400, y: 0, collide: false, collected: false },
        { type: "block", x: 490, y: 300, w: 210, h: 1000, collide: false, id: "blue cube" },
        { type: "block", x: 490, y: 900, w: 1200, h: 200, collide: false, id: "blue cube 2" },
        { type: "block", x: 1490, y: 100, w: 210, h: 1200, id: "blue cube 3" },
        { type: "block", x: 500, y: 300, w: 200, h: 1000, collide: false, alpha: 0.15 },
        { type: "block", x: 1500, y: 100, w: 200, h: 1000, collide: false, alpha: 0.15 },
        { type: "block", x: 700, y: 500, w: 800, h: 1000, collide: false, alpha: 0.15 },
        { type: "clue", x: 640, y: 400, collide: false, proximity: 50, radius: 75, id: "blue cube clue", down: true, angle: 90 },
        { type: "clue", x: 1050, y: 200, collide: false, proximity: 1, radius: 0, id: "blue cube ultra clue", ultra: true, air: true, angle: 180, alpha: 0 },
        { type: "clue", x: 1050, y: 0, collide: false, proximity: 1, radius: 0, id: "blue cube ultra change direction clue", ultra: true, air: true, angle: 270, alpha: 0 },
        { type: "lava", x: 950, y: -50, w: 50, h: 300, collide: false, alpha: 0, id: "blue cube ultra lava" },
        { type: "lava", x: 1100, y: 100, w: 50, h: 150, collide: false, alpha: 0, id: "blue cube ultra lava" },
        { type: "lava", x: 950, y: -100, w: 400, h: 50, collide: false, alpha: 0, id: "blue cube ultra lava" },
        { type: "lava", x: 1100, y: 50, w: 250, h: 50, collide: false, alpha: 0, id: "blue cube ultra lava" },
        { type: "cube", x: -500, y: -400, collide: false, collected: false, red: true, alpha: 0 },
        { type: "block", x: -1900, y: -450, w: 100, h: 300, slippery: true, alpha: 0 },
        { type: "block", x: -1900, y: -150, w: 100, h: 100, alpha: 0 },
        { type: "block", x: -1425, y: -400, w: 50, h: 25, redCube: true, alpha: 0, collide: false },
        { type: "lava", x: -1425, y: -425, w: 25, h: 25, redCube: true, alpha: 0, collide: false },
        { type: "lava", x: -1400, y: -375, w: 50, h: 25, redCube: true, alpha: 0, collide: false },
        { type: "block", x: -1000, y: -400, w: 60, h: 25, redCube: true, alpha: 0, collide: false },
        { type: "lava", x: -1025, y: -410, w: 25, h: 35, redCube: true, alpha: 0, collide: false },
        { type: "lava", x: -940, y: -410, w: 25, h: 35, redCube: true, alpha: 0, collide: false },
        { type: "text", content: "You'll never figure", x: -1150, y: -330, font: "30px rubik", alpha: 0, redCube: true },
        { type: "text", content: "this out though.", x: -1150, y: -290, font: "30px rubik", alpha: 0, redCube: true },
        { type: "clue", x: -1450, y: -200, collide: false, proximity: 1, radius: 0, air: true, down: true, angle: 180, color: { r: 255, g: 100, b: 100 }, id: "red cube clue" },
        { type: "clue", x: -970, y: -570, collide: false, proximity: 1, radius: 0, id: "red cube ultra clue", ultra: true, air: true, angle: 270, alpha: 0 },
        { type: "block", x: -430, y: -1000, w: 80, h: 2000, slippery: true, alpha: 0, collide: false, id: "red cube ultra block" },
        { type: "lava", x: -450, y: -1000, w: 20, h: 400, slippery: true, alpha: 0, collide: false, id: "red cube ultra block" },
        { type: "lava", x: -450, y: -520, w: 20, h: 620, slippery: true, alpha: 0, collide: false, id: "red cube ultra block" },
    ],
    triggers: [
        {
            name: "fall in pit",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "false block");
                if (o.collide == false && player.x > 700) return true;
                if (player.x > 750) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < 0) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "false block");
                o.collide = false;
                if (o.alpha === undefined) o.alpha = 1;
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
            },
            passive: function () {
                if (game.level.triggers.tripped("blue cube")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y < 150) {
                    player.xmove *= 0.993;
                }
            }
        },
        {
            name: "blue cube",
            check: function () {
                if (game.level.triggers.tripped("stop blue cube passage")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > 500 && player.x < 700 && player.y > 200) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (game.level.triggers.tripped("blue cube ultra")) return false;
                if (player.y < 60) return true;
                return false;
            },
            trip: function () {
                game.level.discoverBlueCube();
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "blue cube 2");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "blue cube 3");
                o.alpha = 1;
                o.decay = 0.1;
                o.collide = false;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = true;

                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                if (!o.peeked) {
                    //o.alpha = 1.4;
                    o.decay = 0.05;
                    o.peeked = true;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube ultra change direction clue");
                if (!o.peeked) {
                    //o.alpha = 1.4;
                    o.decay = 0.05;
                    o.peeked = true;
                }
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "blue cube 2");
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "blue cube 3");
                o.alpha = 0;
                o.decay = -0.1;
                o.collide = true;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = false;
            }
        },
        {
            name: "stop blue cube passage",
            check: function () {
                let cube = game.objects.objects.find(e => e.type == "cube" && !e.red);
                if (cube.collected) return true;
                return false;
            },
            trip: function () {
                let clue = game.objects.objects.find(e => e.id == "blue cube clue");
                clue.alpha = 1;
                clue.decay = 0.1;
                for (let id of ["blue cube", "blue cube 2", "blue cube 3"]) {
                    let o = game.objects.objects.find(e => e.id == id);
                    o.collide = true;
                }
            }
        },
        {
            name: "blue cube background",
            check: function () {
                if (!game.level.triggers.tripped("blue cube")) return false;
                let cube = game.objects.objects.find(e => e.type == "cube" && !e.red);
                if (cube.collected) return false;
                return true;
            },
            stop: function () {
                let cube = game.objects.objects.find(e => e.type == "cube" && !e.red);
                if (cube.collected) return true;
                let player = game.objects.objects.find(e => e.type == "player");
                if (player) {
                    if (player.x < 1260 && player.y <= 60) return true;
                } else {
                    return true;
                }
                return false;
            },
            trip: function () {
                game.background.effect.start("blue");
            },
            untrip: function () {
                game.background.effect.end("blue");
            }
        },
        {
            name: "blue cube ultra",
            check: function () {
                return false;
                if (!game.level.triggers.tripped("blue cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.type == "cube" && !e.red);
                if (o.collected) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.upStart > 20 || !game.input.up) return false;
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
                player.x = o.x - player.w / 2;
                var o = game.objects.objects.find(e => e.id == "blue cube ultra change direction clue");
                o.alpha = 1;
                o.decay = 0;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube ultra lava")) {
                    o.alpha = 1;
                    o.collide = true;
                }
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                o.alpha = 1;
                o.decay = 0.1;
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube ultra lava")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.ymove = -30;
                player.xmove = 0;
            }
        },
        {
            name: "blue cube ultra change direction",
            check: function () {
                if (!game.level.triggers.tripped("blue cube ultra")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube ultra change direction clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.rightStart > 20 || !game.input.right) return false;
                return true;
            },
            stop: function () {
                return !game.level.triggers.tripped("blue cube ultra");
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube ultra change direction clue");
                o.activated = true;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "blue cube ultra change direction clue");
                o.alpha = 1;
                o.decay = 0.1;
                o.activated = false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove = -100;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.ymove = 0;
                player.xmove = 30;
            }
        },
        {
            name: "blue cube camera",
            check: function () {
                return game.level.triggers.tripped("blue cube");
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < 0 && player.y < 100) return true;
                return false;
            },
            trip: function () {
                game.cam.offset = { x: 0, y: 0 };
                game.cam.viewportBoundary.w += 200;
            },
            untrip: function () {
                game.cam.offset = { x: 0, y: -200 };
                game.cam.viewportBoundary.w -= 200;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;

                if (player.y < 100) {
                    var a = easeInOut((player.x - 200) / 400);
                    game.cam.y = game.cam.y * a - 200 * (1 - a);
                }
            }
        },
        {
            name: "figured out",
            check: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -1000) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "figured text 1");
                o.decay = -0.05;
                var o = game.objects.objects.find(e => e.id == "figured text 2");
                o.decay = -0.05;
            }
        },
        {
            name: "shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                if (!player) return false;
                var dist = Math.abs(player.x + player.w / 2 - o.x);
                if (dist < 30 && game.input.down && game.input.downStart < 10 && !game.input.up && player.y == 60) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y <= 59) return true;
                return false;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.collide = false;
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.againstBottom = { current: false, time: 0, last: 10000 };
                player.ymove = 6;

                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                if (!o.peeked) {
                    //o.alpha = 2;
                    o.decay = 0.05;
                    o.peeked = true;
                }
            },
            untrip: function () {
                game.background.effect.end("green");
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.collide = true;
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.activated = false;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y > 60) {
                    player.xmove *= 1.03;
                }
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.alpha = Math.max(o.alpha, 0.15);
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
                if (player.y == 210) return false;
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist > 40) return false;
                if (game.input.leftStart > 20 || !game.input.left) return false;
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
                    o.collide = true;
                    o.alpha = 1;
                    o.decay = 0;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.xmove = -3;
                player.ymove = 0;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                o.alpha = 0;
                for (var o of game.objects.objects.filter(e => e.id == "ultra shortcut lava")) {
                    o.collide = false;
                    o.alpha = 1;
                    o.decay = 0.1;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove *= 1.1;
                player.ymove = 0;
            }
        },
        {
            name: "red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                if (o.collected) return false;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 40) return false;
                if (game.input.upStart == 0 || game.input.upStart > 10) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!player) return true;
                if (player.y >= 50) return true;
                return false;
            },
            trip: function () {
                game.level.discoverRedCube();
                game.background.effect.start("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                o.decay = -0.1;
                o.alpha = 0;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 0;
                    o.decay = -0.1;
                    o.collide = true;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;

                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                if (!o.peeked) {
                    //o.alpha = 2;
                    o.decay = 0.05;
                    o.peeked = true;
                }
            },
            untrip: function () {
                game.background.effect.end("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                o.decay = 0.1;
                o.alpha = 1;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
            }
        },
        {
            name: "hide red cube clue",
            check: function () {
                let cube = game.objects.objects.find(e => e.type == "cube" && e.color == "red");
                if (cube.collected) return true;
                return false;
            },
            trip: function () {
                let clue = game.objects.objects.find(e => e.id == "red cube clue");
                clue.alpha = 0;
                clue.decay = 0.1;
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
                if (game.input.rightStart > 10 || !game.input.right) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -350) return true;
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
                player.xmove = 90;
                for (var o of game.objects.objects.filter(e => e.id == "red cube ultra block")) {
                    o.alpha = 1;
                    o.decay = 0;
                    o.collide = true;
                }
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                o.alpha = 1;
                o.decay = 0.1;
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.id == "red cube ultra block")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
            }
        },
        {
            name: "stop red cube ultra background",
            check: function () {
                if (!game.level.triggers.tripped("red cube ultra")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.xmove < 0) return true;
                return false;
            },
            trip: function () {
                game.background.effect.end("magenta");
            },
            stop: function () {
                return true;
            }
        }
    ],
    viewportBoundary: { x: -1300, y: -10000, w: 2300, h: 20000 },
    checkForManualRespawn: function () {
        return game.level.triggers.tripped("red cube");
    },
    beforeManualRespawn: function () {
        var a = Math.min(Math.max((50 - this.playerRespawnTime) / 100, 0), 1);
        var p0 = easeInOut(a);
        game.cam.x = game.cam.x * (1 - p0) + (-1300) * p0;
        game.cam.y = game.cam.y * (1 - p0) + (-200) * p0;
        game.level.playerRespawnTime = Math.min(game.level.playerRespawnTime, 50);
    },
    manualRespawn: function () {
        let player = game.level.createPlayer(-1470, 0);
        player.spawnTime = 150;
        player.spawnAnimation = 20;
        game.objects.objects.push(player);
    },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (!game.level.triggers.tripped("blue cube camera")) {
            if (!game.level.triggers.tripped("fall in pit")) {
                this.y = -200;
            }
            if (player.x > 0) {
                var a = easeInOut(player.x / 600);
                this.offset.x = a * 500;
            }
        }
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        if (player.x < -1840) return true;
        return false;
    },
    camOffset: {
        x: 0,
        y: -200
    },
    camStartingPosition: {
        x: 0,
        y: -200
    },
    camSpeedModifiers: {
        y: 0.8
    },
    spawnPoint: {
        x: -20,
        y: 0
    }
}