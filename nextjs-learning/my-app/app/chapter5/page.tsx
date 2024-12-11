"use client";

import React from "react";

export default function Index() {
  return (
    <div>
      <h1>Understanding useEffect in React</h1>

      <p>
        Handling side effects with the useEffect hook is a crucial part of React
        development. Side effects are tasks that happen outside the normal
        flow of data rendering—such as data fetching, subscriptions, and DOM
        manipulation—tasks that React doesn&apos;t manage automatically.
      </p>

      <section>
        <h2>What is useEffect?</h2>
        <p>
          useEffect is a React Hook that lets you perform side effects in
          function components. By default, useEffect runs after every render,
          but it can be configured to run only when certain values change. This
          makes it a versatile tool for managing non-UI aspects of your
          application.
        </p>
      </section>

      <section>
        <h2>Basic Syntax of useEffect</h2>
        <p>The useEffect hook takes two arguments:</p>
        <pre>
          {`useEffect(() => {
  // Side effect code goes here
}, [dependencies]);`}
        </pre>
        <ul>
          <li>
            First argument: A function where you define the side effect. This
            function can include any code you want to run after render.
          </li>
          <li>
            Second argument (optional): An array of dependencies. useEffect only
            runs if these dependencies change.
          </li>
        </ul>
      </section>

      <section>
        <h2>Common Use Cases for useEffect</h2>

        <article>
          <h3>Data Fetching</h3>
          <p>
            When you need to fetch data from an API when a component loads,
            useEffect is ideal.
          </p>
          <pre>
            {`import { useState, useEffect } from &apos;react&apos;;

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(result => setData(result));
  }, []); // Empty array means this only runs once

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}`}
          </pre>
        </article>

        <article>
          <h3>Listening to Events</h3>
          <p>
            useEffect can handle event listeners while preventing memory leaks.
          </p>
          <pre>
            {`function WindowWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Window width: {width}px</p>;
}`}
          </pre>
        </article>

        <article>
          <h3>Reacting to Prop or State Changes</h3>
          <p>Effects can run whenever specific props or state changes.</p>
          <pre>
            {`function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(\`https://api.example.com/search?q=\${query}\`)
        .then(response => response.json())
        .then(data => setResults(data.results));
    }
  }, [query]);

  return <div>{results.length > 0 ? results.join(", ") : "No results"}</div>;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Cleanup in useEffect</h2>
        <p>
          The function returned in useEffect acts as a cleanup function,
          essential for clearing event listeners or canceling network requests.
        </p>
        <pre>
          {`function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Time: {seconds} seconds</p>;
}`}
        </pre>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>
            useEffect manages side effects like data fetching and event
            listeners
          </li>
          <li>Empty dependency array runs the effect once on mount</li>
          <li>Dependencies in the array control when the effect re-runs</li>
          <li>Cleanup functions prevent memory leaks</li>
        </ul>
      </section>
    </div>
  );
}
