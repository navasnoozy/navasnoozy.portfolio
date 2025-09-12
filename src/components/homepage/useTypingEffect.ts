//src/components/homepage/useTypingEffect.ts

import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

interface UseTypingEffectReturn {
  currentText: string;
  currentWordIndex: number;
}

export const useTypingEffect = (
  words: string[], 
  options: UseTypingEffectOptions = {}
): UseTypingEffectReturn => {
  const { speed = 100, deleteSpeed = 50, pauseTime = 1500 } = options;
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          if (currentText.length > 0) {
            setCurrentText(currentWord.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.substring(0, currentText.length + 1));
          } else {
            setIsPaused(true);
          }
        }
      },
      isPaused ? pauseTime : isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, speed, deleteSpeed, pauseTime]);

  return { currentText, currentWordIndex };
};
