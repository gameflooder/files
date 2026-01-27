levels[4] = {
    objects: [
        { type: "text", content: "Don't press the button...", x: 0, y: -250, font: "40px rubik", spawnAnimation: 120, spawnAnimationDuration: 50, id: "dont press button text" },
        { type: "text", content: "Better run!!!", x: 0, y: -180, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50, alpha: 0, id: "run text" },
        { type: "block", x: -1000, y: -1000, w: 500, h: 2000, id: "left barrier", slippery: true },
        { type: "block", x: 500, y: -1000, w: 50, h: 2000, id: "right barrier", slippery: true },
        { type: "block", x: -2000, y: 100, w: 1700, h: 2000 },
        { type: "block", x: -255, y: 100, w: 8000, h: 2000 },
        { type: "block", x: -350, y: 100, w: 400, h: 2000, id: "shortcut background", collide: false, alpha: 0.15 },
        { type: "block", x: -350, y: 100, w: 400, h: 2000, id: "shortcut barrier" },
        { type: "clue", x: 250, y: -70, collide: false, proximity: 1, radius: 0, id: "ultra shortcut clue 1", angle: 90, ultra: true, air: true, alpha: 0 },
        { type: "clue", x: -277.5, y: -70, collide: false, proximity: 1, radius: 0, id: "ultra shortcut clue 2", angle: 0, ultra: true, air: true, alpha: 0 },
        { type: "clue", x: 150, y: 140, collide: false, proximity: 1, radius: 0, id: "shortcut clue 1", down: true, color: { r: 0, g: 230, b: 0 }, alpha: 0 },
        { type: "clue", x: -277.5, y: 140, collide: false, proximity: 1, radius: 0, id: "shortcut clue 2", down: true, color: { r: 0, g: 230, b: 0 }, alpha: 0 },
        { type: "button", x: -50, y: 70, w: 100, h: 30, originalHeight: 30, pushBack: false, id: "button" },
        { type: "lava", x: -3550, y: -1000, w: 3000, h: 900, id: "lava chase" },
        { type: "lava", x: -100, y: -1000, w: 200, h: 900, id: "fake cube lava", collide: false, alpha: 0 },
        { type: "lava", x: -100, y: -1500, w: 200, h: 900, id: "fake cube top lava", collide: false, alpha: 0 },
        { type: "cube", x: 0, y: -500, w: 200, h: 900, id: "blue cube", collide: false, alpha: 0, onRed: true },
        { type: "clue", x: 0, y: -150, id: "cube clue", lava: true, alpha: 0, proximity: 1, radius: 0 },
        { type: "lava", x: -3550, y: -100, w: 3000, h: 200, id: "lava chase 2", collide: false, alpha: 1 },
        { type: "block", x: 3070, y: -850, w: 500, h: 100, redCube: true, alpha: 0 },
        { type: "lava", x: 100, y: -4000, w: 0, h: 4100, id: "lava chase 3", collide: false },
        { type: "text", content: "It wasn't as hard as you thought.", x: -1000, y: 0, font: "40px rubik", alpha: 0, id: "figured out text" },
        { type: "clue", x: 3300, y: -50, collide: false, proximity: 1, radius: 0, air: true, id: "red cube clue", down: true, angle: 180, color: { r: 255, g: 100, b: 100 } },
        { type: "block", x: 4040, y: 50, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3950, y: -50, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3860, y: -150, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3770, y: -250, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3680, y: -350, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3590, y: -450, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3500, y: -550, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3410, y: -650, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3570, y: -950, w: 100, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3670, y: -1050, w: 100, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3770, y: -1150, w: 100, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3870, y: -1250, w: 100, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3970, y: -1350, w: 100, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3840, y: -1470, w: 400, h: 10, redCube: true, alpha: 0 },
        { type: "block", x: 4150, y: -4000, w: 100, h: 4200, redCube: true, alpha: 0, slippery: true },
        { type: "cube", x: 4000, y: -1570, collide: false, collected: false, red: true, redCube: true, alpha: 0 },
    ],
    triggers: [
        {
            name: "button",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "button");
                return o.pressed;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "left barrier");
                o.delete = true;
                var o = game.objects.objects.find(e => e.id == "right barrier");
                o.delete = true;
                var o = game.objects.objects.find(e => e.id == "run text");
                o.spawnAnimation = 50;
                o.alpha = 1;
                game.cam.viewportBoundary.w += 4700;
                game.cam.viewportBoundary.x -= 1000;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                o.decay = -0.05;
            },
            passive: function () {
                if (game.level.triggers.tripped("third lava chase")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                var o = game.objects.objects.find(e => e.id == "lava chase");
                o.w++;
                o.w = Math.max(o.w, player.x - o.x - 750);
                o.w = Math.min(o.w, 3650);
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                o.w++;
                o.w = Math.max(o.w, player.x - o.x - 750);
                o.w = Math.min(o.w, 3650);
            }
        },
        {
            name: "third lava chase",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "lava chase");
                return o.w == 3650;
            },
            trip: function () {
                if (!game.level.triggers.tripped("shortcut")) {
                    var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                    o.alpha = Math.min(o.alpha, 1);
                    o.decay = 0.1;
                }
                var o = game.objects.objects.find(e => e.id == "lava chase");
                o.w -= 200;
                var o = game.objects.objects.find(e => e.id == "fake cube lava");
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "fake cube top lava");
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.alpha = 0;
                o.decay = -0.02;
            },
            passive: function () {
                if (game.level.triggers.tripped("red cube")) return;
                var o = game.objects.objects.find(e => e.id == "lava chase 3");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                o.w += 1 + Math.sqrt(Math.max(player.x - 1100, 0)) / 9;
                o.w = Math.max(o.w, player.x - o.x - 750);
                o.collide = true;
            }
        },
        {
            name: "don't move",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                if (!o) return;
                if (!blocksCollidingEdge(o, player)) return false;
                if (player.x > 100) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                o.alpha = 1;
                o.maxAlpha = 0.2;
                o.decay = 0.05;
                var o = game.objects.objects.find(e => e.id == "dont press button text");
                o.alpha = 5;
                o.decay = 0.05;
                var o = game.objects.objects.find(e => e.id == "run text");
                o.alpha = 5;
                o.decay = 0.05;
            }
        },
        {
            name: "moved",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.level.triggers.tripped("button")) return false;
                if (game.level.triggers.tripped("third lava chase")) return false;
                if (player.x > 50) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                o.collide = true;
                o.decay = -0.05;
            }
        },
        {
            name: "figured out text",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -950) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "figured out text");
                o.decay = -0.1;
            }
        },
        {
            name: "player dead",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "run text");
                o.decay = 0.05;
                if (o.alpha === undefined) o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "lava chase");
                o.decay = 0.05;
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                o.decay = 0.05;
                if (o.alpha === undefined) {
                    o.alpha = 1;
                } else {
                    o.alpha = Math.min(o.alpha, 1);
                }
                o.maxAlpha = 0;
                var o = game.objects.objects.find(e => e.id == "lava chase 3");
                o.decay = 0.05;
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "fake cube lava");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.05;
                o.maxAlpha = 0;
                var o = game.objects.objects.find(e => e.id == "fake cube top lava");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.05;
                o.maxAlpha = 0;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.decay = 0.05;
                if (o.alpha === undefined) {
                    o.alpha = 1;
                } else {
                    o.alpha = Math.min(o.alpha, 1);
                }
                if (o.alpha === undefined) o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "button");
                o.pushBack = true;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
            }
        },
        {
            name: "shortcut",
            check: function () {
                if (!game.level.triggers.tripped("button")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 100 && (game.input.downStart && game.input.downStart < 10)) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.x > 300;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                o.alpha = 1;
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                o.decay = -0.05;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 1");
                if (!o.peeked) {
                    //o.alpha = 0.7;
                    o.decay = 0.1;
                    o.peeked = true;
                }
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                if (!o.peeked) {
                    //o.alpha = 0.7;
                    o.decay = 0.1;
                    o.peeked = true;
                }
            },
            untrip: function () {
                game.background.effect.end("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                o.alpha = 1;
                o.decay = 0.05;
                if (game.level.triggers.tripped("ultra shortcut")) return;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                o.alpha = 1;
                o.decay = 0.05;
            }
        },
        {
            name: "second shortcut clue",
            check: function () {
                if (game.level.triggers.tripped("ultra shortcut")) return false;
                if (!game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 100 && (game.input.downStart && game.input.downStart < 10)) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                game.soundEffects.preShortcut();
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "shortcut barrier");
                o.collide = false;
                o.alpha = 1;
                o.decay = 0.1;
            },
            untrip: function () {
                game.background.effect.end("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                o.activated = false;
                o.air = true;
                var o = game.objects.objects.find(e => e.id == "shortcut barrier");
                o.alpha = 0;
                o.decay = -0.1;
            }
        },
        {
            name: "ultra shortcut",
            check: function () {
                return false;
                if (!game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 1");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 40 && (game.input.leftStart && game.input.leftStart < 2)) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                game.background.effect.start("magenta");
                game.level.discoverUltraShortcut();
                game.soundEffects.ultra();
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                o.alpha = 1;
                o.decay = 0;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 1");
                o.activated = true;
                o.alpha = 1;
                o.decay = 0;
                var player = game.objects.objects.find(e => e.type == "player");
                player.y = o.y - player.h / 2;
                player.x = o.x - player.w / 2;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                o.alpha = 0;
                o.decay = 0;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 1");
                o.decay = 0.1;
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                o.decay = 0.1;
                o.alpha = 1;
            },
            passive: function () {
                if (game.level.triggers.tripped("ultra shortcut 2")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.ymove = 0;
                player.xmove = -40;
            }
        },
        {
            name: "ultra shortcut 2",
            check: function () {
                if (!game.level.triggers.tripped("ultra shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 30 && (game.input.downStart && game.input.downStart < 3)) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = o.x - player.w / 2;
                var o = game.objects.objects.find(e => e.id == "shortcut barrier");
                o.collide = false;
                o.alpha = 1;
                o.decay = 0.1;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove = 0;
                player.ymove = 40;
            }
        },
        {
            name: "blue cube",
            check: function () {
                if (!game.level.triggers.tripped("third lava chase")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > 1000) return false;
                if (player.y < -100) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -100) return true;
                return false;
            },
            trip: function () {
                game.level.discoverBlueCube();
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "fake cube lava");
                o.alpha = 1;
                o.decay = 0.1;
                o.maxAlpha = 0.2;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.alpha = 1;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -19.6;
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "fake cube lava");
                if (!game.level.triggers.tripped("player dead")) {
                    o.alpha = 0.2;
                    o.decay = -0.1;
                }
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.alpha = 0;
            }
        },
        {
            name: "red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 60 && (game.input.upStart && game.input.upStart < 10)) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                game.level.discoverRedCube();
                game.background.effect.start("red");
                game.cam.offset.y -= 200;
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) player.ymove = -10;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.decay = -0.1;
                    o.collide = true;
                }
            },
            untrip: function () {
                game.background.effect.end("red");
                game.cam.offset.y += 200;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    if (o.alpha <= 0 || o.alpha > 1 || o.alpha === undefined) o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
            }
        },
    ],
    viewportBoundary: { x: 0, y: -10000, w: 0, h: 10000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    levelComplete: function () {
        if(game.level.triggers.tripped("ultra shortcut 2")) return true;
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -1550 || player.y > 500;
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
        x: -270,// + 3800 + 270,
        y: 0//-1350
    }
}