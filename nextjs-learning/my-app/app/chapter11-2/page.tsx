"use client";

import React from "react";

export default function Index() {
  return (
    <div>
      <h1>Synchronous Data Fetching and Handling in React</h1>

      <p>
        In React, synchronous data fetching and handling involve working with data that is already 
        available when the component is rendered, rather than needing to request or retrieve it 
        dynamically. This approach is typically used when the data is static, preloaded, or 
        hardcoded into the application.
      </p>

      <section>
        <h2>Key Concepts</h2>
        
        <article>
          <h3>Static Data</h3>
          <p>Data that is hardcoded in the application or bundled at build time.</p>
          <p>Example: An array of items or a JSON file.</p>
        </article>

        <article>
          <h3>Passing Data as Props</h3>
          <p>Data can be passed from parent components to child components via props for rendering.</p>
        </article>

        <article>
          <h3>Local State for Data Management</h3>
          <p>Use useState or a similar state management tool to handle user interactions or changes to static data.</p>
        </article>
      </section>

      <section>
        <h2>Examples of Synchronous Data Handling</h2>

        <article>
          <h3>1. Hardcoded Data in a Component</h3>
          <p>If you have predefined data, you can directly use it in your component.</p>
          <pre>
{`function App() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`}
          </pre>
        </article>

        <article>
          <h3>2. Data Passed as Props</h3>
          <pre>
{`function ParentComponent() {
  const data = {
    title: "Fruits List",
    items: ["Apple", "Banana", "Cherry"],
  };

  return <ChildComponent title={data.title} items={data.items} />;
}

function ChildComponent({ title, items }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Separate Data from Logic: Use separate files to store static data</li>
          <li>Use Descriptive Keys: When rendering lists, use unique and meaningful keys</li>
          <li>Avoid Inline Data: Import large datasets from external files</li>
          <li>Optimize Rendering: Use React.memo for components rendering large lists</li>
        </ul>
      </section>

      <section>
        <h2>Limitations of Synchronous Data Handling</h2>
        <ul>
          <li>Static Nature: Data must be preloaded and cannot be dynamically updated</li>
          <li>Scalability: Handling large datasets synchronously may lead to performance issues</li>
          <li>Flexibility: Less suited for scenarios where data changes frequently</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Synchronous data handling in React is ideal for predefined, static, or hardcoded data. 
          It allows for simple and efficient rendering without requiring complex state or lifecycle 
          management. By separating data from components, leveraging state for local changes, and 
          organizing code effectively, you can build robust applications that use static data efficiently.
        </p>
      </section>
    </div>
  );
}
