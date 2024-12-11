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
          <li>
            <Link href="/chapter4" className={styles.secondary}>
              Go to Chapter 4
            </Link>
          </li>
          <li>
            <Link href="/chapter5" className={styles.secondary}>
              Go to Chapter 5
            </Link>
          </li>
          <li>
            <Link href="/chapter6" className={styles.secondary}>
              Go to Chapter 6
            </Link>
          </li>
          <li>
            <Link href="/chapter5" className={styles.secondary}>
              Go to Chapter 7
            </Link>
          </li>
          <li>
            <Link href="/chapter8" className={styles.secondary}>
              Go to Chapter 8
            </Link>
          </li>
          <li>
            <Link href="/chapter9" className={styles.secondary}>
              Go to Chapter 9
            </Link>
          </li>
          <li>
            <Link href="/chapter10" className={styles.secondary}>
              Go to Chapter 10
            </Link>
          </li>
          <li>
            <Link href="/chapter11" className={styles.secondary}>
              Go to Chapter 11
            </Link>
          </li>
        </ol>
      </main>{" "}
    </div>
  );
}
