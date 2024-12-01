import Phaser from "phaser";
export class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });
    }

    create(): void {
        // Calculate screen center coordinates
        const screenCenterX: number = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY: number = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        // Create title text with proper type annotations
        const titleStyle: Phaser.Types.GameObjects.Text.TextStyle = {
            fontSize: '32px',
            color: '#fff'
        };

        const title: Phaser.GameObjects.Text = this.add.text(
            screenCenterX,
            screenCenterY - 50,
            'Dungeon Crawler',
            titleStyle
        ).setOrigin(0.5);

        // Create start button with proper type annotations
        const buttonStyle: Phaser.Types.GameObjects.Text.TextStyle = {
            fontSize: '24px',
            color: '#fff'
        };

        const startButton: Phaser.GameObjects.Text = this.add.text(
            screenCenterX,
            screenCenterY + 50,
            'Start Game',
            buttonStyle
        )
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.scene.start('GameScene'));
    }
}