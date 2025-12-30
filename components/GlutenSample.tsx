"use client";

interface GlutenSampleProps {
  title: string;
  bpm: number;
  key: string;
  tempo: string;
  audioSrc: string;
}

export default function GlutenSample({ title, bpm, key: keySignature, tempo, audioSrc }: GlutenSampleProps) {
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
        gap: "0.5rem",
        marginBottom: "0.5rem"
      }}>
        <span style={{ fontSize: "1.2rem" }}></span>
        <h3 style={{ 
          margin: 0, 
          fontSize: "1rem", 
          fontWeight: 500,
          color: "var(--text)"
        }}>
          &ldquo;{title}&rdquo;
        </h3>
      </div>
      
      <p style={{ 
        color: "var(--text-muted)", 
        fontSize: "0.9rem",
        marginBottom: "0.75rem",
        margin: 0
      }}>
        BPM: {bpm}, Key: {keySignature}, Tempo: {tempo}
      </p>

      <audio 
        controls 
        style={{ 
          width: "100%",
          marginTop: "0.75rem"
        }}
      >
        <source src={audioSrc} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
