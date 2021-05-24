class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload()
    {
        this.load.image('title_screen', 'assets/title_screen.png')
    }

    create()
    {
        this.title = this.add.tileSprite(0, 0, 1150, 1000, 'title_screen').setOrigin(0, 0);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update()
    {
        if(keySPACE.isDown)
        {
            this.scene.start("playScene");
        }
    }
}