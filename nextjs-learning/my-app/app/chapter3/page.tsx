"use client";

export default function Chapter3() {
  return (
    <div>
      <h1>State and useState Hook in React</h1>

      <p>
        State and the useState hook are essential in React for managing
        component data and interactivity.
      </p>

      <section>
        <h2>1. What is State?</h2>
        <p>
          In React, state refers to dynamic data that a component needs to
          remember and manage over time. Unlike props, which are read-only,
          state can change within the component, allowing the UI to respond to
          user actions or other events.
        </p>
        <p>
          For example, state could hold a counter&apos;s value, the text in an input
          field, or whether a menu is open or closed.
        </p>
      </section>

      <section>
        <h2>2. Using the useState Hook</h2>
        <p>
          React provides the useState hook for adding state to functional
          components. useState is the most common hook and one of the first
          you&apos;ll encounter in React development.
        </p>

        <article>
          <h3>Basic Syntax of useState:</h3>
          <pre>{`const [state, setState] = useState(initialValue);`}</pre>
          <ul>
            <li>state: The current value of the state variable</li>
            <li>setState: A function to update the state variable</li>
            <li>
              initialValue: The initial value of the state when the component
              first renders
            </li>
          </ul>
        </article>

        <article>
          <h3>Example: Counter Component</h3>
          <pre>
            {`import React, { useState } from 'react';

function Counter() {
  // Initialize the count state to 0
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increase Count</button>
    </div>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>3. Updating State with setState</h2>
        <article>
          <h3>Example with Text Input</h3>
          <pre>
            {`function TextInput() {
  const [text, setText] = useState(""); // Initialize an empty string

  const handleChange = (event) => setText(event.target.value);

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>4. State and Re-Renders</h2>
        <article>
          <h3>Example with Toggle Visibility</h3>
          <pre>
            {`function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This is a toggleable message!</p>}
    </div>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>5. Updating State Based on Previous State</h2>
        <article>
          <pre>
            {`function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increase Count</button>
    </div>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>
            State makes components interactive by enabling them to track
            changing data
          </li>
          <li>
            useState initializes state and provides a function to update it
          </li>
          <li>
            Every time you call setState, React re-renders the component to
            reflect the updated state
          </li>
        </ul>
      </section>
    </div>
  );
}
