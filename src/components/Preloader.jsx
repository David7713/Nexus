// src/components/Preloader.js
import React, { useState, useEffect } from 'react';
import Loader from './Loader/Loader';
import { useAudio } from '../context/AudioContext';

const Preloader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { setAudio, toggleAudio } = useAudio();

    useEffect(() => {
        const audioFile = new Audio('/nexus.mp3');
        audioFile.loop = true;
        setAudio(audioFile);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [setAudio]);

    const handlePlayAudio = () => {
        toggleAudio();
        setIsLoading(false);
    };

    return isLoading ? <Loader onClick={handlePlayAudio} /> : children;
};

export default Preloader;