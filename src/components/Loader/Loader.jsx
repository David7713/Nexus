// src/components/Loader.js
import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onClick }) => {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLoading(false);
                    setShowButton(true); // Show button after loading
                    return 100;
                }
                return prev + 1; // Increment by 1% every 30ms
            });
        }, 30); // Adjust speed by changing the interval timing

        return () => clearInterval(interval);
    }, []);

    const handleExploreClick = () => {
        const audio = new Audio('path/to/sound.mp3'); // Update with your sound file path
        audio.play();
        onClick(); // Call the onClick function passed as prop
    };

    return (
        <div className="loader">
            {loading ? (
                <p className="loading-text">{progress}%</p>
            ) : (
                showButton && (
                    <button
                        className={`explore-button ${showButton ? 'show' : ''}`}
                        onClick={handleExploreClick}
                    >
                        Explore
                    </button>
                )
            )}
        </div>
    );
};

export default Loader;
