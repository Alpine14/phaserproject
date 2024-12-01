import React from 'react';
import dynamic from 'next/dynamic';

// Import the game component with SSR disabled
const GameComponent = dynamic(() => import('../components/Game'), {
    ssr: false
});

const Home: React.FC = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-900">
            <div id="game-container"/>
            <GameComponent/>
        </div>
    );
};

export default Home;