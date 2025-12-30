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
    </>
  );
}
