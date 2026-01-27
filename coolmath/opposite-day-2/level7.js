levels[6] = {
    objects: [
        { type: "block", x: -7500, y: 100, w: 8500, h: 1000, alpha: 0.15, collide: false },
        { type: "block", x: -7500, y: 100, w: 7850, h: 200 },
        { type: "block", x: -7500, y: 450, w: 8500, h: 1000 },
        { type: "block", x: -1500, y: -1000, w: 300, h: 1300, slippery: true },
        { type: "block", x: 500, y: -2500, w: 200, h: 3000, slippery: true, id: "right boundary" },
        { type: "block", x: 500, y: 50, w: 100, h: 1000, slippery: true },
        { type: "block", x: -5000, y: -2500, w: 6000, h: 1000, slippery: true },
        { type: "block", x: -3500, y: -1500, w: 1200, h: 1200, slippery: true },
        { type: "text", content: "You can't get", x: -1000, y: -200, font: "40px rubik", id: "impassible text", alpha: 0 },
        { type: "text", content: "over this wall.", x: -1000, y: -150, font: "40px rubik", id: "impassible text", alpha: 0 },
        { type: "text", content: "Sometimes ", x: -1950 - 365 / 2, y: -450, font: "40px rubik", textAlign: "left", id: "figured out text", alpha: 0 },
        { type: "text", content: "the box", x: -1950 - 365 / 2 + 219, y: -450, font: "40px rubikbolditalic", textAlign: "left", id: "figured out text", alpha: 0 },
        { type: "text", content: "thinks outside of ", x: -1950 - 404 / 2, y: -400, font: "40px rubik", textAlign: "left", id: "figured out text", alpha: 0 },
        { type: "text", content: "you.", x: -1950 - 404 / 2 + 321, y: -400, font: "40px rubikbolditalic", textAlign: "left", id: "figured out text", alpha: 0 },
        { type: "cube", x: -1700, y: -880, id: "blue cube", alpha: 0 },
        { type: "text", content: "You weren't the only", x: -1780, y: -700, font: "40px rubik", id: "blue cube text", alpha: 0 },
        { type: "text", content: "thing in the box.", x: -1780, y: -650, font: "40px rubik", id: "blue cube text", alpha: 0 },
        { type: "text", content: "Reflex test.", x: 0, y: -1320, font: "40px rubik", id: "red cube text", alpha: 0 },
        { type: "clue", x: 140, y: -1320, proximity: 1, radius: 0, id: "red cube clue", air: true, down: true, color: { r: 255, g: 100, b: 100 } },
        { type: "clue", x: 140, y: -200, proximity: 1, radius: 0, id: "red cube gravity switch 1", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 90, alpha: 0 },
        { type: "clue", x: -600, y: -200, proximity: 1, radius: 0, id: "red cube gravity switch 2", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 180, alpha: 0 },
        { type: "clue", x: -600, y: -1000, proximity: 1, radius: 0, id: "red cube gravity switch 3", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 270, alpha: 0 },
        { type: "clue", x: -300, y: -1000, proximity: 1, radius: 0, id: "red cube gravity switch 4", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 0, alpha: 0 },
        { type: "clue", x: -300, y: -500, proximity: 1, radius: 0, id: "red cube gravity switch 5", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 270, alpha: 0 },
        { type: "clue", x: 350, y: -500, proximity: 1, radius: 0, id: "red cube gravity switch 6", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 180, alpha: 0 },
        { type: "clue", x: 350, y: -1150, proximity: 1, radius: 0, id: "red cube gravity switch 7", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 90, alpha: 0 },
        { type: "clue", x: -1030, y: -1150, proximity: 1, radius: 0, id: "red cube gravity switch 8", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 180, alpha: 0 },
        { type: "clue", x: -1030, y: -1350, proximity: 1, radius: 0, id: "red cube gravity switch 9", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 90, alpha: 0 },
        { type: "clue", x: -2070, y: -1350, proximity: 1, radius: 0, id: "red cube gravity switch 10", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 0, alpha: 0 },
        { type: "clue", x: -2070, y: -680, proximity: 1, radius: 0, id: "red cube gravity switch 11", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 270, alpha: 0 },
        { type: "clue", x: -1800, y: -680, proximity: 1, radius: 0, id: "red cube gravity switch 12", air: true, down: true, color: { r: 255, g: 100, b: 100 }, angle: 180, alpha: 0 },
        { type: "cube", red: true, x: -1800, y: -1070, alpha: 0, id: "red cube", noCollect: true },
        { type: "lava", x: 500, y: -1500, w: 50, h: 1600, alpha: 0, collide: false, id: "red cube lava" },
        { type: "lava", x: -2300, y: -1500, w: 50, h: 1600, alpha: 0, collide: false, id: "red cube lava" },
        { type: "lava", x: -1200, y: -1000, w: 50, h: 1100, alpha: 0, collide: false, id: "red cube lava" },
        { type: "lava", x: -1550, y: -1000, w: 50, h: 1100, alpha: 0, collide: false, id: "red cube lava" },
        { type: "lava", x: -1550, y: -1050, w: 400, h: 50, alpha: 0, collide: false, id: "red cube lava" },
        { type: "lava", x: -1150, y: 50, w: 1650, h: 50, alpha: 0, collide: false, id: "red cube lava" },
        { type: "lava", x: -2250, y: 50, w: 700, h: 50, alpha: 0, collide: false, id: "red cube lava" },
        { type: "lava", x: -2250, y: -1500, w: 2750, h: 50, alpha: 0, collide: false, id: "red cube lava" },
        { type: "lava", x: -1700, y: -1230, w: 50, h: 200, alpha: 0, collide: false, id: "red cube lava" },
        { type: "lava", x: -1850, y: -1230, w: 150, h: 50, alpha: 0, collide: false, id: "red cube lava" },
        { type: "lava", x: -100, y: 300, w: 150, h: 75, alpha: 0, collide: false, id: "shortcut lava" },
        { type: "lava", x: -700, y: 375, w: 150, h: 75, alpha: 0, collide: false, id: "shortcut lava" },
        { type: "lava", x: -1250, y: 300, w: 75, h: 75, alpha: 0, collide: false, id: "shortcut lava" },
        { type: "lava", x: -1500, y: 375, w: 75, h: 75, alpha: 0, collide: false, id: "shortcut lava" },
        { type: "lava", x: -1750, y: 300, w: 75, h: 75, alpha: 0, collide: false, id: "shortcut lava" },
        { type: "lava", x: -2000, y: 375, w: 75, h: 75, alpha: 0, collide: false, id: "shortcut lava" },
        { type: "lava", x: -2250, y: 375, w: 75, h: 75, alpha: 0, collide: false, id: "shortcut lava" },
        { type: "lava", x: -2500, y: 300, w: 75, h: 75, alpha: 0, collide: false, id: "shortcut lava" },
        { type: "block", x: -7500, y: 100, w: 8500, h: 1000, id: "shortcut block" },
        { type: "clue", x: 420, y: -90, proximity: 1, radius: 0, id: "shortcut clue", air: true, down: true, color: { r: 0, g: 230, b: 0 } },
        { type: "clue", x: 200, y: 340, proximity: 1, radius: 0, id: "ultra shortcut clue", air: true, ultra: true, alpha: 0 },
        { type: "clue", x: -2250, y: 150, proximity: 1, radius: 0, id: "blue cube clue" }
    ],
    triggers: [
        {
            name: "impassible",
            check: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -950) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "impassible text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
                game.cam.viewportBoundary.w += 50;
                var o = game.objects.objects.find(e => e.id == "right boundary");
                o.x += 50;
            }
        },
        {
            name: "fall down",
            check: function () {
                if (!game.level.triggers.tripped("impassible")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y >= 60 && player.x != -1540) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x >= 510) return true;
                if (player.x == -1540) return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) {
                    if (player.x > 300 || player.x < -1200) {
                        game.objects.switchGravity(0);
                    }
                }
            }
        },
        {
            name: "fall right",
            check: function () {
                if (!game.level.triggers.tripped("impassible")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x == -1540) return true;
                if (player.y <= -1500) return false;
                if (player.y >= 60) return false;
                if (player.x >= 510) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y <= -1500) return true;
                if (player.y >= 60 && player.x != -1540) return true;
            },
            trip: function () {
                game.objects.switchGravity(270);
            }
        },
        {
            name: "fall up",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y <= -1500 && player.x > -2300) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x >= 510 && player.y > -1500) return true;
                if (player.x <= -2300) return true;
            },
            trip: function () {
                game.objects.switchGravity(180);
            }
        },
        {
            name: "fall left",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -2300) return false;
                if (player.y > -200) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y <= -1500 && player.x > -2300) return true;
                if (player.y >= 60) return true;
            },
            trip: function () {
                game.objects.switchGravity(90);
            }
        },
        {
            name: "figured out",
            check: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -2000) return false;
                if (player.y < -650) return false;
                return true;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "figured out text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            }
        },
        {
            name: "blue cube",
            check: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                if (game.level.triggers.tripped("stop blue cube")) return false;
                if (game.level.levelComplete) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -1500) return false;
                if (player.y < 60) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y) < 70) return true;
                return false;
            },
            trip: function () {
                game.level.discoverBlueCube();
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.alpha = 0;
                o.decay = -0.1;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = false;
            }
        },
        {
            name: "stop blue cube",
            check: function () {
                return game.level.triggers.tripped("blue cube");
            }
        },
        {
            name: "red cube",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist < 30 && game.input.downStart && game.input.downStart < 20) return true;
                return false;
            },
            trip: function () {
                game.level.discoverRedCube();
                game.background.effect.start("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                game.objects.switchGravity(0);
                for (var o of game.objects.objects.filter(e => e.id?.includes("red cube gravity switch"))) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
                game.cam.followX = 0.1;
                game.cam.followY = 0.1;
                var o = game.objects.objects.find(e => e.id == "red cube");
                o.noCollect = true;
                o.alpha = 0;
                o.decay = -0.1;
                for (var o of game.objects.objects.filter(e => e.id == "red cube lava")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                    o.collide = true;
                }
                var o = game.objects.objects.find(e => e.id == "red cube text");
                o.alpha = 0;
                o.decay = -0.1;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 1",
            check: function () {
                if (!game.level.triggers.tripped("red cube")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 1");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.leftStart && game.input.leftStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 1");
                o.activated = true;
                game.objects.switchGravity(90);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = -speed;
                player.ymove = 0;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 2",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 1")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 2");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.upStart && game.input.upStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 2");
                o.activated = true;
                game.objects.switchGravity(180);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = 0;
                player.ymove = -speed;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 3",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 2")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 3");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.rightStart && game.input.rightStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 3");
                o.activated = true;
                game.objects.switchGravity(270);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = speed;
                player.ymove = 0;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 4",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 3")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 4");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.downStart && game.input.downStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 4");
                o.activated = true;
                game.objects.switchGravity(0);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = 0;
                player.ymove = speed;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 5",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 4")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 5");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.rightStart && game.input.rightStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 5");
                o.activated = true;
                game.objects.switchGravity(270);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = speed;
                player.ymove = 0;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 6",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 5")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 6");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.upStart && game.input.upStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 6");
                o.activated = true;
                game.objects.switchGravity(180);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = 0;
                player.ymove = -speed;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 7",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 6")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 7");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.leftStart && game.input.leftStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 7");
                o.activated = true;
                game.objects.switchGravity(90);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = -speed;
                player.ymove = 0;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 8",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 7")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 8");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.upStart && game.input.upStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 8");
                o.activated = true;
                game.objects.switchGravity(180);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = 0;
                player.ymove = -speed;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 9",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 8")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 9");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.leftStart && game.input.leftStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 9");
                o.activated = true;
                game.objects.switchGravity(90);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = -speed;
                player.ymove = 0;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 10",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 9")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 10");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.downStart && game.input.downStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 10");
                o.activated = true;
                game.objects.switchGravity(0);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = 0;
                player.ymove = speed;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 11",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 10")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 11");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.rightStart && game.input.rightStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 11");
                o.activated = true;
                game.objects.switchGravity(270);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = speed;
                player.ymove = 0;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "red cube gravity switch 12",
            check: function () {
                if (!game.level.triggers.tripped("red cube gravity switch 11")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 12");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.upStart && game.input.upStart < 40) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube gravity switch 12");
                o.activated = true;
                game.objects.switchGravity(180);
                var player = game.objects.objects.find(e => e.type == "player");
                var speed = distTo(0, 0, player.xmove, player.ymove);
                player.xmove = 0;
                player.ymove = -speed;
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
                var o = game.objects.objects.find(e => e.id == "red cube");
                o.noCollect = false;
            },
            stop: function () {
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "collect red cube",
            check: function () {
                if (!game.level.triggers.tripped("red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (!game.level.triggers.tripped("red cube gravity switch 12")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 70) return false;
                return true;
            },
            trip: function () {
                game.background.effect.end("red");
                for (var o of game.objects.objects.filter(e => e.id == "red cube lava")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return game.level.triggers.tripped("end red cube");
            }
        },
        {
            name: "end red cube",
            check: function () {
                if (!game.level.triggers.tripped("collect red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.y == -1500;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.id?.includes("red cube gravity switch"))) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o.activated = false;
                }
                game.cam.followX = 0.01;
                game.cam.followY = 0.01;
                var o = game.objects.objects.find(e => e.id == "red cube");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "red cube text");
                o.alpha = 1;
                o.decay = 0.1;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return !game.level.triggers.tripped("red cube");
            }
        },
        {
            name: "delete shortcut",
            check: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < 300) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 1;
                o.decay = 0.1;
            }
        },
        {
            name: "shortcut",
            check: function () {
                if (game.level.triggers.tripped("delete shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist < 40 && game.input.downStart && game.input.downStart < 20) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.y < 60 && player.ymove < 0;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "shortcut block");
                o.collide = false;
                o.alpha = 1;
                o.decay = 0.1;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = 1;
                game.cam.followX = 0.1;
                game.cam.followY = 0.1;
                game.cam.offset.x = -200;
                for (var o of game.objects.objects.filter(e => e.id == "shortcut lava")) {
                    o.collide = true;
                    o.alpha = 1;
                }
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                if (!o.peeked) {
                    //o.alpha = 1.5;
                    o.decay = 0.05;
                    o.peeked = true;
                }
            },
            untrip: function () {
                game.background.effect.end("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "shortcut block");
                o.collide = true;
                o.alpha = 0;
                o.decay = -0.1;
                game.cam.followX = 0.01;
                game.cam.followY = 0.01;
                game.cam.offset.x = 0;
            }
        },
        {
            name: "ultra shortcut",
            check: function () {
                return false;
                if (!game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist < 80 && game.input.downStart && game.input.downStart < 20) return true;
                return false;
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
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                o.alpha = 1;
                o.decay = 0.1;
            }
        },
        {
            name: "shortcut move",
            check: function () {
                if (!game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y == 410;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.y < 60 && player.ymove < 0;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove = -20;
                if (game.level.triggers.tripped("ultra shortcut")) player.xmove = -40;
                if (!player.updateAngle) player.updateAngle = 0;
                if (player.x > 300) return;
                if (game.input.up && player.updateAngle === 0) {
                    game.soundEffects.jump();
                    player.updateAngle = 180;
                    player.eyeAngleTarget = 180;
                    player.ymove = -40;
                    if(game.level.triggers.tripped("ultra shortcut")) player.ymove = -130;
                }
                if (game.input.down && player.updateAngle === 180) {
                    game.soundEffects.jump();
                    player.updateAngle = 0;
                    player.eyeAngleTarget = 0;
                    player.ymove = 40;
                    if(game.level.triggers.tripped("ultra shortcut")) player.ymove = 130;
                }
            }
        },
    ],
    viewportBoundary: { x: -2050, y: -1000, w: 2050, h: 1000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    checkForManualRespawn: function () {
        return game.level.triggers.tripped("end red cube");
    },
    beforeManualRespawn: function () {
        var a = Math.min(Math.max((100 - this.playerRespawnTime) / 100, 0), 1);
        var p0 = easeInOut(a);
        game.cam.x = game.cam.x * (1 - p0) + (50) * p0;
        game.cam.y = game.cam.y * (1 - p0) + (-1000) * p0;
    },
    manualRespawn: function () {
        this.playerDead = false;
        var player = this.createPlayer(120, -1400);
        player.updateAngle = 180;
        player.eyeAngleTarget = 180;
        player.eyeAngle = 180;
        player.spawnTime = 150;
        player.spawnAnimation = 20;
        game.objects.objects.push(player);
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -2650;
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
    }
}