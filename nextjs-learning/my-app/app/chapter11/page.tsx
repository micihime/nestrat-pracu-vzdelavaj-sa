"use client";

import React from "react";

export default function Index() {
  return (
    <div>
      <h1>Data Handling in React</h1>

      <p>
        Handling data efficiently is one of the core aspects of building React
        applications. React uses a unidirectional data flow to ensure
        predictable state management and clean application design. This approach
        involves managing how data is passed between components and how state
        changes impact rendering.
      </p>

      <section>
        <h2>1. Unidirectional Data Flow</h2>
        <p>
          In React, data flows from parent components to child components via
          props. Child components can&apos;t directly modify parent data, which
          enforces a predictable flow of information.
        </p>

        <article>
          <h3>Example of Unidirectional Data Flow</h3>
          <pre>
            {`function ParentComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <ChildComponent count={count} onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

function ChildComponent({ count, onIncrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>2. Managing State</h2>
        <p>
          State in React refers to data that changes over time and impacts the
          UI. React provides hooks like useState and useReducer for managing
          state locally within a component.
        </p>

        <article>
          <h3>useState Hook</h3>
          <p>
            The useState hook is the most common way to manage state in
            functional components.
          </p>
          <pre>
            {`function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Best Practices for Data Handling</h2>
        <ul>
          <li>
            Keep Components Focused: Break down components so each handles a
            single responsibility.
          </li>
          <li>
            Minimize State: Store only the minimal state required; derive other
            values if possible.
          </li>
          <li>
            Avoid Prop Drilling: Use Context API or state management libraries
            for deeply nested components.
          </li>
          <li>
            Normalize Data: For lists or nested data, normalize the structure
            for easier updates and rendering.
          </li>
          <li>
            Optimize Performance: Use React.memo, useCallback, and useMemo to
            avoid unnecessary re-renders.
          </li>
        </ul>
      </section>

      <section>
        <h2>Summary</h2>
        <p>
          Data handling in React revolves around state and props, ensuring a
          unidirectional flow for simplicity and predictability. Key concepts
          include managing state locally, sharing data through props, and
          scaling up with Context API or state management libraries. By
          mastering these principles, you can create efficient and scalable
          React applications.
        </p>
      </section>
    </div>
  );
}
