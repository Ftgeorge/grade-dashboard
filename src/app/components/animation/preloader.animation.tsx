import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const letters = ['G', 'r', 'a', 'd', 'e'];
    const [restartAnimation, setRestartAnimation] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setRestartAnimation(prev => !prev); // Toggle between true/false to reset animation
        }, 2000); // Restart every 2 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <h1 className="text-2xl font-normal text-center font-medium">
            {letters.map((letter, index) => (
                <span
                    key={index}
                    style={{
                        display: 'inline-block',
                        opacity: 0,
                        animation: `bounceIn 0.5s forwards ${index * 300}ms`,
                        color: letter === 'G' ? '#1F3A93' : 'inherit',
                    }}
                >
                    {letter}
                </span>
            ))}
        <style jsx>{`
            @keyframes bounceIn {
            0% {
            opacity: 0; /* Start fully transparent */
            transform: translateY(20px); /* Start 20px lower */
            }
            50% {
            opacity: 1; /* Become fully visible */
            transform: translateY(-10px); /* Move up to -10px */
            }
            100% {
            opacity: 1; /* Ensure it's still visible */
            transform: translateY(0); /* Settle back to original position */
            }
        }`}</style>
        </h1>
    );
};

export default Preloader;
