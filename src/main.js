let config = {
    type : Phaser.CANVAS,
    width : 1150,
    height : 1000,
    physics : {
        default : 'arcade',
        arcade :{
            debug: true

        }
    },
    scene : [ Menu, Play]
}
var game = new Phaser.Game(config);


let keySPACE, input, mouse;

let centerX = game.config.width/2;
let centerY = game.config.height/2;
var control = false;
var worldBounds;