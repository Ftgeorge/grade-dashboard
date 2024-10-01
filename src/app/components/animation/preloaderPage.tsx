import React from 'react';
import Preloader from './preloader.animation';

const PreloaderPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-105px)] w-full bg-white">
            <Preloader />
        </div>
    );
};

export default PreloaderPage;
