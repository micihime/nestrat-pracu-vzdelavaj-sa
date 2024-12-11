"use client";

import React from "react";

export default function Chapter11() {
  return (
    <div>
      <h1>Synchronous vs Asynchronous Data Handling</h1>

      <section>
        <h2>Synchronous Data Handling</h2>
        <p>
          Synchronous data handling means that actions are executed immediately
          and sequentially. The application doesn&apos;t need to wait for any
          external resources (like APIs) or asynchronous operations (like timers
          or event listeners). All computations and state updates occur in a
          single thread.
        </p>

        <article>
          <h3>Characteristics of Synchronous Data Handling</h3>
          <ul>
            <li>Operations are processed immediately.</li>
            <li>
              There are no delays caused by waiting for external data or
              resources.
            </li>
            <li>
              It typically involves managing static or immediate state changes.
            </li>
          </ul>
        </article>

        <article>
          <h3>Examples in React</h3>
          <p>
            Direct State Updates When you update state using the useState hook
            with a new value, React processes it synchronously (though the
            rendering happens in batches for optimization).
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
        <h2>Asynchronous Data Handling</h2>
        <p>
          Asynchronous data handling involves operations that take time to
          complete, like fetching data from an API, reading files, or waiting
          for user interactions. React must handle these operations
          asynchronously to avoid blocking the UI.
        </p>

        <article>
          <h3>Examples of Asynchronous Operations</h3>
          <ul>
            <li>Fetching data from APIs using fetch or axios.</li>
            <li>Updating state after a delay (e.g., using setTimeout).</li>
            <li>
              Responding to events triggered by user interaction or external
              sources.
            </li>
          </ul>
        </article>

        <article>
          <h3>Key Asynchronous Example</h3>
          <pre>
            {`function UsersList() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Best Practices for Combining Both</h2>

        <article>
          <h3>Keep Synchronous Data Simple</h3>
          <ul>
            <li>Use synchronous state for immediate values and static data.</li>
            <li>
              Avoid introducing unnecessary complexity for derived or computed
              values.
            </li>
          </ul>
        </article>

        <article>
          <h3>Handle Async Data Gracefully</h3>
          <pre>
            {`function UsersList() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
          </pre>
        </article>
      </section>
    </div>
  );
}
