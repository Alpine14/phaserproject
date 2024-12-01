import React, { useEffect } from 'react';
import Phaser from 'phaser';
import { MainMenu } from '@/game/scenes/MainMenu';
import { Game } from '@/game/scenes/Game';

const GameInit: React.FC = () => {
    useEffect(() => {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            parent: 'game-container',
            width: 1280,
            height: 900,
            backgroundColor: '#2d2d2d',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: {
                        y: 0,
                        x: 0
                    },
                    debug: true
                }
            },
            scene: [MainMenu, Game]
        };

        // Initialize the game
        const game = new Phaser.Game(config);

        // Cleanup on unmount
        return () => {
            game.destroy(true);
        };
    }, []);

    return null;
};

export default GameInit;