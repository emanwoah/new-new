class Zombie extends Phaser.Physics.Arcade.Image{
    constructor(scene, x, y, texture, frame) {
        super (scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.speed = .2;
    }

    update()
    {
        this.y += this.speed;
        if(this.y >= game.config.height){
            this.destroy();
        }
        
    }
}