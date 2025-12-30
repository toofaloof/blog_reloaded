import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Home
        </Link>
        <div className={styles.links}>
          <Link href="/projects">projects</Link>
          <Link href="/books">Books</Link>
          <Link href="/art">Art</Link>
        </div>
      </div>
    </nav>
  );
}
