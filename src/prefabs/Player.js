class player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super (scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

    }

    preload(){
        this.load.image('reaperF', 'assets/RPFront.png');
        this.load.image('reaperB', 'assets/RPBack.png');
        this.load.image('reaperL', 'assets/RPLeft.png');
        this.load.image('reaperR', 'assets/RPRight.png');
    
        }

    update(){
        
    }
}