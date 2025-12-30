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
          <Link href="/projects">Projects</Link>
          <Link href="/books">Books</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
