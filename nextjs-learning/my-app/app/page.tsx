import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      To get an 80% understanding of React with the essential 20%, focus on these core concepts:

1. JSX (JavaScript XML)
React’s syntax that looks like HTML but is written in JavaScript.
Understand JSX structure, embedding JavaScript expressions within curly braces, and the rules (e.g., using className instead of class).
2. Components and Props
Learn the concept of components as reusable building blocks.
Functional vs. class components (focus more on functional components due to React’s functional focus).
Props: Pass data from parent to child components to make components dynamic.
3. State and useState Hook
useState is a hook to manage local component state in functional components.
State changes re-render the component, and this allows for interactivity (e.g., toggling visibility or updating form inputs).
4. Rendering Logic and Conditional Rendering
Understand how to render lists (map function) and show/hide elements based on conditions.
Conditional rendering (e.g., using &&, ternary operator) for creating dynamic UIs.
5. useEffect Hook
useEffect is crucial for side effects like fetching data, setting up subscriptions, and updating the DOM.
Dependency array: Know when to re-run effects by understanding dependencies and avoiding unnecessary re-renders.
6. Event Handling
Learn basic event handling, like onClick, onChange, and other event handlers.
Event handling syntax in React and how to access event data (e.g., event.target.value).
7. Forms and Controlled Components
Controlled components (form elements like input, select) and binding them with state for two-way data binding.
Form submission, validation basics, and handling input changes.
8. React Router (for Navigation)
Basic routing with React Router to handle page navigation.
Understand core components like BrowserRouter, Route, Link, and Switch (or Routes in React Router v6).
9. Component Lifecycle (Basics)
High-level understanding of component lifecycle phases—mounting, updating, unmounting.
Focus on lifecycle hooks like useEffect for functional components to mimic class component lifecycle methods.
10. Context API (for Global State)
Use Context API for passing data deeply through component trees without props.
Basic setup: React.createContext, Provider, and useContext to access global data.
11. Error Boundaries and Handling Errors
Basic error handling strategies in components.
Use error boundaries to catch JavaScript errors in child components (mainly for production-readiness).
Mastering these 11 foundational areas will make React much easier to use and allow you to confidently build dynamic, interactive applications. Let me know if you want further explanations or examples on any of these topics!
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
