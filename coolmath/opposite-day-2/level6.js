levels[5] = {
    objects: [
        { type: "text", content: "0", x: -1850, y: -400, font: "150px rubikbold", id: "digit 1" },
        { type: "text", content: "0", x: -2000, y: -400, font: "150px rubikbold", id: "digit 2" },
        { type: "text", content: "0", x: -2150, y: -400, font: "150px rubikbold", id: "digit 3" },
        { type: "image", image: "circuitBlack", x: -3070, y: -923, w: 1430, h: 1430, collide: false, alpha: 0.2 },
        { type: "image", image: "circuitRed", x: -3070, y: -923, w: 1430, h: 1430, collide: false, alpha: 0, id: "red circuit" },
        { type: "image", image: "circuitPurple", x: -3070, y: -923, w: 1430, h: 1430, collide: false, alpha: 0, id: "purple circuit" },
        { type: "text", content: "a\u00B2 + b\u00B2 = c\u00B2", x: -1250, y: -800, font: "40px rubik", id: "math text" },
        { type: "text", content: "e^i\u03C0 = -1", x: -900, y: -750, font: "40px rubik", id: "math text" },
        { type: "text", content: "\u03C0 = 3.14159265359", x: -700, y: -650, font: "40px rubik", id: "math text" },
        { type: "text", content: "x = 4i + y", x: -1000, y: -430, font: "40px rubik", id: "math text" },
        { type: "text", content: "2i + 2y - x = x", x: -700, y: -480, font: "40px rubik", id: "math text" },
        { type: "text", content: "i = \u221A-1", x: -1300, y: -400, font: "40px rubik", id: "math text" },
        { type: "text", content: "y = 3z + 2z + 4ix", x: -800, y: -250, font: "40px rubik", id: "math text" },
        { type: "text", content: "2 + 3 = 4", x: -1150, y: -600, font: "40px rubik", id: "math text" },
        { type: "text", content: "Solve for z.", x: -1200, y: -200, font: "40px rubik", id: "math text" },
        { type: "block", x: -3018, y: -550, w: 96, h: 0, collide: false, id: "gate" },
        { type: "block", x: 500, y: -2000, w: 500, h: 3000, slippery: true },
        { type: "block", x: -2590, y: 100, w: 645, h: 2000 },
        { type: "block", x: -1946, y: 100, w: 50, h: 2000, id: "ultra shortcut tunnel background", collide: false, alpha: 0 },
        { type: "block", x: -1946, y: 100, w: 50, h: 2000, id: "ultra shortcut tunnel" },
        { type: "block", x: -1900, y: 100, w: 4200, h: 2000 },
        { type: "button", x: -1900, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", id: "button 1" },
        { type: "button", x: -2050, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", id: "button 2" },
        { type: "button", x: -2200, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", id: "button 3" },
        { type: "button", x: -2400, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", color: "rgb(70,180,70)", id: "check button" },
        { type: "text", content: "I hope your math skills are good.", x: -2000, y: -200, font: "40px rubik", id: "math text 1", alpha: 0 },
        { type: "text", content: "You'll need them.", x: -2000, y: -150, font: "40px rubik", id: "math text 2", alpha: 0 },
        { type: "block", x: -3030, y: -2500, w: 20, h: 2000 },
        { type: "block", x: -4000, y: -2500, w: 1000, h: 1350 },
        { type: "text", content: "Nice.", x: -3270, y: -1060, font: "40px rubik" },
        { type: "cube", x: -3125, y: -1060, collide: false, collected: false },
        { type: "block", x: -3020, y: -2500, w: 110, h: 2000, slippery: true },
        { type: "block", x: -4890, y: -350, w: 2000, h: 1000, slippery: true },
        { type: "block", x: -2950, y: -300, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2900, y: -250, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2850, y: -200, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2800, y: -150, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2690, y: -100, w: 50, h: 1000, collide: false, alpha: 0, id: "shortcut tunnel background" },
        { type: "block", x: -2640, y: -50, w: 50, h: 1000, collide: false, alpha: 0, id: "shortcut tunnel background" },
        { type: "block", x: -2750, y: -100, w: 110, h: 1000, slippery: true, id: "shortcut tunnel" },
        { type: "block", x: -2700, y: -50, w: 110, h: 1000, slippery: true, id: "shortcut tunnel" },
        { type: "block", x: -2600, y: 0, w: 60, h: 1000, slippery: true, id: "shortcut shrinking step" },
        { type: "block", x: -2590, y: 50, w: 100, h: 1000, slippery: true },
        { type: "text", content: "Yeah, you could've gone through", x: -3450, y: -550, font: "40px rubik", id: "figured out text", alpha: 0 },
        { type: "text", content: "there the entire time...", x: -3450, y: -500, font: "40px rubik", id: "figured out text", alpha: 0 },
        { type: "clue", x: -3000, y: -530, collide: false, proximity: 1, radius: 0, id: "cube clue" },
        { type: "block", invisibleUntilTouched: true, lastTouchedTime: 1000, x: 0, y: -190, w: 100, h: 100, id: "red cube starting block" },
        { type: "clue", x: 50, y: -140, id: "red cube clue", proximity: 1, radius: 0, color: { r: 255, g: 100, b: 100 }, air: true },
        { type: "text", content: "Why would I make an", x: 50, y: -50, font: "30px rubik", id: "red cube text", alpha: 0 },
        { type: "text", content: "invisible red cube level?", x: 50, y: -10, font: "30px rubik", id: "red cube text", alpha: 0 },
        { type: "block", x: -400, y: -300, w: 200, h: 50, alpha: 0, redCubeBlock: true },
        { type: "lava", x: -400, y: -500, w: 50, h: 200, alpha: 0, redCubeBlock: true, level6redCubeLava: true, noGlow: true },
        { type: "block", x: 0, y: -530, w: 200, h: 50, alpha: 0, redCubeBlock: true },
        { type: "lava", x: -400, y: -900, w: 50, h: 200, alpha: 0, redCubeBlock: true, level6redCubeLava: true, noGlow: true },
        { type: "lava", x: 0, y: -580, w: 50, h: 50, alpha: 0, redCubeBlock: true, level6redCubeLava: true, noGlow: true },
        { type: "block", x: -400, y: -700, w: 50, h: 200, alpha: 0, redCubeBlock: true },
        { type: "lava", x: 200, y: -660, w: 50, h: 50, alpha: 0, redCubeBlock: true, level6redCubeLava: true, noGlow: true },
        { type: "block", x: 300, y: -660, w: 200, h: 50, alpha: 0, redCubeBlock: true },
        { type: "lava", x: 300, y: -775, w: 125, h: 25, alpha: 0, redCubeBlock: true, level6redCubeLava: true, noGlow: true },
        { type: "block", x: 300, y: -800, w: 125, h: 25, alpha: 0, redCubeBlock: true, level6redCubeHiddenBlock: true },
        { type: "cube", red: true, x: 400, y: -870, alpha: 0, id: "red cube" },
        { type: "clue", x: -800, y: -80, id: "pre shortcut clue", proximity: 1, radius: 0, color: { r: 0, g: 230, b: 0 }, air: true, down: true, angle: 180 },
        { type: "clue", x: -1300, y: -80, id: "shortcut clue", proximity: 1, radius: 0, color: { r: 0, g: 230, b: 0 }, air: true, down: true, alpha: 0 },
        { type: "clue", x: -2120, y: -40, id: "ultra shortcut clue", proximity: 1, radius: 0, ultra: true, air: true, angle: 270, alpha: 0 },
        { type: "clue", x: -1925, y: -40, id: "ultra shortcut clue 2", proximity: 1, radius: 0, ultra: true, air: true, angle: 0, alpha: 0 },
        { type: "text", content: "Don't like math?", x: -1050, y: -80, font: "35px rubik", id: "shortcut text", alpha: 0 },
        { type: "lava", x: -1500, y: -2100, w: 1000, h: 2200, id: "ultra shortcut lava", alpha: 0, collide: false }
    ],
    triggers: [
        {
            name: "button 1",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "button 1");
                return o.firstPress;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "digit 1");
                var number = Number(o.content);
                number++;
                number %= 10;
                o.content = String(number);
            },
            stop: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                return true;
            }
        },
        {
            name: "button 2",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "button 2");
                return o.firstPress;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "digit 2");
                var number = Number(o.content);
                number++;
                number %= 10;
                o.content = String(number);
            },
            stop: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                return true;
            }
        },
        {
            name: "button 3",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "button 3");
                return o.firstPress;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "digit 3");
                if (game.level.triggers.tripped("shortcut")) {
                    return;
                }
                var number = Number(o.content);
                number++;
                number %= 10;
                o.content = String(number);
            },
            stop: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                return true;
            }
        },
        {
            name: "death by button",
            check: function () {
                if (!game.level.triggers.tripped("shortcut")) return false;
                if (game.level.triggers.tripped("button 1")) return true;
                if (game.level.triggers.tripped("button 2")) return true;
                if (game.level.triggers.tripped("button 3")) return true;
                if (game.objects.objects.find(e => e.id == "check button").firstPress) return true;
                return false;
            },
            trip: function () {
                game.soundEffects.buzzer();
                if (!game.level.playerInvincible) game.objects.objects.find(e => e.type == "player").delete = true;
                var ids = ["digit 1", "digit 2", "digit 3"];
                if (game.level.triggers.tripped("button 1")) ids = ["digit 1"];
                if (game.level.triggers.tripped("button 2")) ids = ["digit 2"];
                if (game.level.triggers.tripped("button 3")) ids = ["digit 3"];
                for (var id of ids) {
                    var o = game.objects.objects.find(e => e.id == id);
                    o.drawType = "image";
                    o.w = 120;
                    o.h = 120;
                    o.x -= 60;
                    o.y -= 70;
                    o.image = "skull";
                }
                var o = game.objects.objects.find(e => e.id == "purple circuit");
                o.purpleTime = 0;
                var o = game.objects.objects.find(e => e.id == "red circuit");
                o.redTime = 100;
                game.cam.screenshake = 20;
                var o = game.objects.objects.find(e => e.id == "digit 3");
                o.redTime = 100;
                var o = game.objects.objects.find(e => e.id == "digit 2");
                o.redTime = 100;
                var o = game.objects.objects.find(e => e.id == "digit 1");
                o.redTime = 100;
            }
        },
        {
            name: "check code",
            check: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                var o = game.objects.objects.find(e => e.id == "check button");
                return o.firstPress;
            },
            trip: function () {
                var code = game.objects.objects.find(e => e.id == "digit 3").content;
                code += game.objects.objects.find(e => e.id == "digit 2").content;
                code += game.objects.objects.find(e => e.id == "digit 1").content;
                if (code == "666") {
                    var o = game.objects.objects.find(e => e.id == "purple circuit");
                    o.purpleTime = 200;
                    var o = game.objects.objects.find(e => e.id == "red circuit");
                    o.redTime = 0;
                    var demon = {
                        type: "image",
                        image: "demon",
                        id: "demon",
                        x: -2000 - 649 / 14,
                        y: 100,
                        ymove: -5,
                        w: 649 / 7,
                        h: 610 / 7,
                        collide: false,
                        alpha: 1.2,
                        update: function () {
                            this.y += this.ymove;
                            this.ymove--;
                            this.ymove *= 0.8;
                            this.alpha -= 0.007;
                            this.x += Math.sin(t / 20);
                            this.angle = Math.sin(t / 20) * 20;
                            if (this.alpha <= 0) this.delete = true;
                        }
                    }
                    game.objects.objects.unshift(demon);
                    var o = game.objects.objects.find(e => e.id == "digit 3");
                    o.purpleTime = 200;
                    var o = game.objects.objects.find(e => e.id == "digit 2");
                    o.purpleTime = 200;
                    var o = game.objects.objects.find(e => e.id == "digit 1");
                    o.purpleTime = 200;
                } else {
                    game.soundEffects.buzzer();
                    var o = game.objects.objects.find(e => e.id == "purple circuit");
                    o.purpleTime = 0;
                    var o = game.objects.objects.find(e => e.id == "red circuit");
                    o.redTime = 100;
                    game.cam.screenshake = 20;
                    var o = game.objects.objects.find(e => e.id == "digit 3");
                    o.redTime = 100;
                    var o = game.objects.objects.find(e => e.id == "digit 2");
                    o.redTime = 100;
                    var o = game.objects.objects.find(e => e.id == "digit 1");
                    o.redTime = 100;
                }
            },
            stop: function () {
                return true;
            }
        },
        {
            name: "incorrect code",
            check: function () {
                return game.level.triggers.tripped("check code") || game.level.triggers.tripped("death by button");
            },
            stop: function () {
                var o = game.objects.objects.find(e => e.id == "digit 1");
                return !o.redTime && !o.purpleTime;
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "digit 1");
                if (o.redTime) {
                    o.redTime--;
                    o.redTime = Math.max(o.redTime, 0);
                    o.color = `rgb(${o.redTime / 50 * 255},0,0)`;
                } else {
                    o.purpleTime--;
                    o.purpleTime = Math.max(o.purpleTime, 0);
                    o.color = `rgb(${o.purpleTime / 100 * 150},0,${o.purpleTime / 100 * 255})`;
                }
                if (isNaN(o.redTime)) o.redTime = 0;
                if (isNaN(o.purpleTime)) o.purpleTime = 0;
                var o = game.objects.objects.find(e => e.id == "digit 2");
                if (o.redTime) {
                    o.redTime--;
                    o.redTime = Math.max(o.redTime, 0);
                    o.color = `rgb(${o.redTime / 50 * 255},0,0)`;
                } else {
                    o.purpleTime--;
                    o.purpleTime = Math.max(o.purpleTime, 0);
                    o.color = `rgb(${o.purpleTime / 100 * 150},0,${o.purpleTime / 100 * 255})`;
                }
                if (isNaN(o.redTime)) o.redTime = 0;
                if (isNaN(o.purpleTime)) o.purpleTime = 0;
                var o = game.objects.objects.find(e => e.id == "digit 3");
                if (o.redTime) {
                    o.redTime--;
                    o.redTime = Math.max(o.redTime, 0);
                    o.color = `rgb(${o.redTime / 50 * 255},0,0)`;
                } else {
                    o.purpleTime--;
                    o.purpleTime = Math.max(o.purpleTime, 0);
                    o.color = `rgb(${o.purpleTime / 100 * 150},0,${o.purpleTime / 100 * 255})`;
                }
                if (isNaN(o.redTime)) o.redTime = 0;
                if (isNaN(o.purpleTime)) o.purpleTime = 0;
                var o = game.objects.objects.find(e => e.id == "red circuit");
                o.redTime--;
                o.redTime = Math.max(o.redTime, 0);
                o.alpha = o.redTime / 50 * 0.2;
                var o = game.objects.objects.find(e => e.id == "purple circuit");
                o.purpleTime--;
                o.purpleTime = Math.max(o.purpleTime, 0);
                o.alpha = o.purpleTime / 100 * 0.2;
            }
        },
        {
            name: "animation",
            check: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                if (game.level.triggers.tripped("animation completed")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -1600) return true;
                return false;
            },
            stop: function () {
                return game.level.levelAnimationTime > 300;
            },
            trip: function () {
                game.level.playerControlDelay = 300;
                game.level.levelAnimationTime = 0;
            },
            passive: function () {
                var a = game.level.levelAnimationTime;
                game.cam.followX = 0.01 + 0.09 * Math.min(a / 20, 1);
                if (a > 20 && a < 100) {
                    game.cam.offset.x = -easeInOut((a - 20) / 80) * 700;
                    game.cam.zoom = 1 - easeInOut((a - 20) / 80) * 0.35;
                }
                if (a > 145 && a < 165) {
                    var o = game.objects.objects.find(e => e.id == "gate");
                    o.h = Math.min(Math.max(a - 145, 0) / 20, 1) * 250;
                    if (o.h >= 130 && !o.slammed) {
                        o.slammed = true;
                        game.soundEffects.doorSlam();
                    }
                }
                if (a == 160) {
                    game.cam.screenshake = 50;
                }
                if (a > 200) {
                    game.cam.offset.x = -440 - easeInOut(1 - (a - 200) / 100) * 220;
                    game.cam.zoom = 0.7 - easeInOut(1 - (a - 200) / 100) * 0.05;
                }
            }
        },
        {
            name: "animation completed",
            check: function () {
                return game.level.triggers.tripped("animation") && game.level.levelAnimationTime > 300;
            },
            trip: function () {
                game.cam.followX = 0.01;
                game.cam.offset.x = 0;
            }
        },
        {
            name: "math 1",
            check: function () {
                if (!game.level.triggers.tripped("animation completed")) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "math text 1");
                o.alpha = -2;
                o.decay = -0.05;
            }
        },
        {
            name: "math 2",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "math text 1");
                return o.alpha > 6;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "math text 2");
                o.alpha = 0;
                o.decay = -0.05;
            }
        },
        {
            name: "figured out",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -3150) return true;
                return false;
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
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -2000) return false;
                if (player.y < -550) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -550) return true;
                return false;
            },
            trip: function () {
                game.level.discoverBlueCube();
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = true;
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = false;
            }
        },
        {
            name: "red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y == -230) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -210) return true;
                return false;
            },
            trip: function () {
                game.level.discoverRedCube();
                game.background.effect.start("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "red cube");
                o.alpha = 0;
                o.decay = -0.1;
                for (var o of game.objects.objects.filter(e => e.id == "red cube text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            },
            untrip: function () {
                game.background.effect.end("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "red cube");
                o.alpha = 1;
                o.decay = 0.1;
                for (var o of game.objects.objects.filter(e => e.id == "red cube text")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                }
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "red cube starting block");
                o.lastTouchedTime = 0;
            }
        },
        {
            name: "red cube peek blocks",
            check: function () {
                if (!game.level.triggers.tripped("red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!player.touchingObjects) return false;
                if (!player.touchingObjects.some(e => e.redCubeBlock && !e.level6redCubeHiddenBlock)) return false;
                if (player.againstLeft.time === 1) return true;
                if (player.againstRight.time === 1) return true;
                if (player.againstTop.time === 1) return true;
                if (player.againstBottom.time === 1) return true;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.redCubeBlock && e.type == "block" && !e.level6redCubeHiddenBlock)) {
                    o.alpha = 0.2;
                    o.decay = 0.01;
                }
            },
            stop: function () {
                return true;
            }
        },
        {
            name: "pre shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "pre shortcut clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.upStart == 0 || game.input.upStart > 10) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (game.level.triggers.tripped("shortcut")) return false;
                return player.y >= 60;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "pre shortcut clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 0;
                o.decay = -0.1;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;
                game.soundEffects.preShortcut();
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "pre shortcut clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 1;
                o.decay = 0.1;
            }
        },
        {
            name: "shortcut",
            check: function () {
                if (!game.level.triggers.tripped("pre shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 30) return false;
                if (game.input.downStart == 0 || game.input.downStart > 10) return false;
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

                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                if (!o.peeked) {
                    //o.alpha = 1;
                    o.peeked = true;
                }

                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "shortcut text");
                o.alpha = 0;
                o.decay = -0.1;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove += 7;
                var o = game.objects.objects.find(e => e.id == "gate");
                o.h = 250;
                for (var o of game.objects.objects.filter(e => e.id == "shortcut tunnel")) {
                    o.alpha = 0;
                    o.collide = false;
                }
                for (var o of game.objects.objects.filter(e => e.id == "shortcut tunnel background")) {
                    o.alpha = 0.15;
                }
                var o = game.objects.objects.find(e => e.id == "shortcut shrinking step");
                o.x += 10;
                o.w -= 10;
                var delay = 0;
                for (var o of game.objects.objects.filter(e => e.id == "math text")) {
                    ctx.font = o.font;
                    o.length = Math.round(ctx.measureText(o.content).width / 25);
                    o.delay = delay;
                    delay += 2;
                }
                var o = game.objects.objects.find(e => e.id == "button 1");
                o.color = "red";
                o.lava = true;
                o.glowing = true;
                o.pushBack = false;
                var o = game.objects.objects.find(e => e.id == "button 2");
                o.color = "red";
                o.lava = true;
                o.glowing = true;
                o.pushBack = false;
                var o = game.objects.objects.find(e => e.id == "button 3");
                o.color = "red";
                o.lava = true;
                o.glowing = true;
                o.pushBack = false;
                var o = game.objects.objects.find(e => e.id == "check button");
                o.color = "red";
                o.lava = true;
                o.glowing = true;
                o.pushBack = false;
            },
            untrip: function () {
                game.background.effect.end("green");
            },
            passive: function () {
                for (var o of game.objects.objects.filter(e => e.id == "math text")) {
                    if ((t - o.delay) % 10) continue;
                    var str = "";
                    while (str.length < o.length) {
                        if (Math.random() < 0.05) {
                            str += "xyz"[Math.floor(Math.random() * 3)];
                        } else {
                            str += Math.floor(Math.random() * 10);
                        }
                    }
                    o.content = str;
                }
                var o = game.objects.objects.find(e => e.id == "digit 1");
                if ((t - 0) % 4 === 0) o.content = Math.floor(Math.random() * 10);
                var o = game.objects.objects.find(e => e.id == "digit 2");
                if ((t - 1) % 4 === 0) o.content = Math.floor(Math.random() * 10);
                var o = game.objects.objects.find(e => e.id == "digit 3");
                if ((t - 2) % 4 === 0) o.content = Math.floor(Math.random() * 10);
            }
        },
        {
            name: "hide ultra shortcut clue",
            check: function () {
                if (!game.level.triggers.tripped("shortcut")) return false;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                if (game.cam.viewBox.x < o.x - 50) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                o.alpha = 1;
                o.decay = 0.05;
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
                if (dist > 40) return false;
                if (!game.input.right || game.input.rightStart > 10) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
            },
            trip: function () {
                game.level.discoverUltraShortcut();
                game.background.effect.start("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                o.activated = true;
                o.alpha = 1;
                o.decay = 0;
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = o.x - player.w / 2;
                player.y = o.y - player.h / 2;
                game.cam.viewportBoundary.x = game.cam.x;
                game.cam.viewportBoundary.w = 0;

                for (var o of game.objects.objects.filter(e => e.id == "ultra shortcut tunnel")) {
                    o.alpha = 0;
                    o.collide = false;
                }
                for (var o of game.objects.objects.filter(e => e.id == "ultra shortcut tunnel background")) {
                    o.alpha = 0.15;
                }
                var o = game.objects.objects.find(e => e.id == "ultra shortcut lava");
                o.alpha = 1;
                o.collide = true;

                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                o.alpha = 1;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut lava");
                o.decay = 0.1;
            },
            passive: function () {
                if (game.level.triggers.tripped("ultra shortcut 2")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if(!player) return;
                player.xmove = 80;
                player.ymove = 0;
            }
        },
        {
            name: "ultra shortcut 2",
            check: function () {
                if (!game.level.triggers.tripped("ultra shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 40) return false;
                if (!game.input.down || game.input.downStart > 3) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = o.x - player.w / 2;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if(!player) return;
                player.xmove = 0;
                player.ymove = 80;
            }
        }
    ],
    viewportBoundary: { x: -3400, y: -200, w: 3400, h: 0 },
    backgroundOffset: { x: -60, y: 0 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (game.level.triggers.tripped("shortcut")) {
            game.cam.zoom = game.cam.zoom * 0.99 + 0.7 * 0.01;
            if (game.level.triggers.tripped("red cube")) {
                game.cam.viewportBoundary.h = 1000;
                game.cam.viewportBoundary.y = -1000;
                game.cam.offset.y = 0;
                var dist = -player.y - 210;
                var p = Math.min(Math.max(dist / 100, 0), 1);
                game.cam.y = game.cam.y * p + -200 * (1 - p);
                return;
            }
            if (player.y < -550) {
                var a = Math.min(-(player.y + 550) / 200, 1);
                game.cam.viewportBoundary.y = -200 - 300 * a;
                game.cam.viewportBoundary.h = a * 300;
                game.cam.x = game.cam.x * (1 - a) - 3050 * a;
            } else {
                game.cam.offset.y = -200;
                game.cam.viewportBoundary.y = -200;
                game.cam.viewportBoundary.h = 0;
            }
            return;
        }
        if (game.level.triggers.tripped("red cube")) {
            game.cam.viewportBoundary.h = 1000;
            game.cam.viewportBoundary.y = -1000;
            game.cam.offset.y = 0;
            var dist = -player.y - 210;
            var p = Math.min(Math.max(dist / 100, 0), 1);
            game.cam.y = game.cam.y * p + -200 * (1 - p);
            return;
        } else {
            game.cam.viewportBoundary.y = -200;
            game.cam.viewportBoundary.h = 0;
            game.cam.offset.y = -200;
        }
        if (!game.level.triggers.tripped("animation completed")) return false;
        game.cam.zoom = 1 - easeInOut((-player.x) / 500) * 0.3;
        if (player.x < -3000) {
            game.cam.zoom = 0.7 + easeInOut(1 - (player.x + 3500) / 400) * 0.3;
        }
        var percent = 1 - Math.min(Math.abs(player.x + 1800) / 1000, 1);
        percent = percent * 0.1;
        game.cam.x = game.cam.x * (1 - percent) - 2430 * percent;
        if (player.y < -550) {
            var a = Math.min(-(player.y + 550) / 200, 1);
            game.cam.viewportBoundary.y = -200 - 300 * a;
            game.cam.viewportBoundary.h = a * 300;
            game.cam.x = game.cam.x * (1 - a) - 3050 * a;
        } else {
            game.cam.offset.y = -200;
            game.cam.viewportBoundary.y = -200;
            game.cam.viewportBoundary.h = 0;
        }
    },
    levelComplete: function () {
        if (game.level.triggers.tripped("ultra shortcut 2")) return true;
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -3940 || player.y > 530;
    },
    camOffset: {
        x: 0,
        y: -200
    },
    camStartingPosition: {
        x: 0,
        y: -200
    },
    spawnPoint: {
        x: 270,
        y: 0
    }
}