"use client";

import { useEffect } from "react";

export default function AudioManager() {
  useEffect(() => {
    const handlePlay = (e: Event) => {
      const currentAudio = e.target as HTMLAudioElement;
      const allAudios = document.querySelectorAll('audio');
      
      allAudios.forEach((audio) => {
        if (audio !== currentAudio) {
          audio.pause();
        }
      });
    };

    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach((audio) => {
      audio.addEventListener('play', handlePlay);
    });

    return () => {
      allAudios.forEach((audio) => {
        audio.removeEventListener('play', handlePlay);
      });
    };
  }, []);

  return null;
}
