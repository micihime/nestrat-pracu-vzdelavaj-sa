"use client";

import React from "react";

export default function Index() {
  return (
    <div>
      <h1>Error Boundaries in React</h1>

      <p>
        Error boundaries are essential in React for managing unexpected errors
        in your application&apos;s UI gracefully. Let&apos;s explore what error boundaries
        are, how they work, and how you can implement them.
      </p>

      <section>
        <h2>What are Error Boundaries?</h2>
        <p>
          Error boundaries are React components that catch JavaScript errors in
          their child components&apos; rendering, lifecycle methods, and
          constructors. When an error is caught, the error boundary can display
          a fallback UI instead of crashing the entire application.
        </p>
        <p>
          Without error boundaries, an error occurring in a single component can
          bring down the entire component tree, leading to a blank screen or
          unhandled errors for users. Error boundaries isolate the error to the
          component level, allowing the rest of the app to function normally.
        </p>
      </section>

      <section>
        <h2>Implementing Error Boundaries in React</h2>
        <p>
          Error boundaries can only be created in class components. Functional
          components currently don&apos;t support error boundaries directly. However,
          they can be wrapped inside an error boundary component to catch any
          potential errors.
        </p>

        <article>
          <h3>Creating an Error Boundary Class Component</h3>
          <p>
            To create an error boundary, define a class component with the
            special lifecycle method componentDidCatch and the static method
            getDerivedStateFromError.
          </p>
          <pre>
            {`class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}`}
          </pre>
        </article>

        <article>
          <h3>Using the Error Boundary</h3>
          <pre>
            {`function App() {
  return (
    <ErrorBoundary>
      <SomeComponent />
      <AnotherComponent />
    </ErrorBoundary>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Customizing the Fallback UI</h2>
        <pre>
          {`function CustomFallback() {
  return <div>Oops! Something went wrong. Please try again later.</div>;
}

function App() {
  return (
    <ErrorBoundary fallback={<CustomFallback />}>
      <SomeComponent />
      <AnotherComponent />
    </ErrorBoundary>
  );
}`}
        </pre>
      </section>

      <section>
        <h2>Important Limitations of Error Boundaries</h2>
        <ul>
          <li>They do not catch errors in event handlers</li>
          <li>They do not catch errors in asynchronous code</li>
          <li>They do not catch errors in server-side rendering (SSR)</li>
          <li>They do not catch errors within themselves</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Error Boundaries</h2>
        <ul>
          <li>Isolating errors to improve user experience</li>
          <li>Logging and debugging capabilities</li>
          <li>Improving application resilience</li>
          <li>Creating smoother user experiences with custom fallback UIs</li>
        </ul>
      </section>
    </div>
  );
}
