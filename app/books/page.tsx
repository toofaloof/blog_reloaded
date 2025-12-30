export default function Books() {
  return (
    <>
      <h1>Books</h1>
      <p>What I'm reading and books I recommend.</p>

      <section style={{ marginTop: "2rem" }}>
        {/* Example book - duplicate and edit this block */}
        <article style={{ marginBottom: "3rem" }}>
          <h2>Book Title</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            by Author Name
          </p>
          <p>
            Your thoughts on this book. What did you learn? Why do you
            recommend it? Who should read it?
          </p>
        </article>

        {/* Add more books here */}
      </section>
    </>
  );
}
