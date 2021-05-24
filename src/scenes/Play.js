class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    

    preload(){
    this.load.image('forest', 'assets/background.png');
    this.load.image('reaperF', 'assets/RPFront.png');
    this.load.image('reaperB', 'assets/RPBack.png');
    this.load.image('reaperL', 'assets/RPLeft.png');
    this.load.image('reaperR', 'assets/RPRight.png');
    this.load.image('lightning', 'assets/lightning.png');
    this.load.image('waterball', 'assets/water.png');
    this.load.image('fire','assets/fire.png');
    this.load.image('zombie', 'assets/zombie.png');

    this.load.image('kylo', 'assets/kylo.png');

    }


    create(){

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        input = this.input;
        mouse = this.input.mousePointer;
        worldBounds = this.physics.world.bounds;
        
        this.currentWeapon = 'waterball';

        this.input.keyboard.on('keydown-E', () => 
        { 
            this.currentWeapon = 'fire';
        });

        this.input.keyboard.on('keydown-Q', () => 
        { 
            this.currentWeapon = 'waterball';
        });
        this.input.keyboard.on('keydown-W', () => 
        { 
            this.currentWeapon = 'lightning';
        });



        //preload the player and background
        this.background = this.add.tileSprite(0, 0, 1150, 1000, 'forest').setOrigin(0, 0);
        this.reaper = new player(this, centerX, centerY, 'reaperF').setOrigin(.5);
        this.emptySprite = this.physics.add.sprite(centerX, centerY,'kylo').setOrigin(.5);


        this.projectileGroup = this.add.group({
           runChildUpdate: true 
        });
    


        this.zombieGroup = this.add.group({
            runChildUpdate: true
        });

        this.time.addEvent({
            delay : 2000,
            callback: () => {
                this.addMonster();
            },
            loop: true
        });
    }

    addMonster(){
        const spawnPoints = [
            [320,0], //top
            [100,100], //test
            [200,200], //test
        ];

        let i = Phaser.Math.Between(0, spawnPoints.length - 1);

        let [x,y] = spawnPoints[i];
        this.zombie = new Zombie(this, x, y, 'zombie');
        this.zombieGroup.add(this.zombie);
    }




    update(){

        let angle = Phaser.Math.Angle.Between(this.emptySprite.x, this.emptySprite.y, input.x, input.y);
        this.emptySprite.setRotation(angle + Math.PI /2);
        

        if(Phaser.Input.Keyboard.JustDown(keySPACE))
        {
            this.projectile = this.physics.add.sprite(centerX, centerY, this.currentWeapon);
            this.projectileGroup.add(this.projectile);
            this.physics.moveTo(this.projectile, input.x, input.y, 500);
        }  
        //this.physics.world.overlap(this.zombie, this.projectileGroup, this.zombieCollide, null, this);
        //this.physics.world.collide(this.zombie, projectile, this.zombieCollide, null, this);

        if(this.physics.world.collide(this.zombieGroup, this.projectileGroup)){
            this.zombieCollide();
        }

    }
    

    zombieCollide(){
       this.zombie.destroy();
       this.projectile.destroy();
       console.log("HELLO FROM ZOMBIE COLLIDE");
    }
}
