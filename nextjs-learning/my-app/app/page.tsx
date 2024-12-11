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
                </Link>
                <p>
                  React&apos;s syntax that looks like HTML but is written in
                  JavaScript.
                </p>
                <p>
                  Understand JSX structure, embedding JavaScript expressions
                  within curly braces, and the rules.
                </p>
              </li>

              <li>
                <Link href="/chapter2" className={styles.secondary}>
                  <h2>Components and Props</h2>
                </Link>
                <p>
                  Learn the concept of components as reusable building blocks.
                </p>
                <p>
                  Functional vs. class components and props for dynamic
                  components.
                </p>
              </li>

              <li>
                <Link href="/chapter3" className={styles.secondary}>
                  <h2>State and useState Hook</h2>
                </Link>

                <p>
                  useState for managing local component state in functional
                  components.
                </p>
                <p>
                  State changes and component re-rendering for interactivity.
                </p>
              </li>
              <li>
                <Link href="/chapter4" className={styles.secondary}>
                  <h2>Rendering Logic and Conditional Rendering</h2>
                </Link>
                <p>
                  Understand how to render lists (map function) and show/hide
                  elements based on conditions.
                </p>
                <p>
                  Conditional rendering (e.g., using &&, ternary operator) for
                  creating dynamic UIs.
                </p>
              </li>

              <li>
                <Link href="/chapter5" className={styles.secondary}>
                  <h2>useEffect Hook</h2>
                </Link>
                <p>
                  useEffect is crucial for side effects like fetching data,
                  setting up subscriptions, and updating the DOM.
                </p>
                <p>
                  Dependency array: Know when to re-run effects by understanding
                  dependencies.
                </p>
              </li>

              <li>
                <Link href="/chapter6" className={styles.secondary}>
                  <h2>Event Handling</h2>
                </Link>
                <p>
                  Learn basic event handling, like onClick, onChange, and other
                  event handlers.
                </p>
                <p>
                  Event handling syntax in React and how to access event data.
                </p>
              </li>

              <li>
                <Link href="/chapter7" className={styles.secondary}>
                  <h2>Forms and Controlled Components</h2>
                </Link>
                <p>
                  Controlled components and binding them with state for two-way
                  data binding.
                </p>
                <p>
                  Form submission, validation basics, and handling input
                  changes.
                </p>
              </li>

              <li>
                <Link href="/chapter8" className={styles.secondary}>
                  <h2>React Router</h2>
                </Link>
                <p>
                  Basic routing with React Router to handle page navigation.
                </p>
                <p>
                  Understand core components like BrowserRouter, Route, Link,
                  and Routes.
                </p>
              </li>

              <li>
                <Link href="/chapter9" className={styles.secondary}>
                  <h2>Component Lifecycle</h2>
                </Link>
                <p>High-level understanding of component lifecycle phases.</p>
                <p>
                  Focus on lifecycle hooks like useEffect for functional
                  components.
                </p>
              </li>

              <li>
                <Link href="/chapter10" className={styles.secondary}>
                  <h2>Context API</h2>
                </Link>
                <p>
                  Use Context API for passing data deeply through component
                  trees.
                </p>
                <p>
                  Basic setup: React.createContext, Provider, and useContext.
                </p>
              </li>

              <li>
                <Link href="/chapter11" className={styles.secondary}>
                  <h2>Error Boundaries and Handling Errors</h2>
                </Link>
                <p>Basic error handling strategies in components.</p>
                <p>
                  Use error boundaries to catch JavaScript errors in child
                  components.
                </p>
              </li>
            </ol>
          </nav>
        </article>
      </main>

      <footer className={styles.footer}>
        <p>
          Mastering these 11 foundational areas will make React much easier to
          use and allow you to confidently build dynamic, interactive
          applications.
        </p>
      </footer>
    </div>
  );
}
