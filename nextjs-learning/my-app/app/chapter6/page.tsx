"use client";

import React from "react";

export default function Index() {
  return (
    <div>
      <h1>Understanding Event Handling in React</h1>

      <p>
        In React, event handling refers to capturing user interactions, such as
        clicks, keystrokes, or mouse movements, and responding to them with
        JavaScript functions. React&apos;s event system is similar to DOM event
        handling but provides additional benefits like synthetic events for
        consistent behavior across browsers.
      </p>

      <section>
        <h2>1. Basics of Event Handling</h2>
        <p>
          React uses a camelCase naming convention for event handlers (e.g.,
          onClick, onChange) and expects functions as event handler values.
        </p>

        <article>
          <h3>Example: Handling a Click Event</h3>
          <pre>
            {`function ButtonClickExample() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>2. Accessing Event Data</h2>
        <p>
          React provides SyntheticEvent, a wrapper around the native DOM event,
          to ensure consistent behavior across all browsers.
        </p>

        <article>
          <h3>Example: Accessing Event Data</h3>
          <pre>
            {`function InputChangeExample() {
  const handleChange = (event) => {
    console.log("Input value:", event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Commonly Used Event Handlers</h2>
        <ul>
          <li>
            <strong>onClick:</strong> Triggered when an element is clicked
          </li>
          <li>
            <strong>onChange:</strong> Triggered when the value of an input
            field changes
          </li>
          <li>
            <strong>onSubmit:</strong> Triggered when a form is submitted
          </li>
          <li>
            <strong>onMouseEnter:</strong> Triggered when the mouse pointer
            enters an element
          </li>
          <li>
            <strong>onMouseLeave:</strong> Triggered when the mouse pointer
            leaves an element
          </li>
          <li>
            <strong>onKeyDown:</strong> Triggered when a key is pressed down
          </li>
          <li>
            <strong>onKeyUp:</strong> Triggered when a key is released
          </li>
          <li>
            <strong>onFocus:</strong> Triggered when an input field gains focus
          </li>
          <li>
            <strong>onBlur:</strong> Triggered when an input field loses focus
          </li>
        </ul>
      </section>

      <section>
        <h2>Best Practices for Event Handling</h2>
        <article>
          <h3>Use Arrow Functions Wisely</h3>
          <pre>
            {`// Inefficient
<button onClick={() => doSomething()}>Click</button>

// Efficient
<button onClick={doSomething}>Click</button>`}
          </pre>
        </article>

        <article>
          <h3>Key Points</h3>
          <ul>
            <li>Use camelCase for event handlers (onClick, onChange, etc.)</li>
            <li>Access event data via event and its properties</li>
            <li>Prevent default behaviors with event.preventDefault</li>
            <li>
              Manage performance by using memoized handlers and avoiding
              unnecessary re-renders
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
