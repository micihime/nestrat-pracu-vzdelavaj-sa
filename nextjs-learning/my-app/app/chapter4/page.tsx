"use client";

export default function Chapter4() {
  return (
    <div>
      <h1>Rendering Logic and Conditional Rendering</h1>
      
      <p>
        Rendering logic and conditional rendering are essential for building dynamic, 
        interactive UIs in React. Let&apos;s dive into how to render lists, use conditionals, 
        and manage conditional rendering effectively.
      </p>

      <section>
        <h2>1. Rendering Lists</h2>
        <p>
          In React, lists are usually rendered with JavaScript&apos;s map function, 
          which allows you to display a list of data by creating elements for each item.
        </p>

        <article>
          <h3>Example: Rendering a List of Items</h3>
          <p>Imagine you have an array of fruit names, and you want to display each one as a list item.</p>
          <pre>
            {`function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}`}
          </pre>
          <ul>
            <li><strong>map Function:</strong> Loops through the fruits array, and for each fruit, it creates a &lt;li&gt; element.</li>
            <li><strong>key Prop:</strong> Each item should have a unique key prop. This helps React track changes in the list, improving performance.</li>
          </ul>
        </article>
      </section>

      <section>
        <h2>2. Conditional Rendering</h2>
        <p>
          Conditional rendering allows you to display different content based on certain conditions. 
          In React, you can use JavaScript conditionals inside JSX.
        </p>

        <article>
          <h3>Basic Conditional Rendering with &&</h3>
          <p>To render an element only if a condition is true, use the && operator.</p>
          <pre>
            {`function WelcomeMessage({ isLoggedIn }) {
  return (
    <div>
      <h1>Welcome to our app!</h1>
      {isLoggedIn && <p>Thanks for logging in!</p>}
    </div>
  );
}`}
          </pre>
        </article>

        <article>
          <h3>Ternary Operator for Inline Conditional Rendering</h3>
          <p>The ternary operator is useful when you have two possible values to render.</p>
          <pre>
            {`function UserGreeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Benefits of Conditional Rendering</h2>
        <ul>
          <li>Clean and readable code structure</li>
          <li>Efficient rendering based on conditions</li>
          <li>Flexible UI state management</li>
          <li>Better component reusability</li>
        </ul>
      </section>
    </div>
  );
}
