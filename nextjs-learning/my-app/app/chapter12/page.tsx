"use client";

import React from "react";

export default function Index() {
  return (
    <div>
      <h1>Understanding useRef and useMemo</h1>

      <section>
        <h2>useRef: Working with References</h2>
        <p>
          useRef is a hook that creates a persistent object with a .current
          property. Unlike state, updating .current does not trigger a
          re-render. useRef is particularly useful for:
        </p>
        <ul>
          <li>Accessing or modifying DOM elements directly</li>
          <li>
            Storing mutable values across renders without causing re-renders
          </li>
          <li>
            Keeping track of previous values or storing other
            non-rendering-related values
          </li>
        </ul>

        <article>
          <h3>Basic Usage for DOM Manipulation</h3>
          <p>
            One common use for useRef is to interact with DOM elements in
            function components, such as focusing on an input field.
          </p>
          <pre>
            {`import { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Type here" />;
}`}
          </pre>
        </article>

        <article>
          <h3>Storing Mutable Values</h3>
          <pre>
            {`import { useRef } from "react";

function CallTracker() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(\`Button clicked \${countRef.current} times\`);
  };

  return <button onClick={handleClick}>Click me</button>;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>useMemo: Memoizing Expensive Calculations</h2>
        <p>
          useMemo is a React hook that allows you to memoize (or remember) the
          result of an expensive calculation. This is helpful for optimizing
          performance, as it avoids recalculating values unnecessarily.
        </p>

        <article>
          <h3>Basic Usage of useMemo</h3>
          <pre>
            {`import { useMemo, useState } from "react";

function ExpensiveCalculation({ count }) {
  const computeExpensiveValue = (num) => {
    console.log("Running expensive calculation...");
    return num * 2;
  };

  const expensiveValue = useMemo(
    () => computeExpensiveValue(count),
    [count]
  );

  return <div>
    <p>Expensive Value: {expensiveValue}</p>
  </div>;
}`}
          </pre>
        </article>

        <article>
          <h3>When to Use useMemo</h3>
          <ul>
            <li>
              Use for CPU-intensive calculations that don&apos;t need to run on every
              render
            </li>
            <li>Avoid overusing useMemo for small or simple calculations</li>
            <li>
              Consider using it when recalculating has a noticeable performance
              impact
            </li>
          </ul>
        </article>
      </section>

      <section>
        <h2>Summary</h2>
        <ul>
          <li>
            <strong>useRef:</strong> Use for DOM references and mutable values
            between renders without triggering re-renders
          </li>
          <li>
            <strong>useMemo:</strong> Use for memoizing complex calculations
            that should only re-compute when dependencies change
          </li>
        </ul>
      </section>
    </div>
  );
}
