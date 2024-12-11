"use client";

import React from "react";

export default function Index() {
  return (
    <div>
      <h1>Error Handling in React</h1>

      <p>
        Error handling in React is crucial for building robust applications that
        gracefully recover from unexpected issues. It ensures that your
        application continues to function smoothly and provides helpful feedback
        to users when errors occur.
      </p>

      <section>
        <h2>Key Concepts in React Error Handling</h2>
        <ul>
          <li>
            Error Boundaries: Special components that catch JavaScript errors in
            their child components
          </li>
          <li>
            Handling Errors in Event Handlers: Manual handling required as they
            don&apos;t propagate to error boundaries
          </li>
          <li>
            API or Asynchronous Errors: Must be handled explicitly using
            try-catch
          </li>
          <li>
            Validation and User Input Errors: Prevention through validation
            mechanisms
          </li>
          <li>
            Global Error Handling: Catching escaped errors from component
            boundaries
          </li>
        </ul>
      </section>

      <section>
        <h2>1. Error Boundaries</h2>
        <p>
          React provides a built-in mechanism for catching errors in the
          component tree: Error Boundaries.
        </p>

        <article>
          <h3>Creating an Error Boundary</h3>
          <p>
            Use the componentDidCatch lifecycle method or static
            getDerivedStateFromError.
          </p>
          <pre>
            {`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>2. Handling Errors in Event Handlers</h2>
        <article>
          <p>
            Errors in event handlers must be caught manually because they don&apos;t
            propagate to error boundaries.
          </p>
          <pre>
            {`function App() {
  const handleClick = () => {
    try {
      throw new Error("Button error!");
    } catch (error) {
      console.error("Caught error:", error);
    }
  };

  return <button onClick={handleClick}>Click Me</button>;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Always Validate Data: Prevent errors at their source</li>
          <li>
            Use Error Boundaries Strategically: Apply them to isolate parts of
            the UI
          </li>
          <li>Graceful Degradation: Provide meaningful fallback UI</li>
          <li>
            Log Errors: Console during development, monitoring tools in
            production
          </li>
          <li>
            Catch Promises Globally: Use window.addEventListener for unhandled
            promises
          </li>
        </ul>
      </section>
    </div>
  );
}
