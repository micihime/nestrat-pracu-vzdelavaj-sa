"use client";

import React from "react";

export default function Chapter11() {
  return (
    <div>
      <h1>Asynchronous Data Handling in React</h1>

      <p>
        Learn about fetching data, handling async state updates, and best
        practices for integrating APIs with React components.
      </p>

      <section>
        <h2>1. Fetching Data with fetch and async/await in React</h2>
        <p>
          React components often need to load data from external sources, such
          as REST APIs or databases, to display dynamic content. Using fetch
          with async/await is a popular way to handle data fetching.
        </p>

        <article>
          <h3>Basic Data Fetching with useEffect</h3>
          <pre>
            {`import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{data ? JSON.stringify(data) : "No data available"}</div>;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>2. Handling Data with Third-Party Libraries</h2>
        <article>
          <h3>Using axios for Data Fetching</h3>
          <p>
            Although the native fetch API is commonly used, axios is an
            alternative library with additional features like automatic JSON
            parsing, request cancellation, and better error handling.
          </p>
          <pre>
            {`import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.example.com/data");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{data ? JSON.stringify(data) : "No data available"}</div>;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Benefits of Async Data Handling</h2>
        <ul>
          <li>Better user experience with loading states</li>
          <li>Proper error handling and display</li>
          <li>Efficient data fetching with cleanup functions</li>
          <li>Prevention of memory leaks</li>
          <li>Support for concurrent requests</li>
        </ul>
      </section>

      <section>
        <h2>Best Practices</h2>
        <article>
          <h3>Cleanup Functions</h3>
          <p>
            Always implement cleanup functions in useEffect to prevent memory
            leaks and state updates on unmounted components.
          </p>
          <pre>
            {`useEffect(() => {
  let isMounted = true;

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      if (isMounted) {
        const result = await response.json();
        setData(result);
      }
    } catch (err) {
      if (isMounted) setError(err.message);
    }
  };

  fetchData();

  return () => {
    isMounted = false;
  };
}, []);`}
          </pre>
        </article>
      </section>
    </div>
  );
}
