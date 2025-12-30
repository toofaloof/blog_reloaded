"use client";

import { useState, useRef } from "react";

export default function KurtAudioPlayer() {
  const [isKurtActive, setIsKurtActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const currentTime = audio.currentTime;
    const wasPlaying = !audio.paused;

    setIsKurtActive(!isKurtActive);

    // Wait for React to update the source, then reload and restore state
    setTimeout(() => {
      if (audio) {
        audio.load(); // Force reload of the new source
        audio.currentTime = currentTime;
        if (wasPlaying) {
          audio.play().catch(() => {}); // Handle autoplay issues
        }
      }
    }, 10);
  };

  return (
    <div style={{ 
      border: "1px solid var(--border)",
      padding: "1rem", 
      borderRadius: "8px", 
      margin: "1.5rem 0"
    }}>
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "0.75rem",
        marginBottom: "0.75rem"
      }}>
        <div 
          onClick={handleToggle}
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "0.5rem",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: 500
          }}
        >
          <div style={{
            width: "44px",
            height: "24px",
            backgroundColor: isKurtActive ? "#3d3d3d" : "#e8e6e1",
            borderRadius: "12px",
            position: "relative",
            transition: "background-color 0.3s ease"
          }}>
            <div style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              position: "absolute",
              top: "2px",
              left: isKurtActive ? "22px" : "2px",
              transition: "left 0.3s ease",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
            }} />
          </div>
          <span>Kurt Active</span>
        </div>
      </div>

      <audio 
        ref={audioRef}
        controls 
        style={{ 
          width: "100%"
        }}
      >
        <source 
          src={isKurtActive ? "/audio/before-kurt.wav" : "/audio/after-kurt.wav"} 
          type="audio/wav" 
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
