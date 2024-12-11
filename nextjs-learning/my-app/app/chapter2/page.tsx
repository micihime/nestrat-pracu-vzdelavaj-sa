"use client";

export default function Chapter2() {
  return (
    <div>
      <h1>Components and Props</h1>

      <p>
        Components and props are foundational concepts in React. They enable you
        to create reusable UI elements and pass data across your application.
      </p>

      <section>
        <h2>What Are Components?</h2>
        <p>
          Components are the building blocks of a React application. They&apos;re
          JavaScript functions or classes that return JSX and encapsulate a part
          of the UI.
        </p>

        <article>
          <h3>Types of Components</h3>
          <ul>
            <li>
              <strong>Functional Components:</strong> These are simpler and more
              commonly used in modern React. They&apos;re just JavaScript functions
              that return JSX.
            </li>
            <li>
              <strong>Class Components:</strong> These are used less often,
              especially with the introduction of React Hooks, which allow
              functional components to have state and lifecycle features.
            </li>
          </ul>

          <h3>Functional Component Example</h3>
          <pre>
            {`function Welcome() {
  return <h1>Hello, welcome to our app!</h1>;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Reusable Components</h2>
        <p>
          Components let you create reusable UI pieces, such as buttons,
          headers, and forms. Each time you use a component, you can think of it
          as an instance of that UI element.
        </p>

        <pre>
          {`function Button() {
  return <button>Click me!</button>;
}`}
        </pre>
      </section>

      <section>
        <h2>Props: Passing Data to Components</h2>
        <p>
          Props (short for properties) allow you to pass data from a parent
          component to a child component, making components dynamic. They act
          like parameters in functions.
        </p>

        <article>
          <h3>Basic Usage of Props</h3>
          <p>
            Props are passed to a component as attributes and accessed in the
            component as an object.
          </p>
          <pre>
            {`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component with a name prop
<Greeting name="Miroslava" />`}
          </pre>
        </article>

        <article>
          <h3>Destructuring Props</h3>
          <p>
            Instead of accessing each prop with props.propName, you can
            destructure props directly in the function parameter.
          </p>
          <pre>
            {`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
<Greeting name="Miroslava" />`}
          </pre>
        </article>

        <article>
          <h3>Default Props</h3>
          <p>
            You can set default values for props, so if a prop isn&apos;t provided,
            React uses the default.
          </p>
          <pre>
            {`function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}
<Greeting /> // Renders "Hello, Guest!"`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Props Are Immutable</h2>
        <p>
          Props are read-only. Once a component receives them, it cannot modify
          them, which keeps data flow predictable and helps debug issues.
        </p>
      </section>

      <section>
        <h2>Example: Combining Components and Props</h2>
        <p>
          Here&apos;s an example of a simple user profile card using components and
          props:
        </p>
        <pre>
          {`function UserProfile({ name, bio }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

// Using the UserProfile component
<UserProfile 
  name="Miroslava" 
  bio="Watercolor artist and developer" 
/>`}
        </pre>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Components are like functions returning UI.</li>
          <li>
            Props allow components to receive data from parent components.
          </li>
          <li>
            Functional components and props together create flexible and
            reusable UI components.
          </li>
        </ul>
      </section>
    </div>
  );
}
