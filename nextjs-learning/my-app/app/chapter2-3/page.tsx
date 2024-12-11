"use client";

export default function Chapter2() {
  return (
    <div>
      <h1>Using Props with Lists in React</h1>
      
      <p>
        Lists are a fundamental part of React applications, often used to render 
        dynamic collections of data. By combining lists with props, you can create 
        reusable, efficient components to display and manage collections.
      </p>

      <section>
        <h2>Key Concepts</h2>
        <article>
          <h3>Mapping over Data</h3>
          <p>React uses the map() function to transform arrays into JSX elements.</p>
        </article>

        <article>
          <h3>Passing Data to List Items</h3>
          <p>Each list item can receive data as props from its parent.</p>
        </article>

        <article>
          <h3>Unique Keys</h3>
          <p>React requires a unique key prop for each list item to efficiently identify elements during re-renders.</p>
        </article>
      </section>

      <section>
        <h2>Basic Example: Rendering a List</h2>
        <article>
          <h3>Parent Component</h3>
          <pre>
            {`function ParentComponent() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} value={item} />
      ))}
    </ul>
  );
}`}
          </pre>
        </article>

        <article>
          <h3>Child Component</h3>
          <pre>
            {`function ListItem({ value }) {
  return <li>{value}</li>;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Best Practices for Props with Lists</h2>
        <article>
          <h3>Use Unique Keys</h3>
          <ul>
            <li>Assign unique key props for efficient updates and to avoid rendering bugs</li>
            <li>Use IDs from data if available, not the index</li>
          </ul>
        </article>

        <article>
          <h3>Prop Validation</h3>
          <ul>
            <li>Ensure the child components receive only the props they need</li>
            <li>Use tools like TypeScript or PropTypes to enforce types</li>
          </ul>
        </article>

        <article>
          <h3>Optimize Re-renders</h3>
          <ul>
            <li>Use React.memo or key-based optimizations if list items depend on complex props</li>
            <li>Keep props lean to improve performance and readability</li>
          </ul>
        </article>
      </section>

      <section>
        <h2>Summary</h2>
        <p>
          Using props with lists is crucial for dynamic, reusable React components. 
          By combining the map() function with custom props:
        </p>
        <ul>
          <li>Data can flow seamlessly between parents and child components</li>
          <li>Lists become interactive and contextually aware</li>
          <li>Reusability and scalability improve</li>
        </ul>
      </section>
    </div>
  );
}
