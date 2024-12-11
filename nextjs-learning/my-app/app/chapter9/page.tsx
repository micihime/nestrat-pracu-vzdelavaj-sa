"use client";

import React from "react";

export default function Index() {
  return (
    <div>
      <h1>Understanding React Component Lifecycle</h1>

      <p>
        Understanding component lifecycle methods in React is essential for managing how your components are mounted, updated, and unmounted within your application.
      </p>

      <section>
        <h2>The Three Stages of the React Component Lifecycle</h2>
        <ul>
          <li>Mounting: When the component is created and inserted into the DOM.</li>
          <li>Updating: When the component&apos;s props or state change, causing a re-render.</li>
          <li>Unmounting: When the component is removed from the DOM.</li>
        </ul>
      </section>

      <section>
        <h2>Handling Lifecycle Stages in Functional Components with useEffect</h2>
        
        <article>
          <h3>Mounting: componentDidMount with useEffect</h3>
          <p>When a component is first added to the DOM, you might want to run certain side effects, such as fetching data, setting up a subscription, or initializing values.</p>
          <pre>
{`import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    console.log("Component mounted");
    fetchData();
  }, []); // Empty dependency array means it only runs once on mount

  return <div>Hello, World!</div>;
}`}
          </pre>
        </article>

        <article>
          <h3>Updating: componentDidUpdate with useEffect</h3>
          <p>When a component&apos;s props or state change, React will re-render the component.</p>
          <pre>
{`import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData(userId).then((data) => setUserData(data));
  }, [userId]); // Runs only when userId changes

  return userData ? <div>{userData.name}</div> : <p>Loading...</p>;
}`}
          </pre>
        </article>

        <article>
          <h3>Unmounting: componentWillUnmount with useEffect Cleanup</h3>
          <p>When a component is removed from the DOM, you may need to clean up things like event listeners, timers, or subscriptions to prevent memory leaks.</p>
          <pre>
{`import { useEffect, useState } from "react";

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);

    return () => {
      clearInterval(interval);
      console.log("Component unmounted, timer cleared");
    };
  }, []);

  return <p>Seconds elapsed: {seconds}</p>;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Key Points to Remember</h2>
        <ul>
          <li>Mounting: Use useEffect with an empty dependency array to run side effects once on mount.</li>
          <li>Updating: Use dependencies in useEffect to trigger re-runs when specific values change.</li>
          <li>Unmounting: Return a cleanup function from useEffect to handle unmount events.</li>
          <li>Multiple useEffect Hooks: Split different lifecycle tasks into separate useEffect hooks for better code management.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Lifecycle Management</h2>
        <ul>
          <li>Better control over component behavior throughout its lifecycle</li>
          <li>Proper cleanup of resources to prevent memory leaks</li>
          <li>Predictable component behavior during updates</li>
          <li>Clean and maintainable code structure</li>
        </ul>
      </section>
    </div>
  );
}
