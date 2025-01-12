// Loader.jsx
import React, { useEffect, useState, useRef } from 'react';
import './Loader.css';

const Loader = ({ onClick }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          setShowButton(true);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleExploreClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio('path/to/sound.mp3');
    audioRef.current.play();
    onClick();
  };

  return (
    <div className="loader">
      {loading ? (
        <div className="progress-container">
          <div className="spinner-arc"></div>
          <p className="loading-text">{progress}%</p>
        </div>
      ) : (
        showButton && (
          <button
            className={`explore-button ${showButton ? 'show' : ''}`}
            onClick={handleExploreClick}
          >
            Enter with Sound
          </button>
        )
      )}
    </div>
  );
};

export default Loader;