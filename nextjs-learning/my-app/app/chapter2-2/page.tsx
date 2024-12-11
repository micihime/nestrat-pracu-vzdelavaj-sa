"use client";

export default function Chapter2() {
  return (
    <div>
      <h1>Passing Functions as Props in React</h1>
      
      <p>
        Passing functions as props is a core concept in React, allowing parent components to communicate with and control child components. This technique is essential for building reusable, modular, and interactive components.
      </p>

      <section>
        <h2>Why Pass Functions as Props?</h2>
        <ul>
          <li>
            <strong>Control Child Component Behavior:</strong> Parents can pass functions to child components to dictate their behavior.
          </li>
          <li>
            <strong>Handle Events in the Parent:</strong> Event handlers in children can trigger parent functions to update the parent&apos;s state or perform actions.
          </li>
          <li>
            <strong>Promote Reusability:</strong> Generic child components can call different functions passed by various parents, making the components reusable.
          </li>
        </ul>
      </section>

      <section>
        <h2>How to Pass Functions as Props</h2>
        
        <article>
          <h3>Basic Example: Passing an Event Handler</h3>
          <pre>
{`function ParentComponent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onButtonClick }) {
  return (
    <button onClick={onButtonClick}>
      Click Me
    </button>
  );
}`}
          </pre>
        </article>

        <article>
          <h3>Example with State Updates</h3>
          <pre>
{`function ParentComponent() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onIncrement={increment} />
    </div>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Best Practices for Passing Functions as Props</h2>
        <ul>
          <li>
            <strong>Descriptive Prop Names:</strong> Use meaningful names like onSubmit, onDelete, or onClick to indicate their purpose.
          </li>
          <li>
            <strong>Avoid Passing Anonymous Functions Directly:</strong> Define the function in the parent to avoid unnecessary re-renders.
          </li>
          <li>
            <strong>Memoize Functions:</strong> Use React.useCallback to avoid re-creating functions if needed.
          </li>
          <li>
            <strong>Consider Prop Drilling Alternatives:</strong> Use Context API for deeply nested function passing.
          </li>
        </ul>
      </section>

      <section>
        <h2>Debugging Common Issues</h2>
        <ul>
          <li>
            <strong>Functions Not Being Called:</strong> Ensure the child invokes the function correctly.
          </li>
          <li>
            <strong>Props Overwriting:</strong> Check for conflicts when multiple parents pass similar functions.
          </li>
          <li>
            <strong>Performance Issues:</strong> Use useCallback to prevent unnecessary function recreation.
          </li>
        </ul>
      </section>
    </div>
  );
}
