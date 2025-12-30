import Link from "next/link";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>

      <section style={{ marginTop: "2rem" }}>
        {/* Example project - duplicate and edit this block */}
        <article style={{ marginBottom: "3rem" }}>
          <h2><Link href="/projects/kurt">Kurt</Link></h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            AI in Music Production
          </p>
          <p>

            {" · "}
            <a href="https://trykurt.com" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </p>
        </article>

        {/* Add more projects here */}
      </section>
    </>
  );
}
