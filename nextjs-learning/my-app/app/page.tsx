import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={38}
          priority
        />
        <h1>React Essentials: The 80/20 Guide</h1>
      </header>

      <main className={styles.main}>
        <article className={styles.intro}>
          <p>
            To get an 80% understanding of React with the essential 20%, focus
            on these core concepts:
          </p>

          <nav className={styles.chapterNav}>
            <ol>
              <li>
                <Link href="/chapter1" className={styles.secondary}>
                  <h2>JSX (JavaScript XML)</h2>
                  <p>
                    React&apos;s syntax that looks like HTML but is written in
                    JavaScript.
                  </p>
                  <p>
                    Understand JSX structure, embedding JavaScript expressions
                    within curly braces, and the rules.
                  </p>
                </Link>
              </li>

              <li>
                <Link href="/chapter2" className={styles.secondary}>
                  <h2>Components and Props</h2>
                  <p>
                    Learn the concept of components as reusable building blocks.
                  </p>
                  <p>
                    Functional vs. class components and props for dynamic
                    components.
                  </p>
                </Link>
              </li>

              <li>
                <Link href="/chapter3" className={styles.secondary}>
                  <h2>State and useState Hook</h2>
                  <p>
                    useState for managing local component state in functional
                    components.
                  </p>
                  <p>
                    State changes and component re-rendering for interactivity.
                  </p>
                </Link>
              </li>

              {/* Continue the pattern for chapters 4-11 */}
            </ol>
          </nav>
        </article>
      </main>

      <footer className={styles.footer}>
        <p>
          Let me know if you want further explanations or examples on any of
          these topics!
        </p>
      </footer>
    </div>
  );
}
