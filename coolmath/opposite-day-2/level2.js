levels[1] = {
    objects: [
        { type: "lava", drawType: "lava glass", x: -2000, y: -2900, w: 1400, h: 5000, alpha: 0, collide: false, id: "blue cube" },
        { type: "block", x: -600, y: 300, w: 200, h: 125, collide: false, alpha: 0.15 },
        { type: "block", x: -1850, y: 425, w: 1400, h: 2000, collide: false, alpha: 0.15 },
        { type: "text", content: "Jumping. How smart.", x: -1075, y: 115, font: "40px rubik", alpha: 0, id: "jump1" },
        { type: "text", content: "You think it works the second time?", x: -1200, y: 0, font: "40px rubik", alpha: 0, id: "jump2" },
        { type: "text", content: "That was embarrassing.", x: -1200, y: 300, font: "40px rubik", alpha: 0, id: "jump3" },
        { type: "text", content: "I'm stunned at your level of skill...", x: 0, y: -250, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50 },
        { type: "block", x: 500, y: -1000, w: 2000, h: 800, slippery: true },
        { type: "block", x: 500, y: -200, w: 2000, h: 5000 },
        { type: "block", x: -600, y: 100, w: 2000, h: 225 },
        { type: "block", x: -500, y: 200, w: 2000, h: 5000 },
        { type: "block", x: -3250, y: 100, w: 1500, h: 5000, id: "platform3", slippery: true },
        { type: "block", x: -1050, y: 100, w: 200, h: 25, id: "platform1", slippery: true },
        { type: "block", x: -1500, y: 100, w: 200, h: 25, id: "platform2", slippery: true },
        { type: "block", x: -1850, y: 425, w: 1010, h: 100 },
        { type: "clue", x: 260, y: -180, collide: false, proximity: 100, radius: 0, id: "blue cube clue", air: true },
        { type: "clue", x: -450, y: -250, collide: false, proximity: 1, radius: 0, id: "blue cube ultra clue", air: true, ultra: true, alpha: 0 },
        { type: "block", drawType: "glass", x: 150, y: -100, w: 200, h: 25, alpha: 0, collide: false, id: "blue cube" },
        { type: "block", drawType: "glass", x: -300, y: -150, w: 100, h: 25, alpha: 0, collide: false, id: "blue cube" },
        { type: "block", drawType: "glass", x: -500, y: -320, w: 100, h: 25, alpha: 0, collide: false, id: "blue cube" },
        { type: "block", drawType: "glass", x: 0, y: -400, w: 100, h: 25, alpha: 0, collide: false, id: "blue cube" },
        { type: "block", drawType: "glass", x: 100, y: -570, w: 100, h: 25, alpha: 0, collide: false, id: "blue cube" },
        { type: "block", drawType: "glass", x: -300, y: -630, w: 100, h: 25, alpha: 0, collide: false, id: "blue cube" },
        { type: "block", drawType: "glass", x: -500, y: -800, w: 100, h: 25, alpha: 0, collide: false, id: "blue cube" },
        { type: "block", drawType: "glass", x: -137.5, y: -900, w: 100, h: 25, alpha: 0, collide: false, id: "blue cube" },
        { type: "text", content: "This should be easy for you.", font: "40px Rubik", x: 0, y: -470, alpha: 0, collide: false, id: "blue cube text" },
        { type: "cube", x: -87.5, y: -1100, collide: false, collected: false },
        { type: "clue", x: -750, y: -50, collide: false, proximity: 0, radius: 0, alpha: 0, id: "shortcut clue", air: true, color: { r: 0, g: 230, b: 0 } },
        { type: "text", content: "Wheeeeeeeeeeeeeeee!!!", x: -1200, y: -250, font: "40px rubik", alpha: 0, id: "shortcut text" },
        { type: "clue", x: -1000, y: -100, collide: false, proximity: 0, radius: 0, id: "ultra shortcut clue", air: true, ultra: true, angle: 180, alpha: 0 },
        { type: "text", content: "Admit it, that one got you.", x: -2000, y: 200, font: "40px rubik", alpha: 0, id: "figured out text" },
        { type: "block", x: -600, y: 300, w: 200, h: 1000, id: "red cube cover" },
        { type: "block", x: -1850, y: 425, w: 1400, h: 1000, id: "red cube cover" },
        { type: "clue", x: -560, y: 375, collide: false, proximity: 100, radius: 50, alpha: 0, id: "red cube clue", color: { r: 255, g: 100, b: 100 } },
        { type: "block", x: -1850, y: 2000, w: 1400, h: 2000, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1800, y: 500, w: 50, h: 5000, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1800, y: 1200, w: 100, h: 200, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1750, y: 900, w: 40, h: 300, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1800, y: 500, w: 100, h: 400, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1800, y: 1640, w: 100, h: 150, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -700, y: 425, w: 100, h: 1300 },
        { type: "block", x: -950, y: 425, w: 300, h: 100, id: "red cube exit", alpha: 1 },
        { type: "block", x: -650, y: 1700, w: 50, h: 225, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1200, y: 1675, w: 550, h: 70, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1750, y: 1790, w: 40, h: 210, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1750, y: 1400, w: 40, h: 240, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1200, y: 1830, w: 200, h: 50, alpha: 0, collide: false, redCube: true, slippery: true },
        { type: "lava", x: -1200, y: 1880, w: 200, h: 10, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1210, y: 1840, w: 10, h: 50, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1000, y: 1840, w: 10, h: 50, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1250, y: 1650, w: 625, h: 55, alpha: 0, collide: false, redCube: true, slippery: true },
        { type: "lava", x: -1150, y: 1450, w: 40, h: 200, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1110, y: 1450, w: 485, h: 250, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1327, y: 1300, w: 725, h: 200, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1317, y: 1150, w: 40, h: 150, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1277, y: 1125, w: 650, h: 200, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1400, y: 980, w: 770, h: 170, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1390, y: 780, w: 40, h: 200, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1350, y: 755, w: 720, h: 250, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1590, y: 680, w: 970, h: 100, alpha: 0, collide: false, redCube: true },
        { type: "text", content: "Have fun with this one.", x: -1350, y: 1950, font: "40px rubik" },
        { type: "lava", x: -1750, y: 400, w: 1150, h: 1000, id: "platform4" },
        { type: "cube", x: -773, y: 600, collide: false, collected: false, proximity: 1, radius: 0, red: true, alpha: 0, redCube: true },
        { type: "clue", collide: false, x: -1580, y: 1280, air: true, ultra: true, angle: 225, id: "red cube ultra clue", alpha: 0 },
        { type: "lava", x: -2000, y: -2900, w: 1400, h: 5000, alpha: 0, collide: false, id: "ultra blue cube lava", alpha: 0, collide: false },
        { type: "lava", x: -600, y: -3200, w: 1400, h: 2000, alpha: 0, collide: false, id: "ultra blue cube lava", alpha: 0, collide: false }
    ],
    triggers: [
        {
            name: "jump first",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("fall first")) return false;
                if (player.x > -600) return false;
                if (player.y >= 60) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "jump1");
                o.time = 0;
                game.soundEffects.platformMove();
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time++;
                o.x = -1050 - 550 * easeInOut(o.time / 50);
                o.w = 200 - 100 * easeInOut(o.time / 50);
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.x = -1500 - 225 * easeInOut(o.time / 50);
                o.w = 200 - 100 * easeInOut(o.time / 50);
                var o = game.objects.objects.find(e => e.id == "jump1");
                o.time++;
                o.alpha = easeInOut((o.time - 30) / 30);
            }
        },
        {
            name: "fall first",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("jump first")) return false;
                if (player.y < 100) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.time = 0;
                game.soundEffects.platformMove();
            },
            passive: function () {
                if (game.level.triggers.tripped("jump second")) return;
                if (game.level.triggers.tripped("fall second")) return;
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time++;
                o.y = 100 + 200 * easeInOut(o.time / 20);
                o.w = 200 + 300 * easeInOut((o.time - 10) / 20);
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.y = 100 + 200 * easeInOut(o.time / 20);
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time++;
                o.y = 100 + 200 * easeInOut(o.time / 20);
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.time++;
                o.alpha = easeInOut((o.time - 20) / 20);
                if (o.time < 40) {
                    var player = game.objects.objects.find(e => e.type == "player");
                    if (player) {
                        player.ymove *= 0.95;
                    }
                }
            }
        },
        {
            name: "jump second",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("shortcut")) return false;
                if (!game.level.triggers.tripped("fall first")) return false;
                if (game.level.triggers.tripped("fall second")) return false;
                if (player.x > -1000) return false;
                if (player.ymove >= 0 && player.y >= 60) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "jump2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 0;
                game.soundEffects.platformMove();
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time++;
                o.x = -1050 + 350 * easeInOut(o.time / 50);
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.x = -1500 + 650 * easeInOut(o.time / 50);
                o.w = 200 - 100 * easeInOut(o.time / 50);
                var o = game.objects.objects.find(e => e.id == "jump2");
                o.time++;
                o.alpha = easeInOut(o.time / 30);
            }
        },
        {
            name: "fall second",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("shortcut")) return false;
                if (game.level.triggers.tripped("jump second")) return false;
                if (!game.level.triggers.tripped("fall first")) return false;
                if (player.y < 261) return false;
                if (player.x > -1000) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 0;
                if (!game.level.triggers.tripped("stop red cube")) {
                    var o = game.objects.objects.find(e => e.id == "red cube clue");
                    o.decay = -0.1;
                    for (var o of game.objects.objects.filter(e => e.id == "red cube cover")) {
                        o.collide = false;
                    }
                }
                game.soundEffects.platformMove();
            },
            passive: function () {
                if (game.level.triggers.tripped("jump third")) return false;
                if (game.level.triggers.tripped("fall third")) return false;
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.y = 300 + 75 * easeInOut(o.time / 20);
                o.w = 200 + 250 * easeInOut(o.time / 20);
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time++;
                o.y = 300 + 75 * easeInOut(o.time / 20);
            }
        },
        {
            name: "jump third",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("fall third")) return false;
                if (!game.level.triggers.tripped("fall second")) return false;
                if (player.y >= 335 && player.ymove >= 0) return false;
                if (player.x > -1500) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "jump3");
                o.time = 0;
                game.soundEffects.platformMove();
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time++;
                o.x = -1050 + 250 * easeInOut(o.time / 40);
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.x = -1500 + 700 * easeInOut(o.time / 40);
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time++;
                o.y = 375 - 275 * easeInOut(o.time / 40);
                var o = game.objects.objects.find(e => e.id == "jump3");
                o.time++;
                o.alpha = easeInOut((o.time - 30) / 30);
            }
        },
        {
            name: "fall third",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("jump third")) return false;
                if (!game.level.triggers.tripped("fall second")) return false;
                if (player.y < 336) return false;
                if (player.x > -1500) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform4");
                o.time = 0;
                o.decay = 0.1;
                o.alpha = 1;
                o.collide = false;
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time = 0;
                game.soundEffects.platformMove();
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time++;
                o.y = 375 + 50 * easeInOut(o.time / 20);
                var o = game.objects.objects.find(e => e.id == "platform4");
                o.time++;
                o.y = 400 + 50 * easeInOut(o.time / 20);
            }
        },
        {
            name: "end blue cube",
            check: function () {
                if (!game.level.triggers.tripped("blue cube")) return false;
                let player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y == 60 && !game.level.triggers.tripped("blue cube ultra")) return true;
            },
            trip: function () {
                let player = game.objects.objects.find(e => e.type == "player");
                player.stopBlueCubeAnimation = 0;
            },
            stop: function () {
                let player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.stopBlueCubeAnimation > 70;
            },
            passive: function () {
                let player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.stopBlueCubeAnimation++;
            }
        },
        {
            name: "stop blue cube",
            check: function () {
                let cube = game.objects.objects.find(e => e.type == "cube" && e.color == "blue");
                if (cube.collected) return true;
                return false;
            },
            trip: function () {
                let clue = game.objects.objects.find(e => e.id == "blue cube clue");
                clue.alpha = 0;
                clue.decay = 0.1;
            }
        },
        {
            name: "blue cube",
            check: function () {
                if (game.level.triggers.tripped("stop blue cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y) < 60) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y == 60 && !game.level.triggers.tripped("blue cube ultra")) return true;
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, -87.5, -1100) < 70) return true;
                return false;
            },
            trip: function () {
                game.level.discoverBlueCube();
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "blue cube text");
                o.alpha = 0;
                o.decay = -0.1;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube")) {
                    o.collide = true;
                    o.alpha = 0;
                    o.decay = -0.1;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                if (!o.peeked) {
                    //o.alpha = 1.5;
                    o.decay = 0.05;
                    o.peeked = true;
                }
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "blue cube text");
                o.alpha = 1;
                o.decay = 0.1;
                var arr = game.objects.objects.filter(e => e.id == "blue cube");
                for (var o of arr) {
                    o.collide = false;
                    o.alpha = 1.1;
                    o.decay = 0.1;
                }
            }
        },
        {
            name: "blue cube ultra",
            check: function () {
                return false;
                var o = game.objects.objects.find(e => e.type == "cube" && !e.red);
                if (o.collected) return false;
                if (!game.level.triggers.tripped("blue cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist > 30) return false;
                if (game.input.downStart > 10 || !game.input.down) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (!game.level.triggers.tripped("blue cube")) return true;
                return false;
            },
            trip: function () {
                game.level.discoverUltraBlueCube();
                game.background.effect.start("magenta");
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = 50;
                player.swapControls = { left: "left", right: "right" };
                for (var o of game.objects.objects.filter(e => e.id == "ultra blue cube lava")) {
                    o.alpha = 1;
                    o.decay = 0;
                    o.collide = true;
                    o.originalX = o.x;
                }
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) {
                    player.swapControls = false;
                    player.ymove = 60;
                    player.xmove = -100;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube ultra clue");
                o.activated = false;
                o.alpha = 0;
                for (var o of game.objects.objects.filter(e => e.id == "ultra blue cube lava")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                    o.x = o.originalX;
                }
            },
            passive: function () {
                for (var o of game.objects.objects.filter(e => e.id == "ultra blue cube lava")) {
                    o.x++;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.againstBottom.current) {
                    player.ymove = -50;
                    game.soundEffects.jump();
                } else if (player.againstTop.current) {
                    player.ymove = 50;
                    game.soundEffects.jump();
                } else if (player.ymove < 0) {
                    player.ymove -= 0.3;
                } else {
                    player.ymove += 0.3;
                }
            }
        },
        {
            name: "collect cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, -87.5, -1100) < 70) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -200) return true;
                return false;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove *= 0.9;
            }
        },
        {
            name: "shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                if (o.alpha < 1) return false;
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y) < 50) return true;
                return false;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "shortcut text");
                o.decay = -0.05;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove = -30;
                player.ymove = -10;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                if (!o.peeked) {
                    //o.alpha = 1.5;
                    o.decay = 0.05;
                    o.peeked = true;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove -= 2;
            }
        },
        {
            name: "ultra shortcut",
            check: function () {
                return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.upStart > 5 || !game.input.up) return false;
                return true;
            },
            trip: function () {
                game.level.discoverUltraShortcut();
                game.background.effect.start("magenta", null, null, true);
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                o.activated = true;
                o.alpha = 1;
                o.decay = 0;
                game.cam.viewportBoundary.y = -200;
                game.cam.viewportBoundary.h = 200;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -40;
                player.xmove = 0;
            }
        },
        {
            name: "figured out",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("shortcut")) return false;
                if (player.x < -1900) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "figured out text");
                o.decay = -0.05;
            }
        },
        {
            name: "red cube",
            check: function () {
                if (game.level.triggers.tripped("stop red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!game.level.triggers.tripped("fall third")) return false;
                if (!player) return false;
                if (player.x < -640) return false;
                if (player.y < 270) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -640) return false;
                if (player.y > 385) return false;
                return true;
            },
            trip: function () {
                game.level.discoverRedCube();
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 1;
                    o.collide = true;
                    o.decay = 0;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube cover")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                }
                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                if (!o.peeked) {
                    o.peeked = true;
                    //o.alpha = 1;
                    o.decay = 0;
                }
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube cover")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            }
        },
        {
            name: "red cube background",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -700) return false;
                return game.level.triggers.tripped("red cube");
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -700) return false;
                if (player.y > 400) return false;
                return true;
            },
            trip: function () {
                game.background.effect.start("red");
            },
            untrip: function () {
                game.background.effect.end("red");
            }
        },
        {
            name: "red cube exit",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.level.triggers.tripped("red cube background")) return false;
                if (player.x > -700) return false;
                if (player.x < -900) return false;
                if (player.y > 640) return false;
                if (player.y < 400) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube exit");
                o.collide = false;
                o.decay = 0.1;
                o.alpha = 1;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y < 385) return true;
                if (player.x > -700) return true;
                if (player.y > 640) return true;
                return false;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube exit");
                o.collide = true;
                o.decay = -0.1;
                o.alpha = 0;
                var player = game.objects.objects.find(e => e.id == "player");
                if (player) player.ymove *= 0.3;
            }
        },
        {
            name: "stop red cube",
            check: function () {
                let player = game.objects.objects.find(e => e.type == "player");
                if (player && player.y >= 385) return false;
                let cube = game.objects.objects.find(e => e.type == "cube" && e.color == "red");
                if (cube.collected) return true;
                return false;
            },
            trip: function () {
                let clue = game.objects.objects.find(e => e.id == "red cube clue");
                clue.alpha = 1;
                clue.decay = 0.1;
                for (var o of game.objects.objects.filter(e => e.id == "red cube cover")) {
                    o.collide = true;
                }
            }
        },
        {
            name: "hide ultra red cube clue",
            check: function () {
                if (!game.level.triggers.tripped("red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > 650) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                o.decay = 0.1;
            }
        },
        {
            name: "red cube ultra",
            check: function () {
                return false;
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                if (o.collected) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.level.triggers.tripped("red cube")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.rightStart > 10 || !game.input.right || game.input.upStart > 10 || !game.input.up) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                var cube = game.objects.objects.find(e => e.type == "cube" && e.red);
                if (cube.collected) return true;
                if (!game.level.triggers.tripped("red cube")) return true;
                return false;
            },
            trip: function () {
                game.level.discoverUltraRedCube();
                game.background.effect.start("magenta");
                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                o.activated = true;
                o.alpha = 1;
                o.decay = 0;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -30;
                player.xmove = 30;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
                game.level.playerControlDelay = 2;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "red cube ultra clue");
                o.activated = false;
                o.alpha = 1;
                o.decay = 0.1;
                let player = game.objects.objects.find(e => e.type == "player");
                if (player) {
                    player.xmove = 0;
                    player.ymove = -30;
                }
                game.level.playerControlDelay = 10;
            },
            passive: function () {
                game.level.playerControlDelay = 2;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.ymove < 0) {
                    player.ymove = -30;
                } else if (player.ymove > 0) {
                    player.ymove = 30;
                }
                if (player.xmove < 0) {
                    player.xmove = -30;
                } else if (player.xmove > 0) {
                    player.xmove = 30;
                }
                if (player.againstBottom.current) player.ymove = -30;
                if (player.againstTop.current) player.ymove = 30;
                if (player.againstLeft.current) player.xmove = 30;
                if (player.againstRight.current) player.xmove = -30;
            }
        }
    ],
    viewportBoundary: { x: -2000, y: -10000, w: 2000, h: 11700 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        var p = easeInOut(1 - (player.x + 650) / 350);
        var p2 = easeInOut(1 - (player.x + 450) / 350);
        if (player.x < -1400 && !game.level.triggers.tripped("jump third")) {
            p = easeInOut((player.x + 1900) / 400);
            p2 = easeInOut((player.x + 1900) / 400);
        }
        if (game.level.triggers.tripped("blue cube")) return;
        if (game.level.triggers.tripped("end blue cube")) {
            let a = easeInOut(player.stopBlueCubeAnimation / 70);
            if (p != 0 || player.x < -1400) {
                let targetX = (player.x + player.w / 2) * (1 - p) - 1175 * p;
                game.cam.x = targetX * a + (player.x + player.w / 2) * (1 - a);
                game.cam.x = Math.max(game.cam.viewportBoundary.x, game.cam.x);
            }
            if (p2 != 0 || player.x < -1400) {
                let targetZoom = 1 * (1 - p2) + 0.7 * p2;
                game.cam.zoom = targetZoom * a + 1 * (1 - a);
            }
            return;
        }
        if ((player.y > 260 && player.x > -800) || player.y > 385) {
            game.cam.x = -1175;
            game.cam.zoom = 0.7;
            return;
        }
        if (p != 0 || player.x < -1400) {
            let targetX = (player.x + player.w / 2) * (1 - p) - 1175 * p;
            game.cam.x = targetX;
            game.cam.x = Math.max(game.cam.viewportBoundary.x, game.cam.x);
        }
        if (p2 != 0 || player.x < -1400) {
            let targetZoom = 1 * (1 - p2) + 0.7 * p2;
            game.cam.zoom = targetZoom;
        }
    },
    checkForManualRespawn: function () {
        return this.lastPlayerPosition.y > 385;
    },
    beforeManualRespawn: function () {
        this.playerRespawnTime = Math.min(this.playerRespawnTime, 100);
        var a = Math.min(Math.max((50 - this.playerRespawnTime) / 50, 0), 1);
        var p0 = easeInOut(a);
        game.cam.x = game.cam.x * (1 - p0) + (-1175) * p0;
        game.cam.y = game.cam.y * (1 - p0) + (1700) * p0;
    },
    manualRespawn: function () {
        this.playerDead = false;
        var player = this.createPlayer(-570, 1700);
        player.spawnTime = 150;
        player.spawnAnimation = 20;
        game.objects.objects.push(player);
    },
    levelComplete: function () {
        if (game.level.triggers.tripped("ultra shortcut")) return true;
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -2550;
    },
    camOffset: {
        x: 0,
        y: 0
    },
    camFollowX: 1,
    camStartingPosition: {
        x: 0,
        y: 0
    },
    spawnPoint: {
        x: 300,
        y: 0
    }
}