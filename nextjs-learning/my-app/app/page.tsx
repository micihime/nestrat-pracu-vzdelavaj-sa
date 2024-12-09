import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            <Link href="/chapter1" className={styles.secondary}>
              Go to Chapter 1
            </Link>
          </li>
          <li>
            <Link href="/chapter2" className={styles.secondary}>
              Go to Chapter 2
            </Link>
          </li>
          <li>
            <Link href="/chapter3" className={styles.secondary}>
              Go to Chapter 3
            </Link>
          </li>
        </ol>
      </main>{" "}
    </div>
  );
}
