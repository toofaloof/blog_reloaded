"use client";

import { useState } from "react";

interface ImageModalProps {
  images: { src: string; alt: string }[];
}

export default function ImageModal({ images }: ImageModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        marginTop: "1rem"
      }}>
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            alt={image.alt} 
            style={{ 
              width: "100%", 
              borderRadius: "4px", 
              border: "1px solid var(--border)", 
              cursor: "pointer" 
            }}
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "2rem",
            cursor: "pointer"
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Enlarged view"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: "8px"
            }}
          />
        </div>
      )}
    </>
  );
}
