import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hi, I’m Atoof</h1>


      <section style={{ marginTop: "3rem" }}>
        <h2>Explore</h2>
        <ul style={{ listStyle: "none", lineHeight: 2 }}>
          <li>
            <Link href="/projects">Projects</Link> 
          </li>
          <li>
            <Link href="/books">Books</Link> 
          </li>
          <li>
            <Link href="/about">About</Link> 
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2>Contact</h2>
        <ul style={{ listStyle: "none", lineHeight: 2 }}>
          <li>
            <a href="mailto:atoofshakir0@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://github.com/toofaloof" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/atoof-shakir"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
