var menu = {
    titleScreen: true,
    levelSelectScreen: false,
    levelSelectAnimation: 0,
    settingsScreen: false,
    settingsScreenAnimation: 0,
    keybindsScreen: false,
    keybindsScreenAnimation: 0,
    keybindAnimations: [],
    changeKeybindAnimations: [],
    endKeybindChange: false,
    acceptingKeybindInput: false,
    addingKeybind: false,
    keybindInput: false,
    successfulKeybindChange: false,
    duplicateKeybindChange: false,
    resetKeybindsButtonAnimation: 0,
    settingsAnimations: [],
    wipeSaveScreen: false,
    wipeSaveAnimation: 0,
    titleScreenAnimation: 0,
    firstButtonAnimation: 0,
    secondButtonAnimation: 0,
    backButtonAnimation: 0,
    newGameAnimation: 0,
    loadingLevel: false,
    loadingLevelAnimation: 0,
    levelSelectAnimations: [],
    creditsScreen: false,
    endCreditsScreenAnimation: 0,
    creditsScreenAnimation: 0,
    creditsContinueButtonAnimation: 0,
    movedCreditsScreen: false,
    exitingGameAnimation: 0,
    navigatingWithKeys: false,
    navigationObjectSelected: 0,
    navigationLevelSelected: 0,
    navigationKeybindSelected: 0,
    navigationKeybindOption: 0,
    settings: {
        instantRestart: false,
        gameTimer: true,
        splitsTimer: false,
        screenshake: true,
        musicVolume: 1,
        musicMuted: false,
        soundEffectsVolume: 1,
        soundEffectsMuted: false,
        restartGameKeybind: false,
        keybinds: [],
        showKeybindPrompts: true,
        autoHideUI: false,
        discoveryAlerts: true
    },
    getKeybindTextForAction: function (name) {
        var keybind = this.settings.keybinds.find(e => e.name == name);
        if (!keybind.keys[0]) return false;
        var text = keybind.keys[0].name.toUpperCase();
        text = text.replace("ARROW", "");
        if (text == "ESCAPE") text = "ESC";
        return text;
    },
    tick: function () {
        this.update();
        this.draw();
    },
    update: function () {
        if (this.creditsScreen) {
            this.updateKeyboardNavigation();
            this.updateCreditsScreen();
            game.background.update();
            game.input.update();
        } else if (this.titleScreen) {
            this.updateKeyboardNavigation();
            this.updateTitleScreen();
            game.background.update();
            game.input.update();
        } else {
            if (t % frameRate == 0) {
                frame++;
                game.update();
                game.input.update();
            }
        }
        game.ui.update();
        game.music.update();

        if (this.exitingGameAnimation) {
            if (this.titleScreen) {
                this.exitingGameAnimation--;
            } else {
                if (this.exitingGameAnimation === 1) game.soundEffects.whoosh();
                this.exitingGameAnimation++;
                if (this.exitingGameAnimation == 50) this.loadMenuFromGameExit();
            }
        }
    },
    draw: function () {
        if (this.creditsScreen) {
            if (this.endCreditsScreenAnimation) {
                var a = easeInOut(1 - this.endCreditsScreenAnimation / 80);
                var a2 = easeInOut(1 - this.endCreditsScreenAnimation / 50);
                this.drawTitleScreen();
                ctx.save();
                ctx.translate(500, 500);
                ctx.beginPath();
                ctx.arc(0, (1 - a) * -700, 600 * a2 + 100 * a, 0, 2 * Math.PI);
                ctx.scale(1.5 - a * 0.5, 1.5 - a * 0.5);
                ctx.translate(-500, -500);
                ctx.clip();
                this.drawCreditsScreen();
                ctx.restore();
            } else {
                this.drawCreditsScreen();
            }
        } else if (this.titleScreen) {
            this.drawTitleScreen();
            if (this.exitingGameAnimation) {
                var a = easeInOut(this.exitingGameAnimation / 50);
                ctx.save();
                ctx.translate(0, -500 + (1 - a) * 2000);
                ctx.fillStyle = "black";
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(1000, 500);
                ctx.lineTo(1000, 2000);
                ctx.lineTo(0, 1500);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        } else {
            game.draw();
            if (this.exitingGameAnimation) {
                var a = easeInOut(this.exitingGameAnimation / 50);
                ctx.save();
                ctx.translate(0, -2500 + a * 2000);
                ctx.fillStyle = "black";
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(1000, 500);
                ctx.lineTo(1000, 2000);
                ctx.lineTo(0, 1500);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }
        game.ui.draw();
    },
    exitToMenu: function () {
        this.exitingGameAnimation = Math.max(this.exitingGameAnimation, 1);
    },
    loadMenuFromGameExit: function () {
        this.titleScreen = true;
        this.levelSelectScreen = true;
        this.wipeSaveScreen = false;
        this.wipeSaveAnimation = 0;
        this.newGameAnimation = 0;
        this.loadingLevelAnimation = 0;
        this.loadingLevel = false;
        this.levelSelectAnimation = 40;
        this.levelSelectAnimations = [];
        game.background.effect.end("all");
        game.input.exit = false;
        game.level.levelTransition = 0;
        game.level.load(0);
        game.cam.y = -2000 + (t % (350 * 2 / 0.8));
        game.cam.realY = game.cam.y;
        if (this.settingsScreen) {
            this.levelSelectScreen = false;
            this.levelSelectAnimation = 0;
        }
    },
    updateKeyboardNavigationStatus: function () {
        if (Mouse.xmove || Mouse.ymove || Mouse.down) {
            this.navigatingWithKeys = false;
        }
        var menuNavigation = [
            game.input.keys.left,
            game.input.keys.right,
            game.input.keys.up,
            game.input.keys.down,
            game.input.keys.select,
            game.input.keys.exit
        ];
        for (var o of menuNavigation) {
            if (o.some(e => Keys.keys[e])) {
                this.navigatingWithKeys = true;
                break;
            }
        }
    },
    updatePageAnimations: function () {
        if (this.levelSelectScreen) {
            this.levelSelectAnimation++;
        } else {
            this.levelSelectAnimation--;
        }
        this.levelSelectAnimation = Math.max(Math.min(this.levelSelectAnimation, 40), 0);

        if (this.settingsScreen) {
            if (this.levelSelectAnimation) {
                this.levelSelectScreen = false;
            } else if (this.wipeSaveAnimation) {
                this.wipeSaveScreen = false;
            }
            if (this.levelSelectAnimation < 20 && this.wipeSaveAnimation < 20) {
                this.settingsScreenAnimation++;
            }
        } else {
            this.settingsScreenAnimation--;
        }
        this.settingsScreenAnimation = Math.max(Math.min(this.settingsScreenAnimation, 40), 0);

        if (this.keybindsScreen) {
            this.keybindsScreenAnimation++;
        } else {
            this.keybindsScreenAnimation--;
        }
        this.keybindsScreenAnimation = Math.max(Math.min(this.keybindsScreenAnimation, 40), 0);

        if (this.wipeSaveScreen) {
            this.wipeSaveAnimation++;
        } else {
            this.wipeSaveAnimation--;
        }
        this.wipeSaveAnimation = Math.max(Math.min(this.wipeSaveAnimation, 40), 0);

        if (this.newGameAnimation) {
            if (this.newGameAnimation == 15) {
                game.soundEffects.whoosh();
            }
            this.newGameAnimation++;
            var speed = Math.min(this.newGameAnimation, (-180 - game.cam.y) / 10);
            game.cam.y += speed;
            game.cam.y = Math.min(game.cam.y, -200);
            game.cam.x = 0 * 0.05 + game.cam.x * 0.95;
            if (this.newGameAnimation > 80) {
                this.titleScreen = false;
            }
            return;
        }
        if (this.loadingLevelAnimation) {
            this.loadingLevelAnimation++;
            if (this.loadingLevelAnimation == 22) game.soundEffects.reverseWhoosh();
            if (this.loadingLevelAnimation > 80) {
                this.titleScreen = false;
                game.level.load(this.loadingLevel);
                game.level.levelTransition = game.level.levelTransitionCap;
                game.ui.timer.newLevel();
            }
        }
        if (this.loadingLevelAnimation < 80) {
            this.titleScreenAnimation++;
            game.cam.x = (t / 5 % (350 * 2 / 0.8));
            game.cam.y = -2000 + (t % (350 * 2 / 0.8));
        }
    },
    updateKeyboardNavigation: function () {
        var selectedKeybind = false;
        for (var n = 0; n < menu.keybindAnimations.length; n++) {
            for (var n2 = 0; n2 < menu.keybindAnimations[n].length; n2++) {
                var o = menu.keybindAnimations[n][n2];
                if (o.selectAnimation) {
                    selectedKeybind = o;
                    break;
                }
            }
        }

        this.updateKeyboardNavigationStatus();
        if (!this.navigatingWithKeys) {
            for (var n = 0; n < menu.keybindAnimations.length; n++) {
                for (var n2 = 0; n2 < menu.keybindAnimations[n].length; n2++) {
                    var o = menu.keybindAnimations[n][n2];
                    o.selectedWithKeybind = false;
                }
            }
            return;
        }
        if (!this.navigationObjectSelected) this.navigationObjectSelected = 0;
        if (!selectedKeybind) {
            if (game.input.downStart === 1) {
                this.navigationObjectSelected++;
            }
            if (game.input.upStart === 1) {
                this.navigationObjectSelected--;
            }
        }
        if (this.wipeSaveScreen) {
            this.navigationObjectSelected = (this.navigationObjectSelected % 2 + 2) % 2;
            if (game.input.selectStart === 1) {
                if (this.navigationObjectSelected === 0) {
                    this.clickNewGame();
                } else if (this.navigationObjectSelected === 1) {
                    this.clickWipeSaveScreenCancel();
                }
            }
            if (game.input.exitStart === 1) {
                this.clickWipeSaveScreenCancel();
                game.input.exitStart = 2;
            }
        }
        if (this.levelSelectScreen) {
            var x = this.navigationLevelSelected % 5;
            var y = Math.floor(this.navigationLevelSelected / 5);
            if (game.input.leftStart === 1) {
                x--;
            }
            if (game.input.rightStart === 1) {
                x++;
            }
            if (game.input.upStart === 1) {
                y--;
            }
            if (game.input.downStart === 1) {
                y++;
            }
            x = (x % 5 + 5) % 5;
            y = (y % 2 + 2) % 2;
            this.navigationLevelSelected = y * 5 + x;
            if (game.input.selectStart === 1) {
                this.clickLevel(this.navigationLevelSelected);
            } else if (game.input.exitStart === 1 && !this.loadingLevelAnimation) {
                this.clickLevelSelectScreenExit();
            }
        }
        if (this.settingsScreen && !this.keybindsScreen) {
            if (game.input.exitStart === 1) {
                this.clickSettingsScreenExit();
            }
            this.navigationObjectSelected = (this.navigationObjectSelected % 11 + 11) % 11;
            var o = this.settingsAnimations[this.navigationObjectSelected];
            if (!o) return;
            if (o.type == "toggle") {
                if (game.input.selectStart === 1) {
                    game.soundEffects.menuClick();
                    o.value = !o.value;
                    menu.settings[o.reference] = o.value;
                    o.switchAnimation = 10;
                    updateSettingsData();
                    game.input.selectStart = 2;
                }
            } else if (o.type == "range") {
                var change = false;
                if (game.input.selectStart === 1) {
                    game.soundEffects.menuClick();
                    o.switchAnimation = 20;
                    if (o.value) {
                        o.noTextAnimation = false;
                        o.muted = !o.muted;
                        change = true;
                    } else {
                        o.noTextAnimation = true;
                    }
                    game.input.selectStart = 2;
                }
                if (game.input.left) {
                    o.noTextAnimation = false;
                    change = true;
                    o.value -= 0.02;
                    o.value = Math.max(o.value, 0);
                    if (o.value > 0) {
                        if (o.muted) {
                            o.muted = false;
                            o.switchAnimation = 20;
                        }
                    } else {
                        if (!o.muted) {
                            o.muted = true;
                            o.switchAnimation = 20;
                        }
                    }
                }
                if (game.input.right) {
                    o.noTextAnimation = false;
                    change = true;
                    o.value += 0.02;
                    o.value = Math.min(o.value, 1);
                    if (o.value > 0) {
                        if (o.muted) {
                            o.muted = false;
                            o.switchAnimation = 20;
                        }
                    } else {
                        if (!o.muted) {
                            o.muted = true;
                            o.switchAnimation = 20;
                        }
                    }
                }
                if (change) {
                    var value;
                    if (o.muted) {
                        value = 0;
                    } else {
                        value = o.value;
                    }
                    if (o.reference == "musicVolume") {
                        menu.settings.musicVolume = o.value;
                        menu.settings.musicMuted = o.muted;
                        game.music.updateVolume(value);
                    } else {
                        menu.settings.soundEffectsVolume = o.value;
                        menu.settings.soundEffectsMuted = o.muted;
                        game.soundEffects.updateSoundEffectsVolume(value);
                    }
                    updateSettingsData();
                }
            } else if (o.type == "link") {
                if (game.input.selectStart === 1) {
                    this.clickKeybindsScreen();
                }
            }
        }
        if (this.settingsScreen && this.keybindsScreen) {
            this.navigationObjectSelected = (this.navigationObjectSelected % 10 + 10) % 10;
            if (game.input.exitStart === 1) {
                if (selectedKeybind) {
                    menu.endKeybindChange = true;
                } else {
                    this.clickKeybindsScreenExit();
                }
            }
            if (selectedKeybind) {
                var selectedAdd = menu.keybindAnimations[this.navigationObjectSelected].length - 1 == this.navigationKeybindSelected;
                if (this.navigationKeybindSelected === 3) selectedAdd = false;
                if (game.input.rightStart === 1) {
                    this.navigationKeybindOption++;
                }
                if (game.input.leftStart === 1) {
                    this.navigationKeybindOption--;
                }
                var optionLength = 3;
                if (selectedAdd) optionLength = 2;
                this.navigationKeybindOption = (this.navigationKeybindOption % optionLength + optionLength) % optionLength;

                if (game.input.selectStart === 1) {
                    game.soundEffects.menuClick();
                    if (selectedAdd) {
                        if (this.navigationKeybindOption === 0) {
                            this.acceptingKeybindInput = true;
                            this.addingKeybind = true;
                        } else if (this.navigationKeybindOption === 1) {
                            menu.endKeybindChange = true;
                        }
                    } else {
                        if (this.navigationKeybindOption === 0) {
                            this.acceptingKeybindInput = true;
                            this.addingKeybind = false;
                        } else if (this.navigationKeybindOption === 1) {
                            this.keybindAnimations[this.navigationObjectSelected][this.navigationKeybindSelected].deleteAnimation = 1;
                            menu.endKeybindChange = true;
                        } else if (this.navigationKeybindOption === 2) {
                            menu.endKeybindChange = true;
                        }
                    }
                    game.input.selectStart = 2;
                }
            } else {
                if (game.input.rightStart === 1) {
                    this.navigationKeybindSelected++;
                }
                if (game.input.leftStart === 1) {
                    this.navigationKeybindSelected--;
                }
                if (this.navigationObjectSelected < 9) {
                    var length = menu.keybindAnimations[this.navigationObjectSelected].length;
                    this.navigationKeybindSelected = (this.navigationKeybindSelected % length + length) % length;
                }
                for (var n = 0; n < menu.keybindAnimations.length; n++) {
                    for (var n2 = 0; n2 < menu.keybindAnimations[n].length; n2++) {
                        var o = menu.keybindAnimations[n][n2];
                        if (n === this.navigationObjectSelected && n2 === this.navigationKeybindSelected) {
                            o.selectedWithKeybind = true;
                            if (game.input.selectStart === 1) {
                                o.selectAnimation = 1;
                                this.navigationKeybindOption = 0;
                                game.soundEffects.menuClick();
                                game.input.selectStart = 2;
                            }
                        } else {
                            o.selectedWithKeybind = false;
                        }
                    }
                }
                if (n === 9 && game.input.selectStart === 1) {
                    this.clickResetKeybinds();
                    game.input.selectStart = 2;
                }
            }
        }
        if (!this.levelSelectScreen && !this.settingsScreen && !this.wipeSaveScreen && !this.creditsScreen) {
            this.navigationObjectSelected = (this.navigationObjectSelected % 2 + 2) % 2;
            if (!saveDataStored) this.navigationObjectSelected = 0;
            if (game.input.selectStart === 1) {
                if (this.navigationObjectSelected === 0) {
                    if (saveDataStored) {
                        this.clickLevelSelectScreen();
                    } else {
                        this.clickNewGame();
                    }
                } else if (this.navigationObjectSelected === 1) {
                    this.clickWipeSaveScreen();
                }
            }
            if (game.input.exitStart === 1 && !this.newGameAnimation) {
                game.soundEffects.menuClick();
                menu.navigatingWithKeys = true;
                menu.settingsScreen = true;
                game.input.exitStart = 2;
            }
        }
        if (this.creditsScreen) {
            if (this.creditsScreenAnimation >= 50 && !this.endCreditsScreenAnimation) {
                if (game.input.selectStart === 1 || game.input.exitStart === 1) {
                    this.clickEndCreditsScreen();
                }
            }
        }
    },
    clickResetKeybinds: function () {
        game.soundEffects.menuClick();
        this.keybindAnimations = [];
        menu.settings.keybinds = structuredClone(defaultKeybinds);
        game.input.updateKeybinds();
        updateSettingsData();
    },
    clickEndCreditsScreen: function () {
        game.soundEffects.menuClick();
        this.endCreditsScreenAnimation = 1;
        Mouse.click = false;
        game.input.selectStart = 2;
    },
    clickNewGame: function () {
        game.soundEffects.levelSelect();
        game.newGameFromMenu = true;
        game.newGame();
        cmgAPI.startLevel(0);
        this.newGameAnimation = 1;
        game.input.selectStart = 2;
        this.navigationObjectSelected = 0;
    },
    clickLevelSelectScreen: function () {
        game.soundEffects.menuClick();
        this.levelSelectScreen = true;
        Mouse.click = false;
        game.input.selectStart = 2;
        this.navigationLevelSelected = 0;
    },
    clickWipeSaveScreen: function () {
        game.soundEffects.menuClick();
        this.wipeSaveScreen = true;
        game.input.selectStart = 2;
    },
    clickWipeSaveScreenCancel: function () {
        game.soundEffects.menuClick();
        this.wipeSaveScreen = false;
        game.input.selectStart = 2;
    },
    clickLevelSelectScreenExit: function () {
        game.soundEffects.menuClick();
        this.levelSelectScreen = false;
        game.input.exitStart = 2;
        this.navigationObjectSelected = 0;
    },
    clickKeybindsScreen: function () {
        game.soundEffects.menuClick();
        menu.keybindsScreen = true;
        game.input.selectStart = 2;
        this.navigationObjectSelected = 0;
    },
    clickKeybindsScreenExit: function () {
        game.soundEffects.menuClick();
        this.keybindsScreen = false;
        this.acceptingKeybindInput = false;
        this.addingKeybind = false;
        game.input.exitStart = 2;
        this.navigationObjectSelected = 0;
    },
    clickSettingsScreenExit: function () {
        game.soundEffects.menuClick();
        this.settingsScreen = false;
        game.input.exitStart = 2;
        this.navigationObjectSelected = 0;
    },
    clickLevel: function (n) {
        if (!this.levelSelectAnimations[n]) return;
        if (saveData.levelsBeaten >= n) {
            this.levelSelectAnimations[n].selected = 1;
            this.loadingLevel = n;
            this.loadingLevelAnimation = 1;
            cmgAPI.startLevel(n);
            game.soundEffects.levelSelect();
        } else {
            this.levelSelectAnimations[n].shake = 40 + this.levelSelectAnimations[n].energy;
            this.levelSelectAnimations[n].energy += 3;
            game.soundEffects.levelSelectInvalid();
        }
    },
    updateButtonAnimations: function () {
        var text1 = "Not New Game";
        var text2 = false;
        if (saveDataStored) {
            text1 = "Don't Continue";
            text2 = "Not New Game";
        }
        ctx.font = "70px rubik";
        var width = ctx.measureText(text1).width;
        var mouseInBox = Mouse.inBox(500 - width / 2, 460 - 70 / 2 - 10, width, 70 + 20) && !this.navigatingWithKeys;
        var keyboardFocus = this.navigatingWithKeys && this.navigationObjectSelected === 0;
        var correctPage = !this.levelSelectAnimation && !this.settingsScreenAnimation;
        if (correctPage && (mouseInBox || keyboardFocus)) {
            this.firstButtonAnimation++;
            if (Mouse.click && mouseInBox) {
                if (this.wipeSaveScreen) {
                    this.clickNewGame();
                } else {
                    if (text1 == "Don't Continue") {
                        this.clickLevelSelectScreen();
                    } else {
                        this.clickNewGame();
                    }
                }
            }
        } else {
            this.firstButtonAnimation--;
        }
        var width = ctx.measureText(text2).width;
        var mouseInBox = Mouse.inBox(500 - width / 2, 600 - 70 / 2 - 10, width, 70 + 20) && !this.navigatingWithKeys;
        var keyboardFocus = this.navigatingWithKeys && this.navigationObjectSelected === 1;
        var correctPage = (text2 || this.wipeSaveAnimation) && !this.levelSelectAnimation && !this.settingsScreenAnimation;
        if (correctPage && (mouseInBox || keyboardFocus)) {
            this.secondButtonAnimation++;
            if (Mouse.click && mouseInBox) {
                if (this.wipeSaveScreen) {
                    this.clickWipeSaveScreenCancel();
                } else {
                    this.clickWipeSaveScreen();
                }
            }
        } else {
            this.secondButtonAnimation--;
        }
        var width = ctx.measureText("Not Back").width;
        var mouseInBox = Mouse.inBox(500 - width / 2, 900 - 70 / 2 - 10, width, 70 + 20) && !this.navigatingWithKeys;
        var updateBackButton = (this.levelSelectAnimation && !this.loadingLevel) || this.settingsScreen;
        if (mouseInBox && updateBackButton) {
            this.backButtonAnimation++;
            if (Mouse.click && mouseInBox) {
                game.soundEffects.menuClick();
                if (this.levelSelectScreen) this.clickLevelSelectScreenExit();
                if (this.settingsScreen) {
                    if (this.keybindsScreen) {
                        this.clickKeybindsScreenExit();
                    } else {
                        this.clickSettingsScreenExit();
                    }
                }
            }
        } else {
            this.backButtonAnimation--;
        }
        this.firstButtonAnimation = Math.min(Math.max(0, this.firstButtonAnimation), 15);
        this.secondButtonAnimation = Math.min(Math.max(0, this.secondButtonAnimation), 15);
        this.backButtonAnimation = Math.min(Math.max(0, this.backButtonAnimation), 15);
    },
    updateTitleScreen: function () {
        this.updatePageAnimations();
        this.updateLevelSelectScreen();
        this.updateButtonAnimations();
        this.updateSettingsScreen();
        this.updateKeybindsScreen();
    },
    drawKeybindPrompt: function (action, border) {
        var name = this.getKeybindTextForAction(action);
        if (!name) return;
        if (["LEFT", "RIGHT", "UP", "DOWN"].indexOf(name) != -1) {
            var direction = [-90, 90, 0, 180][["LEFT", "RIGHT", "UP", "DOWN"].indexOf(name)];
            ctx.save();
            ctx.translate(0, 50);
            ctx.rotate(direction * Math.PI / 180);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.beginPath();
            ctx.moveTo(-5, 3);
            ctx.lineTo(0, -4);
            ctx.lineTo(5, 3);
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "20px rubik";
            if (border) {
                ctx.strokeStyle = "white";
                ctx.lineWidth = 10;
                ctx.strokeText(`[    ]`, 0, 50);
            }
            ctx.fillText(`[    ]`, 0, 50);
            ctx.restore();
        } else {
            ctx.save();
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "20px rubik";
            if (border) {
                ctx.strokeStyle = "white";
                ctx.lineWidth = 10;
                ctx.strokeText(`[ ${name} ]`, 0, 50);
            }
            ctx.fillText(`[ ${name} ]`, 0, 50);
            ctx.restore();
        }
    },
    drawTitleScreen: function () {
        game.draw();

        ctx.save();
        if (this.levelSelectAnimation) {
            var a = easeInOut(this.levelSelectAnimation / 40);
            ctx.translate(-a * 1000, 0);
        }
        if (this.wipeSaveAnimation) {
            var a = easeInOut(this.wipeSaveAnimation / 40);
            ctx.translate(a * 1000, 0);
        }
        if (this.settingsScreenAnimation) {
            var a = easeInOut(this.settingsScreenAnimation / 40);
            ctx.translate(0, a * 1000);
        }
        if (this.keybindsScreenAnimation) {
            var a = easeInOut(this.keybindsScreenAnimation / 40);
            ctx.translate(-a * 1000, 0);
        }

        if (this.titleScreenAnimation < 20) {
            ctx.save();
            ctx.fillStyle = "white";
            ctx.globalAlpha = 1 - this.titleScreenAnimation / 20;
            ctx.fillRect(0, 0, 1000, 1000);
            ctx.restore();
        }

        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "100px rubikbold";

        var fade = 1 - easeInOut(this.newGameAnimation / 40);

        var a = easeInOut((this.titleScreenAnimation - 20) / 40) * fade;
        ctx.save();
        ctx.translate(500, 200);
        ctx.scale(a, a);
        ctx.fillText("Opposite Day 2", 0, 0);
        ctx.font = "40px rubik";
        ctx.fillText("(Free Version)", 0, 80);
        ctx.restore();

        var text1 = "Not New Game";
        var text2 = false;
        if (saveDataStored) {
            text1 = "Don't Continue";
            text2 = "Not New Game";
        }
        var a = easeInOut((this.titleScreenAnimation - 70) / 40) * (1 + easeInOut(this.firstButtonAnimation / 15) * 0.1) * fade;
        ctx.save();
        ctx.translate(500, 460);
        ctx.scale(a, a);
        if (this.settings.showKeybindPrompts) {
            if (this.navigationObjectSelected === 0) {
                this.drawKeybindPrompt("select");
            }
        }
        ctx.font = "70px rubik";
        ctx.fillText(text1, 0, 0);
        ctx.globalAlpha = this.firstButtonAnimation / 15;
        ctx.fillText(`[  ${text1}  ]`, 0, 0);
        ctx.restore();

        if (text2) {
            var a = easeInOut((this.titleScreenAnimation - 90) / 40) * (1 + easeInOut(this.secondButtonAnimation / 15) * 0.1) * fade;
            ctx.save();
            ctx.translate(500, 600);
            ctx.scale(a, a);
            if (this.settings.showKeybindPrompts) {
                if (this.navigationObjectSelected === 1) {
                    this.drawKeybindPrompt("select");
                }
            }
            ctx.font = "70px rubik";
            ctx.fillText(text2, 0, 0);
            ctx.globalAlpha = this.secondButtonAnimation / 15;
            ctx.fillText(`[  ${text2}  ]`, 0, 0);
            ctx.restore();
        }

        ctx.font = "40px rubik";
        var a = easeInOut((this.titleScreenAnimation - 120) / 40) * fade;
        ctx.save();
        ctx.translate(500, 940);
        ctx.scale(a, a);
        ctx.fillText("Not by John Butler", 0, 0);
        ctx.restore();

        this.drawLevelSelectScreen();
        this.drawWipeSaveScreen(fade);
        this.drawSettingsScreen();
        this.drawKeybindsScreen();

        ctx.restore();
    },
    drawWipeSaveScreen: function (fade) {
        ctx.font = "100px rubikbold";
        ctx.save();
        ctx.translate(-500, 200);
        ctx.scale(fade, fade);
        ctx.fillText("Aren't You Sure?", 0, 0);
        ctx.restore();

        ctx.font = "40px rubik";
        ctx.save();
        ctx.translate(-500, 305);
        ctx.scale(fade, fade);
        ctx.fillText("This action will permanently", 0, -25);
        ctx.fillText("undelete your past progress.", 0, 25);
        ctx.restore();

        var a = (1 + easeInOut(this.firstButtonAnimation / 15) * 0.1) * fade;
        ctx.save();
        ctx.translate(-500, 460);
        ctx.scale(a, a);
        if (this.settings.showKeybindPrompts) {
            if (this.navigationObjectSelected === 0) {
                this.drawKeybindPrompt("select");
            }
        }
        ctx.font = "70px rubik";
        ctx.fillText("Unproceed", 0, 0);
        ctx.globalAlpha = this.firstButtonAnimation / 15;
        ctx.fillText(`[  Unproceed  ]`, 0, 0);
        ctx.restore();

        var a = (1 + easeInOut(this.secondButtonAnimation / 15) * 0.1) * fade;
        ctx.save();
        ctx.translate(-500, 600);
        ctx.scale(a, a);
        if (this.settings.showKeybindPrompts) {
            if (this.navigationObjectSelected === 1) {
                this.drawKeybindPrompt("select");
            }
        }
        ctx.font = "70px rubik";
        ctx.fillText("Uncancel", 0, 0);
        ctx.globalAlpha = this.secondButtonAnimation / 15;
        ctx.fillText(`[  Uncancel  ]`, 0, 0);
        ctx.restore();
    },
    updateSettingsScreen: function () {
        if (this.keybindsScreenAnimation) return;
        if (!this.settingsScreen) return;
        if (this.settingsAnimations.length == 0) {
            this.settingsAnimations = [
                { text: "Music Unvolume", type: "range", reference: "musicVolume", value: menu.settings.musicVolume, muted: menu.settings.musicMuted },
                { text: "Sound Effects Unvolume", type: "range", reference: "soundEffectsVolume", value: menu.settings.soundEffectsVolume, muted: menu.settings.soundEffectsMuted },
                { text: "Screenunshake", type: "toggle", reference: "screenshake", value: menu.settings.screenshake },
                { text: "Instant Unrestart", type: "toggle", reference: "instantRestart", value: menu.settings.instantRestart },
                { text: "Game Untimer", type: "toggle", reference: "gameTimer", value: menu.settings.gameTimer },
                { text: "Unsplits Untimer", type: "toggle", reference: "splitsTimer", value: menu.settings.splitsTimer },
                { text: "Unrestart Game Keyunbind", type: "toggle", reference: "restartGameKeybind", value: menu.settings.restartGameKeybind },
                { text: "Keyunbind Prompts", type: "toggle", reference: "showKeybindPrompts", value: menu.settings.showKeybindPrompts },
                { text: "Auto Unhide In-Game UI", type: "toggle", reference: "autoHideUI", value: menu.settings.autoHideUI },
                { text: "Undiscovery Alerts", type: "toggle", reference: "discoveryAlerts", value: menu.settings.discoveryAlerts },
                { text: "Unchange Keyunbinds", type: "link", hoverAnimation: 0 }
            ];
        }

        var y = 150;
        for (var n = 0; n < this.settingsAnimations.length; n++) {
            var o = this.settingsAnimations[n];
            if (o.type == "toggle") {
                if (!o.switchAnimation) o.switchAnimation = 0;
                o.switchAnimation--;
                o.switchAnimation = Math.max(o.switchAnimation, 0);
                var hitbox = { x: 200, y: y - 35, w: 400, h: 55 }
                if (Mouse.clickInBox(hitbox.x, hitbox.y, hitbox.w, hitbox.h)) {
                    game.soundEffects.menuClick();
                    o.value = !o.value;
                    menu.settings[o.reference] = o.value;
                    o.switchAnimation = 10;
                    updateSettingsData();
                }
                y += 55;
            } else if (o.type == "range") {
                var change = false;
                if (!o.switchAnimation) o.switchAnimation = 0;
                o.switchAnimation--;
                o.switchAnimation = Math.max(o.switchAnimation, 0);
                var hitbox = { x: 190, y: y - 33, w: 80, h: 80 };
                if (Mouse.clickInBox(hitbox.x, hitbox.y, hitbox.w, hitbox.h)) {
                    game.soundEffects.menuClick();
                    o.switchAnimation = 20;
                    if (o.value) {
                        o.noTextAnimation = false;
                        o.muted = !o.muted;
                        change = true;
                    } else {
                        o.noTextAnimation = true;
                    }
                }
                var hitbox = { x: 300, y: y, w: 450, h: 80 };
                if (Mouse.downStart && Mouse.inBox(hitbox.x, hitbox.y, hitbox.w, hitbox.h)) o.selected = true;
                if (Mouse.click && o.selected) Mouse.click = false;
                if (Mouse.down && o.selected) {
                    o.noTextAnimation = false;
                    change = true;
                    o.value = Math.min(Math.max((Mouse.x - hitbox.x - 10) / (hitbox.w - 40), 0), 1);
                    if (o.value > 0) {
                        if (o.muted) {
                            o.muted = false;
                            o.switchAnimation = 20;
                        }
                    } else {
                        if (!o.muted) {
                            o.muted = true;
                            o.switchAnimation = 20;
                        }
                    }
                } else {
                    o.selected = false;
                }
                if (change) {
                    var value;
                    if (o.muted) {
                        value = 0;
                    } else {
                        value = o.value;
                    }
                    if (o.reference == "musicVolume") {
                        menu.settings.musicVolume = o.value;
                        menu.settings.musicMuted = o.muted;
                        game.music.updateVolume(value);
                    } else {
                        menu.settings.soundEffectsVolume = o.value;
                        menu.settings.soundEffectsMuted = o.muted;
                        game.soundEffects.updateSoundEffectsVolume(value);
                    }
                    updateSettingsData();
                }
                y += 100;
            } else if (o.type == "link") {
                var hitbox = { x: 200, y: y - 10, w: 550, h: 80 };
                if (Mouse.inBox(hitbox.x, hitbox.y, hitbox.w, hitbox.h) && !this.navigatingWithKeys) {
                    o.hoverAnimation++;
                    if (Mouse.click) {
                        this.clickKeybindsScreen();
                    }
                } else {
                    o.hoverAnimation--;
                }
                o.hoverAnimation = Math.max(Math.min(o.hoverAnimation, 15), 0);
                y += 60;
            }
        }
    },
    drawSettingsScreen: function () {
        ctx.font = "100px rubikbold";
        ctx.fillText("Unsettings", 500, -930);

        ctx.save();
        ctx.translate(0, -850);
        for (var n = 0; n < this.settingsAnimations.length; n++) {
            var o = this.settingsAnimations[n];
            ctx.save();
            ctx.translate(200, 0);

            if (menu.navigatingWithKeys && menu.navigationObjectSelected === n && this.settingsScreen && !this.keybindsScreen) {
                var yTranslate = [-3, 15, 27][["toggle", "range", "link"].indexOf(o.type)];
                ctx.save();
                ctx.translate(-70, yTranslate);
                ctx.fillStyle = "black";
                ctx.beginPath();
                ctx.moveTo(0, -25);
                ctx.lineTo(0, 25);
                ctx.lineTo(30, 0);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            if (o.type == "toggle") {
                var a;
                if (o.value) {
                    a = 1 - o.switchAnimation / 10;
                } else {
                    a = o.switchAnimation / 10;
                }
                var a2 = easeInBack(a);
                a = easeInOut(a);
                ctx.save();
                ctx.translate(75 / 2, 0);
                var s = 1 - a2 * 0.1;
                ctx.scale(s, s);
                ctx.translate(-75 / 2, 0);
                var l = (1 - a) * 150;
                var l2 = (1 - a) * 100
                var color = `rgb(${l},${l},${l})`;
                var color2 = `rgb(${l2},${l2},${l2})`;
                ctx.strokeStyle = color;
                ctx.lineWidth = 5;
                ctx.roundRect(0, -22, 75, 40, 20);
                ctx.stroke();

                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(20 + a * 32, -2, 9 + a * 3, 0, 2 * Math.PI);
                ctx.fill();
                ctx.restore();

                ctx.fillStyle = color2;
                ctx.font = "40px rubik";
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                ctx.fillText(o.text, 100, 0);
            } else if (o.type == "range") {
                var a;
                if (!o.muted) {
                    a = 1 - o.switchAnimation / 20;
                } else {
                    a = o.switchAnimation / 20;
                }
                var a2 = easeInBack(a);
                a = easeInOut(a);

                var image = images.volume;
                if (o.muted) image = images.volumeMuted
                ctx.save();
                ctx.translate(35, 15);
                var s = 1 - a2 * 0.05;
                if (!o.muted) s = 1 + a2 * 0.05;
                ctx.scale(s, s);
                ctx.translate(-35, -15);
                ctx.drawImage(image, 0, -20, 70, 70);
                ctx.restore();

                if (o.noTextAnimation) a = 0;
                var l = (1 - a) * 150;
                var l2 = (1 - a) * 50 + 100;
                var l3 = (1 - a) * 100;
                var color = `rgb(${l},${l},${l})`;
                var color2 = `rgb(${l2},${l2},${l2})`;
                var color3 = `rgb(${l3},${l3},${l3})`;
                ctx.strokeStyle = color2;
                ctx.lineWidth = 7;
                ctx.lineCap = "round";
                ctx.beginPath();
                ctx.moveTo(105, 45);
                ctx.lineTo(500, 45);
                ctx.stroke();

                ctx.lineWidth = 5;
                ctx.fillStyle = color;
                ctx.roundRect(100 + 400 * o.value, 24, 20, 40, 5);
                ctx.fill();

                ctx.font = "40px rubik";
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                ctx.fillStyle = color3;
                ctx.fillText(o.text, 100, 0);
            } else if (o.type == "link") {
                ctx.translate(0, 20);
                ctx.save();
                ctx.translate(200, 0);
                var a = easeInOut(o.hoverAnimation / 15);
                var s = 1 + 0.05 * a;
                ctx.scale(s, s);
                ctx.translate(-200, 0);
                ctx.drawImage(images.arrowsSquare, -5, -33, 80, 80);

                ctx.font = "40px rubik";
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "black";
                ctx.fillText(o.text, 100, 10);
                ctx.restore();
            }
            ctx.restore();
            ctx.translate(0, 55);
            if (o.type == "range") {
                ctx.translate(0, 40);
            }
        }
        ctx.restore();

        ctx.font = "70px rubik";
        var a = (1 + easeInOut(this.backButtonAnimation / 15) * 0.1);
        ctx.save();
        ctx.translate(500, -100);
        ctx.scale(a, a);
        if (this.settings.showKeybindPrompts) {
            this.drawKeybindPrompt("exit");
        }
        ctx.fillText("Not Back", 0, 0);
        ctx.globalAlpha = this.backButtonAnimation / 15;
        ctx.fillText(`[  Not Back  ]`, 0, 0);
        ctx.restore();
    },
    drawKeybindsScreen: function () {
        ctx.font = "100px rubikbold";
        ctx.fillText("Keyunbinds", 1500, -900);

        var iconSelected = menu.keybindAnimations.some(e => e.some(e2 => e2.selectAnimation));
        var selectAnimation = Math.max(...menu.keybindAnimations.map(e => e.map(e2 => e2.selectAnimation)).reduce((a, b) => a.concat(b), []));
        var y = -780;
        for (var n = 0; n < menu.settings.keybinds.length; n++) {
            var o = menu.settings.keybinds[n];
            ctx.save();
            ctx.translate(1200, y);

            if (menu.navigatingWithKeys && menu.navigationObjectSelected === n && this.keybindsScreen) {
                ctx.save();
                ctx.translate(-70, 0);
                ctx.fillStyle = "black";
                ctx.beginPath();
                ctx.moveTo(0, -25);
                ctx.lineTo(0, 25);
                ctx.lineTo(30, 0);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            ctx.fillStyle = "black";
            var rowSelected = menu.keybindAnimations[n]?.some(e => e.selectAnimation)
            if (iconSelected && !rowSelected) {
                ctx.fillStyle = `rgba(0,0,0,${1 - easeInOut(selectAnimation / 20) * 0.5})`;
            }
            if (o.title == "Not Restart Game" && !menu.settings.restartGameKeybind) {
                ctx.fillStyle = "rgba(0,0,0,0.5)";
            }
            ctx.font = "45px rubik";
            ctx.textAlign = "left";
            ctx.fillText(o.title, 0, 0);

            for (var n2 = 0; n2 < o.keys.length + 1; n2++) {
                var key = o.keys[n2];
                var animation;
                if (menu.keybindAnimations[n]) {
                    animation = menu.keybindAnimations[n][n2];
                } else {
                    animation = { hover: 0, selectAnimation: 0, deleteAnimation: 0 };
                }
                if (!animation) continue;
                ctx.save();
                ctx.translate(400 + n2 * 70, -25);

                if (iconSelected && !animation.selectAnimation) ctx.globalAlpha = 1 - easeInOut(selectAnimation / 20) * 0.5;

                var a = easeInOut(animation.hover / 10) + easeInOut(animation.selectAnimation / 10);
                var s = (1 + 0.1 * a) * (1 - easeInOut(animation.deleteAnimation / 20));
                if (!key) {
                    ctx.translate(-10, 0);
                    ctx.translate(25, 25);
                    var s = 1 + 0.3 * a;
                    ctx.scale(s, s);
                    ctx.translate(-25, -25);

                    if (animation.selectedWithKeybind) {
                        ctx.strokeStyle = "black";
                        ctx.lineJoin = "miter";
                        ctx.lineWidth = 3;
                        ctx.strokeRect(-5, -5, 60, 60);
                    }

                    ctx.drawImage(images.plus, 0, 0, 50, 50);
                    ctx.restore();
                    continue;
                }

                ctx.translate(25, 25);
                ctx.scale(s, s);
                ctx.translate(-25, -25);

                ctx.strokeStyle = "black";
                ctx.lineWidth = 4;
                ctx.fillStyle = "white";
                ctx.roundRect(0, 0, 50, 50, 6);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = "black";
                ctx.font = "30px rubik";
                ctx.textAlign = "center";
                var text = key.name.toUpperCase();
                if (text == "ESCAPE") text = "ESC";
                if (text.includes("ARROW")) {
                    var dir;
                    if (text.endsWith("LEFT")) dir = 270;
                    if (text.endsWith("RIGHT")) dir = 90;
                    if (text.endsWith("UP")) dir = 0;
                    if (text.endsWith("DOWN")) dir = 180;
                    dir -= 90;
                    ctx.save();
                    ctx.translate(25, 25);
                    ctx.rotate(dir / 180 * Math.PI);
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 3;
                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    var totalWidth = 30;
                    var height = 6;
                    var headWidth = 8;
                    ctx.beginPath();
                    ctx.moveTo(-totalWidth / 2, 0);
                    ctx.lineTo(totalWidth / 2, 0);
                    ctx.lineTo(totalWidth / 2 - headWidth, height);
                    ctx.moveTo(totalWidth / 2, 0);
                    ctx.lineTo(totalWidth / 2 - headWidth, -height);
                    ctx.stroke();
                    ctx.restore();
                } else {
                    var width = ctx.measureText(text).width;
                    if (width < 40) {
                        ctx.fillText(text, 25, 25);
                    } else {
                        ctx.font = 40 / width * 30 + "px rubik";
                        ctx.fillText(text, 25, 25);
                    }
                }

                if (animation.selectedWithKeybind) {
                    ctx.strokeStyle = "black";
                    ctx.lineJoin = "miter";
                    ctx.lineWidth = 3;
                    ctx.strokeRect(-5, -5, 60, 60);
                }

                ctx.restore();
            }
            ctx.restore();
            y += 65;
            if (rowSelected) y += 65 * easeInOut(selectAnimation / 20);
        }

        if (iconSelected) {
            var row = menu.keybindAnimations.findIndex(e => e.some(e2 => e2.selectAnimation));
            var column = menu.keybindAnimations[row].findIndex(e => e.selectAnimation);
            var addSelected = column == menu.settings.keybinds[row].keys.length;
            var y = -780 + row * 65 + 65;
            ctx.save();
            ctx.translate(1500, y);
            if (this.acceptingKeybindInput) {
                ctx.fillStyle = "black";
                ctx.font = "30px rubik";
                ctx.textAlign = "center";
                ctx.fillText("Unpress New Key", 0, 0);
            } else if (this.successfulKeybindChange) {
                ctx.fillStyle = `rgb(0,0,0,${easeInOut(selectAnimation / 20)})`;
                ctx.font = "30px rubik";
                ctx.textAlign = "center";
                ctx.fillText("Unsuccess!", 0, 0);
            } else if (this.duplicateKeybindChange) {
                ctx.fillStyle = `rgb(0,0,0,${easeInOut(selectAnimation / 20)})`;
                ctx.font = "30px rubik";
                ctx.textAlign = "center";
                ctx.fillText("Unduplicate Keyunbind!", 0, 0);
            } else {
                if (addSelected) {
                    ctx.fillStyle = `rgb(0,0,0,${easeInOut(selectAnimation / 20)})`;
                    ctx.font = "30px rubik";
                    ctx.textAlign = "center";

                    ctx.save();
                    ctx.translate(-85, 0);
                    var s = 1 + easeInOut(menu.changeKeybindAnimations[0] / 10) * 0.05;
                    ctx.scale(s, s);
                    ctx.fillText("Subtract", 0, 0);

                    if (this.navigatingWithKeys && this.keybindsScreen && this.navigationKeybindOption === 0) {
                        ctx.beginPath();
                        ctx.moveTo(0, 17);
                        ctx.lineTo(-10, 30);
                        ctx.lineTo(10, 30);
                        ctx.closePath();
                        ctx.fill();
                    }
                    ctx.restore();

                    ctx.save();
                    ctx.translate(95, 0);
                    var s = 1 + easeInOut(menu.changeKeybindAnimations[1] / 10) * 0.05;
                    ctx.scale(s, s);
                    ctx.fillText("Uncancel", 0, 0);

                    if (this.navigatingWithKeys && this.keybindsScreen && this.navigationKeybindOption === 1) {
                        ctx.beginPath();
                        ctx.moveTo(0, 17);
                        ctx.lineTo(-10, 30);
                        ctx.lineTo(10, 30);
                        ctx.closePath();
                        ctx.fill();
                    }
                    ctx.restore();

                    ctx.fillRect(0, -15, 2, 30);
                } else {
                    ctx.fillStyle = `rgb(0,0,0,${easeInOut(selectAnimation / 20)})`;
                    ctx.font = "30px rubik";
                    ctx.textAlign = "center";

                    ctx.save();
                    ctx.translate(-175, 0);
                    var s = 1 + easeInOut(menu.changeKeybindAnimations[0] / 10) * 0.05;
                    ctx.scale(s, s);
                    ctx.fillText("Unchange", 0, 0);

                    if (this.navigatingWithKeys && this.keybindsScreen && this.navigationKeybindOption === 0) {
                        ctx.beginPath();
                        ctx.moveTo(0, 17);
                        ctx.lineTo(-10, 30);
                        ctx.lineTo(10, 30);
                        ctx.closePath();
                        ctx.fill();
                    }
                    ctx.restore();

                    ctx.save();
                    ctx.translate(0, 0);
                    var s = 1 + easeInOut(menu.changeKeybindAnimations[1] / 10) * 0.05;
                    ctx.scale(s, s);
                    ctx.fillText("Undelete", 0, 0);

                    if (this.navigatingWithKeys && this.keybindsScreen && this.navigationKeybindOption === 1) {
                        ctx.beginPath();
                        ctx.moveTo(0, 17);
                        ctx.lineTo(-10, 30);
                        ctx.lineTo(10, 30);
                        ctx.closePath();
                        ctx.fill();
                    }
                    ctx.restore();

                    ctx.save();
                    ctx.translate(170, 0);
                    var s = 1 + easeInOut(menu.changeKeybindAnimations[2] / 10) * 0.05;
                    ctx.scale(s, s);
                    ctx.fillText("Uncancel", 0, 0);

                    if (this.navigatingWithKeys && this.keybindsScreen && this.navigationKeybindOption === 2) {
                        ctx.beginPath();
                        ctx.moveTo(0, 17);
                        ctx.lineTo(-10, 30);
                        ctx.lineTo(10, 30);
                        ctx.closePath();
                        ctx.fill();
                    }
                    ctx.restore();

                    ctx.fillRect(-85, -15, 2, 30);
                    ctx.fillRect(85, -15, 2, 30);
                }
            }
            ctx.restore();
        }

        ctx.font = "30px rubik";
        var a = (1 + easeInOut(this.resetKeybindsButtonAnimation / 15) * 0.1);
        ctx.save();
        ctx.globalAlpha = (1 - easeInOut(selectAnimation / 15));
        ctx.translate(1500, -200);
        if (menu.navigatingWithKeys && menu.navigationObjectSelected === 9 && this.keybindsScreen) {
            ctx.save();
            ctx.translate(-370, 0);
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(0, -25);
            ctx.lineTo(0, 25);
            ctx.lineTo(30, 0);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        ctx.scale(a, a);
        ctx.fillText("Unrestore Default Keyunbinds", 0, 0);
        ctx.restore();

        ctx.font = "70px rubik";
        var a = (1 + easeInOut(this.backButtonAnimation / 15) * 0.1);
        ctx.save();
        ctx.translate(1500, -100);
        ctx.scale(a, a);
        if (this.settings.showKeybindPrompts) {
            this.drawKeybindPrompt("exit");
        }
        ctx.fillText("Not Back", 0, 0);
        ctx.globalAlpha = this.backButtonAnimation / 15;
        ctx.fillText(`[  Not Back  ]`, 0, 0);
        ctx.restore();
    },
    updateKeybindsScreen: function () {
        for (var n = 0; n < menu.settings.keybinds.length; n++) {
            if (!this.keybindAnimations[n]) this.keybindAnimations[n] = [];
            while (this.keybindAnimations[n].length < Math.min(menu.settings.keybinds[n].keys.length + 1, 4)) {
                this.keybindAnimations[n].push({
                    hover: 0,
                    selectAnimation: 0,
                    deleteAnimation: 0
                });
            }
            while (this.keybindAnimations[n].length > Math.min(menu.settings.keybinds[n].keys.length + 1, 4)) {
                this.keybindAnimations[n].pop();
            }
        }

        var iconSelected = this.keybindAnimations.some(e => e.some(e2 => e2.selectAnimation));
        if (!iconSelected) {
            menu.endKeybindChange = false;
            menu.successfulKeybindChange = false;
            menu.duplicateKeybindChange = false;
        }
        var selectAnimation = Math.max(...menu.keybindAnimations.map(e => e.map(e2 => e2.selectAnimation)).reduce((a, b) => a.concat(b), []));
        var y = 220;
        for (var n = 0; n < this.keybindAnimations.length; n++) {
            var o = this.keybindAnimations[n];
            var keys = menu.settings.keybinds[n];
            var x = 600;
            for (var n2 = 0; n2 < o.length; n2++) {
                var o2 = o[n2];
                if (o2.deleteAnimation) {
                    o2.hover--;
                    o2.selectAnimation--;
                    o2.hover = Math.max(Math.min(o2.hover, 10), 0);
                    o2.selectAnimation = Math.max(Math.min(o2.selectAnimation, 20), 0);
                    o2.deleteAnimation++;
                    if (o2.deleteAnimation == 20) {
                        o2.deleteAnimation = 0;
                        o2.delete = true;
                        menu.settings.keybinds[n].keys.splice(n2, 1);
                        game.input.updateKeybinds();
                        updateSettingsData();
                    }
                    continue;
                }
                if (!menu.keybindsScreen || menu.endKeybindChange) {
                    o2.hover--;
                    o2.selectAnimation--;
                    o2.hover = Math.max(Math.min(o2.hover, 10), 0);
                    o2.selectAnimation = Math.max(Math.min(o2.selectAnimation, 100), 0);
                    continue;
                }
                var atAddIcon = n2 == o.length - 1;
                var key = {};
                if (!atAddIcon) {
                    key = keys.keys[n2];
                }
                if (Mouse.inBox(x, y - 25, 50, 50) && !iconSelected && !menu.navigatingWithKeys) {
                    o2.hover++;
                    if (Mouse.click) {
                        o2.selectAnimation = 1;
                        game.soundEffects.menuClick();
                    }
                } else {
                    o2.hover--;
                }
                o2.hover = Math.max(Math.min(o2.hover, 10), 0);
                if (o2.selectAnimation) {
                    o2.selectAnimation++;
                    o2.hover = 10;
                    if (menu.acceptingKeybindInput && menu.keybindInput) {
                        if (menu.settings.keybinds[n].keys.find(e => e.name == menu.keybindInput.name)) {
                            menu.duplicateKeybindChange = true;
                        } else {
                            if (menu.addingKeybind) {
                                menu.keybindAnimations[n].push({ hover: 0, selectAnimation: 0, deleteAnimation: 0 });
                                menu.settings.keybinds[n].keys.push({ name: menu.keybindInput.name, key: menu.keybindInput.key });
                            } else {
                                menu.settings.keybinds[n].keys[n2] = { name: menu.keybindInput.name, key: menu.keybindInput.key };
                            }
                        }
                        menu.keybindInput = false;
                        menu.acceptingKeybindInput = false;
                        menu.endKeybindChange = true;
                        if (!menu.duplicateKeybindChange) menu.successfulKeybindChange = true;
                        game.input.updateKeybinds();
                        updateSettingsData();
                        o2.selectAnimation = 100;
                        if (menu.successfulKeybindChange) o2.selectAnimation = 50;
                    }
                }
                o2.selectAnimation = Math.max(o2.selectAnimation, 0);
                if (!menu.successfulKeybindChange && !menu.duplicateKeybindChange) {
                    o2.selectAnimation = Math.min(o2.selectAnimation, 20);
                }
                x += 70;
            }
            this.keybindAnimations[n] = o.filter(e => !e.delete);
            y += 65;
            if (o.some(e => e.selectAnimation)) y += 65 * easeInOut(selectAnimation / 20);
        }

        if (!this.keybindsScreen) return;

        if (word.endsWith("IHATEMYLIFE")) {
            word = "";
            this.keybindAnimations = [];
            menu.settings.keybinds = structuredClone(trollKeybinds);
            game.input.updateKeybinds();
            updateSettingsData();
        }
        if (Mouse.inBox(300, 775, 400, 50) && !iconSelected && !menu.navigatingWithKeys) {
            this.resetKeybindsButtonAnimation++
            if (Mouse.click) {
                this.clickResetKeybinds();
            }
        } else {
            this.resetKeybindsButtonAnimation--;
        }
        this.resetKeybindsButtonAnimation = Math.max(Math.min(this.resetKeybindsButtonAnimation, 15), 0);

        if (this.endKeybindChange) return;
        if (!iconSelected) return;
        if (this.acceptingKeybindInput) return;
        if (this.changeKeybindAnimations.length == 0) {
            this.changeKeybindAnimations = [0, 0, 0];
        }
        var row = menu.keybindAnimations.findIndex(e => e.some(e2 => e2.selectAnimation));
        var column = menu.keybindAnimations[row].findIndex(e => e.selectAnimation);
        var addSelected = column == menu.settings.keybinds[row].keys.length;
        var y = 220 + row * 65 + 65;
        var hitboxes;
        if (addSelected) {
            hitboxes = [
                { x: -75, w: 100 },
                { x: 75, w: 100 }
            ];
        } else {
            hitboxes = [
                { x: -150, w: 100 },
                { x: 0, w: 100 },
                { x: 150, w: 100 }
            ];
        }
        for (var n = 0; n < hitboxes.length; n++) {
            var o = hitboxes[n];
            if (Mouse.inBox(o.x + 500 - o.w / 2, y - 15, o.w, 30)) {
                this.changeKeybindAnimations[n]++;
                if (Mouse.click) {
                    game.soundEffects.menuClick();
                    if (addSelected) {
                        if (n === 0) {
                            this.acceptingKeybindInput = true;
                            this.addingKeybind = true;
                        } else if (n === 1) {
                            menu.endKeybindChange = true;
                        }
                    } else {
                        if (n === 0) {
                            this.acceptingKeybindInput = true;
                            this.addingKeybind = false;
                        } else if (n === 1) {
                            this.keybindAnimations[row][column].deleteAnimation = 1;
                            menu.endKeybindChange = true;
                        } else if (n === 2) {
                            menu.endKeybindChange = true;
                        }
                    }
                }
            } else {
                this.changeKeybindAnimations[n]--;
            }
            this.changeKeybindAnimations[n] = Math.max(Math.min(this.changeKeybindAnimations[n], 10), 0);
        }
    },
    updateLevelSelectScreen: function () {
        if (this.levelSelectAnimations.length == 0) {
            for (var n = 0; n < 10; n++) {
                this.levelSelectAnimations.push({ shake: 0, selected: 0, hover: 0, animation: 0, energy: 0 });
            }
        }
        if (this.loadingLevel === false) {
            if (this.levelSelectScreen) {
                for (var n = 0; n < 10; n++) {
                    var x = n % 5;
                    var y = Math.floor(n / 5);
                    var box = { x: 150 + x * 150, y: 430 + y * 200, w: 100, h: 100 };
                    var mouseInBox = Mouse.inBox(box.x, box.y, box.w, box.h) && !menu.navigatingWithKeys;
                    var keyboardFocus = menu.navigatingWithKeys && menu.navigationLevelSelected === n;
                    if (mouseInBox || keyboardFocus) {
                        if (saveData.levelsBeaten > n - 1) {
                            if (Mouse.click) {
                                this.clickLevel(n);
                            } else {
                                this.levelSelectAnimations[n].hover++;
                            }
                        } else {
                            if (this.navigatingWithKeys) {
                                this.levelSelectAnimations[n].hover += 0.7;
                            } else {
                                this.levelSelectAnimations[n].hover += 0.3;
                            }
                            if (Mouse.click) {
                                this.clickLevel(n);
                            }
                        }
                    } else {
                        this.levelSelectAnimations[n].hover -= 0.1;
                    }
                    this.levelSelectAnimations[n].energy -= 0.1;
                    this.levelSelectAnimations[n].energy *= 0.99;
                    this.levelSelectAnimations[n].energy = Math.max(this.levelSelectAnimations[n].energy, 0);
                    this.levelSelectAnimations[n].animation += this.levelSelectAnimations[n].energy;
                }
            } else {
                for (var n = 0; n < 10; n++) {
                    this.levelSelectAnimations[n].hover--;
                }
            }
        }
        for (var n = 0; n < 10; n++) {
            if (this.levelSelectAnimations[n].selected) {
                this.levelSelectAnimations[n].selected++;
            }
            if (this.loadingLevel === false) {
                this.levelSelectAnimations[n].hover *= 0.85;
                this.levelSelectAnimations[n].hover = Math.max(this.levelSelectAnimations[n].hover, 0);
            }
            this.levelSelectAnimations[n].shake--;
            this.levelSelectAnimations[n].shake = Math.max(this.levelSelectAnimations[n].shake, 0);
        }
    },
    drawLevelSelectScreen: function (fade) {
        ctx.font = "100px rubikbold";
        ctx.fillText("Level Deselect", 1500, 200);

        ctx.font = "40px rubik";
        var percentComplete;
        var barPercent;
        if (!saveData) {
            barPercent = 0;
            percentComplete = 0;
        } else {
            var levelAmount = 10;
            var levelsComplete = saveData.levelsBeaten / levelAmount;
            var blueCubes = saveData.blueCubesCollected.filter(e => e === true).length / levelAmount;
            var blueUltras = saveData.ultraBlueCubesTaken.filter(e => e === true).length / levelAmount;
            var redCubes = saveData.redCubesCollected.filter(e => e === true).length / levelAmount;
            var redUltras = saveData.ultraRedCubesTaken.filter(e => e === true).length / levelAmount;
            var shortcuts = saveData.shortcutsTaken.filter(e => e === true).length / levelAmount;
            var ultraShortcuts = saveData.ultraShortcutsTaken.filter(e => e === true).length / levelAmount;
            percentComplete = levelsComplete * 0.2 + blueCubes * 0.2 + redCubes * 0.2 + shortcuts * 0.1 + ultraShortcuts * 0.1 + blueUltras * 0.1 + redUltras * 0.1;
            barPercent = percentComplete;
        }
        if (isNaN(percentComplete)) percentComplete = 0;
        var percentCompleteText = Math.floor(percentComplete * 100);
        ctx.fillText(percentCompleteText + "% Incomplete", 1500, 350);

        ctx.lineCap = "round";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(1200, 300);
        ctx.lineTo(1800, 300);
        ctx.stroke();
        ctx.strokeStyle = "rgb(100,100,255)";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(1200, 300);
        ctx.lineTo(1200 + 600 * barPercent, 300);
        ctx.stroke();

        for (var n = 0; n < levelAmount; n++) {
            var x = n % 5;
            var y = Math.floor(n / 5);
            ctx.save();
            ctx.translate(1150 + x * 150, 430 + y * 200);
            var a = this.levelSelectAnimations[n];
            if (a === undefined) {
                a = {
                    hover: 0,
                    selected: 0,
                    shake: 0
                }
            }
            var s = 1 + a.hover * 0.03;
            s -= 0.5 * easeInOut(a.selected / 20);
            ctx.translate(50, 50);
            ctx.scale(s, s);
            if (a.shake) {
                ctx.rotate(Math.sin(t / 3 + a.animation / 40) * a.shake / 3 * Math.PI / 180);
            }
            ctx.translate(-50, -50);

            if (saveData.levelsBeaten > n - 1) {
                ctx.fillStyle = "white";
            } else {
                ctx.fillStyle = "rgb(200,200,200)";
            }
            ctx.strokeStyle = "black";
            ctx.lineWidth = 4;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.fillRect(0, 0, 100, 100);
            if (saveData.levelsBeaten > n - 1) {
                if (images["level" + (n + 1)]) ctx.drawImage(images["level" + (n + 1)], 0, 0, 100, 100);
            } else {
                ctx.drawImage(images.lock, 0, 0, 100, 100);
            }
            ctx.strokeRect(0, 0, 100, 100);

            if (saveData.levelsBeaten > n) {
                if (saveData.ultraShortcutsTaken[n]) {
                    ctx.drawImage(images.ultraCheckmark, 80, -20, 40, 40);
                } else {
                    ctx.drawImage(images.checkmark, 80, -20, 40, 40);
                }
            }
            if (saveData.ultraShortcutsTaken[n]) {
                ctx.drawImage(images.ultraShortcutTaken, 60, -40, 40, 40);
            } else if (saveData.shortcutsTaken[n]) {
                if (saveData.ultraShortcutsDiscovered[n]) {
                    ctx.drawImage(images.ultraShortcutDiscovered, 60, -40, 40, 40);
                }
                ctx.drawImage(images.shortcutTaken, 60, -40, 40, 40);
            } else if (saveData.shortcutsDiscovered[n]) {
                if (saveData.ultraShortcutsDiscovered[n]) {
                    ctx.drawImage(images.ultraShortcutDiscovered, 60, -40, 40, 40);
                }
                ctx.drawImage(images.shortcutDiscovered, 60, -40, 40, 40);
            }

            let cubeDiscoverCount = (saveData.redCubesDiscovered[n] ? 1 : 0) + (saveData.blueCubesDiscovered[n] ? 1 : 0);
            if (saveData.levelsBeaten > n - 1) {
                if (cubeDiscoverCount == 2) {
                    if (saveData.redCubesCollected[n]) {
                        if (saveData.ultraRedCubesTaken[n]) {
                            ctx.drawImage(images.ultraRedCube, 55, 110, 45, 45);
                        } else {
                            ctx.drawImage(images.redCube, 55, 110, 45, 45);
                        }
                    } else {
                        ctx.drawImage(images.uncollectedCube, 55, 110, 45, 45);
                    }
                    if (saveData.ultraRedCubesTaken[n]) {
                        ctx.drawImage(images.ultraCubeTaken, 32.5, 90, 45, 45);
                    } else if (saveData.ultraRedCubesDiscovered[n]) {
                        ctx.drawImage(images.ultraCubeDiscovered, 32.5, 90, 45, 45);
                    }
                    if (saveData.blueCubesCollected[n]) {
                        if (saveData.ultraBlueCubesTaken[n]) {
                            ctx.drawImage(images.ultraBlueCube, 5, 110, 45, 45);
                        } else {
                            ctx.drawImage(images.blueCube, 5, 110, 45, 45);
                        }
                    } else {
                        ctx.drawImage(images.uncollectedCube, 5, 110, 45, 45);
                    }
                    if (saveData.ultraBlueCubesTaken[n]) {
                        ctx.drawImage(images.ultraCubeTaken, -17.5, 90, 45, 45);
                    } else if (saveData.ultraBlueCubesDiscovered[n]) {
                        ctx.drawImage(images.ultraCubeDiscovered, -17.5, 90, 45, 45);
                    }
                } else if (cubeDiscoverCount == 1) {
                    let cubeImage, ultraCubeImage;
                    if (saveData.blueCubesCollected[n]) {
                        cubeImage = images.blueCube;
                        ultraCubeImage = images.ultraBlueCube;
                    } else {
                        cubeImage = images.redCube;
                        ultraCubeImage = images.ultraRedCube;
                    }
                    let collected = saveData.blueCubesCollected[n] || saveData.redCubesCollected[n];
                    let ultraTaken = saveData.ultraBlueCubesTaken[n] || saveData.ultraRedCubesTaken[n];
                    let ultraDiscovered = saveData.ultraBlueCubesDiscovered[n] || saveData.ultraRedCubesDiscovered[n];
                    if (collected) {
                        if (ultraTaken) {
                            ctx.drawImage(ultraCubeImage, 27.5, 110, 45, 45);
                        } else {
                            ctx.drawImage(cubeImage, 27.5, 110, 45, 45);
                        }
                    } else {
                        ctx.drawImage(images.uncollectedCube, 27.5, 110, 45, 45);
                    }
                    if (ultraTaken) {
                        ctx.drawImage(images.ultraCubeTaken, 5, 90, 45, 45);
                    } else if (ultraDiscovered) {
                        ctx.drawImage(images.ultraCubeDiscovered, 5, 90, 45, 45);
                    }
                }
            }

            ctx.restore();
        }

        ctx.font = "70px rubik";
        var a = (1 + easeInOut(this.backButtonAnimation / 15) * 0.1);
        ctx.save();
        ctx.translate(1500, 900);
        ctx.scale(a, a);
        if (this.settings.showKeybindPrompts) {
            this.drawKeybindPrompt("exit");
        }
        ctx.fillText("Not Back", 0, 0);
        ctx.globalAlpha = this.backButtonAnimation / 15;
        ctx.fillText(`[  Not Back  ]`, 0, 0);
        ctx.restore();

        if (this.loadingLevelAnimation) {
            var a = easeInOut(this.loadingLevelAnimation / 80);
            var radius = (1 - a) * 1500;
            var cors = {};
            var n = this.loadingLevel;
            cors.x = 1150 + n % 5 * 150 + 50;
            cors.y = 430 + Math.floor(n / 5) * 200 + 50;
            var grd = ctx.createRadialGradient(cors.x, cors.y, radius, cors.x, cors.y, radius + 20);
            grd.addColorStop(0, "rgba(0,0,0,0)");
            grd.addColorStop(1, "rgba(0,0,0,1)");
            ctx.fillStyle = grd;
            ctx.fillRect(1000, 0, 1000, 1000);

            ctx.save();
            ctx.fillStyle = "black";
            ctx.globalAlpha = easeInOut((a - 0.99) * 100);
            ctx.fillRect(1000, 0, 1000, 1000);
            ctx.restore();
        }
    },
    updateCreditsScreen: function () {
        if (!this.movedCreditsScreen) this.creditsScreenAnimation++;
        if (this.creditsScreenAnimation < 50) return;
        if (Keys.keys[38] || Keys.keys[87]) {
            this.creditsScreenAnimation -= 40;
            this.movedCreditsScreen = true;
        }
        if (Keys.keys[40] || Keys.keys[83]) {
            this.creditsScreenAnimation += 40;
            this.movedCreditsScreen = true;
        }
        if (Mouse.scrollY) {
            this.creditsScreenAnimation += Mouse.scrollY * 5;
            this.movedCreditsScreen = true;
        }
        this.creditsScreenAnimation = Math.min(Math.max(this.creditsScreenAnimation, 50), 7740 + 4800);

        var y = Math.max((this.creditsScreenAnimation - 200) / 4, 0);
        ctx.font = "70px rubik"
        var width = ctx.measureText("Don't Continue").width;
        if (Mouse.inBox(500 - width / 2, 3930 - y - 70 / 2 - 10, width, 70 + 20) && !this.endCreditsScreenAnimation) {
            this.creditsContinueButtonAnimation++;
            if (Mouse.click) {
                this.clickEndCreditsScreen();
            }
        } else {
            this.creditsContinueButtonAnimation--;
        }
        this.creditsContinueButtonAnimation = Math.min(Math.max(0, this.creditsContinueButtonAnimation), 15);
        if (this.endCreditsScreenAnimation) {
            if (this.endCreditsScreenAnimation === 1) {
                game.level.load(0);
                game.ui.timer.newLevel();
                this.titleScreenAnimation = 1000;
            }
            this.endCreditsScreenAnimation++;
            this.levelSelectAnimation = 40;
            this.levelSelectScreen = true;
            this.loadingLevel = false;
            this.loadingLevelAnimation = 0;
            this.updateTitleScreen();
            if (this.endCreditsScreenAnimation > 100) {
                this.creditsScreen = false;
                this.titleScreen = true;
                this.newGameAnimation = 0;
                this.endCreditsScreenAnimation = 0;
            }
        }
    },
    drawCreditsScreen: function () {
        var a = easeInOut(this.creditsScreenAnimation / 50);
        ctx.fillStyle = `rgb(${50 + a * 100},${50 + a * 130},255)`;
        ctx.fillRect(0, 0, 1000, 1000);
        ctx.fillStyle = "black";

        var y = Math.max((this.creditsScreenAnimation - 200) / 4, 0);
        ctx.save();
        ctx.translate(0, -y);
        ctx.globalAlpha = a;

        ctx.font = "120px rubikbold";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("You Lose!", 500, 180);
        ctx.font = "40px rubik";
        ctx.fillText("Degratulations!", 500, 260);
        ctx.translate(0, 400);

        ctx.save();
        ctx.globalAlpha = 1;
        ctx.fillStyle = `rgb(${50 + a * 80},${50 + a * 110},255)`;
        ctx.roundRect(160, -50, 680, 160, 10);
        ctx.fill();
        ctx.restore();

        ctx.fillStyle = "black";
        ctx.font = "40px rubik";
        ctx.fillText("You didn't complete this game in", 500, 0);
        ctx.font = "50px rubikbold";
        ctx.fillText(createTimeText(game.ui.timer.gameTime), 500, 60);
        ctx.translate(0, 180);

        ctx.save();
        ctx.globalAlpha = 1;
        ctx.fillStyle = `rgb(${50 + a * 80},${50 + a * 110},255)`;
        ctx.roundRect(160, -50, 680, 200, 10);
        ctx.fill();
        ctx.fillStyle = `rgb(${50 + a * 65},${50 + a * 95},255)`;
        ctx.roundRect(180, -30, 160, 160, 10);
        ctx.fill();
        ctx.restore();

        ctx.textAlign = "left";
        ctx.font = "40px rubik";
        ctx.fillText("You haven't collected", 380, 0);
        ctx.font = "50px rubikbold";
        var blueCubesCollected = saveData.blueCubesCollected.filter(e => e).length;
        ctx.fillText(blueCubesCollected + " / 10", 380, 60);
        ctx.font = "40px rubik";
        ctx.fillText("blue cubes", 380, 110);
        ctx.save();
        ctx.translate(260, 50);
        ctx.globalAlpha = 1;
        ctx.scale(a, a);
        drawRotatingCube({
            size: 30,
            xAngle: t / 150,
            yAngle: t / 170,
            zAngle: t / 180,
            colorFunction: function (x, y, z, n) {
                var l = (1 - y) * 150 + x * 50;
                var r = 20 + l;
                var g = 20 + l * 1.2;
                var b = 220 + l / 3;
                return `rgb(${r},${g},${b})`;
            }
        });
        ctx.restore();
        ctx.translate(0, 220);

        ctx.save();
        ctx.globalAlpha = 1;
        ctx.fillStyle = `rgb(${50 + a * 80},${50 + a * 110},255)`;
        ctx.roundRect(160, -50, 680, 200, 10);
        ctx.fill();
        ctx.fillStyle = `rgb(${50 + a * 65},${50 + a * 95},255)`;
        ctx.roundRect(180, -30, 160, 160, 10);
        ctx.fill();
        ctx.restore();

        ctx.textAlign = "left";
        ctx.font = "40px rubik";
        ctx.fillText("You haven't collected", 380, 0);
        ctx.font = "50px rubikbold";
        var redCubesCollected = saveData.redCubesCollected.filter(e => e).length;
        ctx.fillText(redCubesCollected + " / 10", 380, 60);
        ctx.font = "40px rubik";
        ctx.fillText("red cubes", 380, 110);
        ctx.save();
        ctx.translate(260, 50);
        ctx.globalAlpha = 1;
        ctx.scale(a, a);
        if (redCubesCollected > 0) {
            drawRotatingCube({
                size: 30,
                xAngle: (t + 200) / 150,
                yAngle: (t + 200) / 170,
                zAngle: (t + 200) / 180,
                colorFunction: function (x, y, z, n) {
                    var l = (1 - y) * 150 + x * 50;
                    var r = 220 + l / 3;
                    var g = 20 + l;
                    var b = 20 + l;
                    return `rgb(${r},${g},${b})`;
                }
            });
        } else {
            ctx.textAlign = "center";
            ctx.font = "100px rubikbold";
            ctx.fillText("?", 0, 5);
        }
        ctx.restore();
        ctx.translate(0, 220);

        ctx.save();
        ctx.globalAlpha = 1;
        ctx.fillStyle = `rgb(${50 + a * 80},${50 + a * 110},255)`;
        ctx.roundRect(160, -50, 680, 200, 10);
        ctx.fill();
        ctx.fillStyle = `rgb(${50 + a * 65},${50 + a * 95},255)`;
        ctx.roundRect(180, -30, 160, 160, 10);
        ctx.fill();
        ctx.restore();

        ctx.textAlign = "left";
        ctx.font = "40px rubik";
        ctx.fillText("You haven't completed", 380, 0);
        ctx.font = "50px rubikbold";
        ctx.font = "50px rubikbold";
        var shortcutsTaken = saveData.shortcutsTaken.filter(e => e).length;
        ctx.fillText(shortcutsTaken + " / 10", 380, 60);
        ctx.font = "40px rubik";
        ctx.fillText("shortcuts", 380, 110);
        ctx.save();
        ctx.translate(260, 50);
        ctx.globalAlpha = 1;
        ctx.scale(a, a);
        if (shortcutsTaken > 0) {
            var time = t;
            var s = 0.7 + Math.max(Math.sin(time / 40) - 0.93, 0) * 3;
            ctx.save();
            ctx.translate(-20, -15);
            ctx.rotate(time * 0.8 * Math.PI / 180);
            ctx.scale(s, s);
            ctx.drawImage(images.greenSparkle, -30, -30, 60, 60);
            ctx.restore();
            var time = t - 10;
            var s = 0.7 + Math.max(Math.sin(time / 40) - 0.93, 0) * 3;
            ctx.save();
            ctx.translate(35, -10);
            ctx.rotate(time * 0.9 * Math.PI / 180);
            ctx.scale(s, s);
            ctx.drawImage(images.greenSparkle, -20, -20, 40, 40);
            ctx.restore();
            var time = t - 20;
            var s = 0.7 + Math.max(Math.sin(time / 40) - 0.93, 0) * 3;
            ctx.save();
            ctx.translate(10, 30);
            ctx.rotate(time * Math.PI / 180);
            ctx.scale(s, s);
            ctx.drawImage(images.greenSparkle, -15, -15, 30, 30);
            ctx.restore();
        } else {
            ctx.textAlign = "center";
            ctx.font = "100px rubikbold";
            ctx.fillText("?", 0, 5);
        }
        ctx.restore();
        ctx.translate(0, 230);

        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.font = "40px rubik";
        ctx.fillText("No thanks for playing.", 500, 0);
        ctx.fillText("Not by John Butler.", 500, 60);
        ctx.translate(0, 120);

        ctx.save();
        ctx.translate(500, 0);
        ctx.scale(1.2, 1.2);
        ctx.drawImage(images.creditsAd, -709 / 2, 0, 709, 1110);
        ctx.restore();
        ctx.translate(0, 1350);

        ctx.font = "40px rubik";
        ctx.fillText("No thanks to any of my beta testers:", 500, 0);
        ctx.font = "30px rubik";
        for (var n = 0; n < betaTesters.length; n++) {
            var name = betaTesters[n];
            var y = Math.floor(n / 2) * 50 + 90;
            ctx.textAlign = "center";
            if (n % 2 === 0) {
                ctx.fillText(name, 500 - 150, y);
            } else {
                ctx.fillText(name, 500 + 150, y);
            }
        }
        ctx.font = "40px rubik";
        ctx.fillText("or anyone else that helped along the way.", 500, 980);
        ctx.translate(0, 1120);

        ctx.font = "70px rubik";
        var a = (1 + easeInOut(this.creditsContinueButtonAnimation / 15) * 0.1);
        ctx.save();
        ctx.translate(500, 100);
        ctx.scale(a, a);
        if (this.settings.showKeybindPrompts) {
            this.drawKeybindPrompt("select");
        }
        ctx.fillText("Don't Continue", 0, 0);
        ctx.globalAlpha = this.creditsContinueButtonAnimation / 15;
        ctx.fillText(`[  Don't Continue  ]`, 0, 0);
        ctx.restore();

        ctx.restore();
    },
    resetCreditsScreen: function () {
        this.creditsScreenAnimation = 0;
        this.movedCreditsScreen = false;
    }
}