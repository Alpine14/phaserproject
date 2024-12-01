import Phaser from "phaser";

interface GameState {
    player: Phaser.GameObjects.Rectangle;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
}

export class Game extends Phaser.Scene implements GameState {
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    player: Phaser.GameObjects.Rectangle;
    
    constructor() {
        super({ key: 'Game' });
    }
    
    preload() {
    }
    create() {
        this.player = this.add.rectangle(400, 300, 32, 32, 0xff0000);
        this.physics.add.existing(this.player);
        // @ts-ignore
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.startFollow(this.player);
    }
    update() {
        const speed: number = 200;
        
        const playerBody = this.player.body as Phaser.Physics.Arcade.Body;
        
        playerBody.setVelocity(0);
        
        if (this.cursors.left.isDown) {
            playerBody.setVelocityX(-speed);
        }else if (this.cursors.right.isDown) {
            playerBody.setVelocityX(speed);
        }
        
        if (this.cursors.up.isDown) {
            playerBody.setVelocityY(-speed);
        } else if (this.cursors.down.isDown) {
            playerBody.setVelocityY(speed);
        }
        
        playerBody.velocity.normalize().scale(speed);
    }
}
