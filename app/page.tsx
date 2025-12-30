import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hi, I'm Atoof</h1>


      <section style={{ marginTop: "3rem" }}>
        <h2>Explore</h2>
        <ul style={{ listStyle: "none", lineHeight: 2 }}>
          <li>
            <Link href="/projects">projects</Link> — code projects and experiments
          </li>
          <li>
            <Link href="/books">Books</Link> — what I'm reading and recommend
          </li>
          <li>
            <Link href="/art">Art</Link> — visual work I've created
          </li>
        </ul>
      </section>
    </>
  );
}
