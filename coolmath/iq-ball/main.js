var IQBall = IQBall || {};

//IQBall.game = new Phaser.Game(630, 420, Phaser.AUTO, '');
var gameWidth = 630;
var gameHeight = 420;
IQBall.game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, '');

//IQBall game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, '');
//IQBall.game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'iqballgame');

IQBall.game.state.add('Boot', IQBall.Boot);
IQBall.game.state.add('Preload', IQBall.Preload);
IQBall.game.state.add('GameLaunch', IQBall.GameLaunch);
IQBall.game.state.add('Game', IQBall.Game);
IQBall.game.state.add('LevelComplete', IQBall.LevelComplete);
IQBall.game.state.start('Boot');