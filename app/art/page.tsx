export default function Art() {
  return (
    <>
      <h1>Art</h1>
      <p>Visual work I've created.</p>

      <section style={{ marginTop: "2rem" }}>
        {/*
          To add images:
          1. Put your images in the /public folder
          2. Reference them like: <img src="/your-image.jpg" alt="Description" />
        */}

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem"
        }}>
          {/* Example artwork - duplicate and edit this block */}
          <figure style={{ margin: 0 }}>
            <div style={{
              background: "var(--border)",
              aspectRatio: "4/3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)"
            }}>
              {/* Replace this div with: <img src="/your-art.jpg" alt="Title" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
              Image placeholder
            </div>
            <figcaption style={{ marginTop: "0.5rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Artwork Title, 2024
            </figcaption>
          </figure>

          {/* Add more artwork here */}
        </div>
      </section>
    </>
  );
}
