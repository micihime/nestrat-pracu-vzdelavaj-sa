export default function Chapter1() {
  return (
    <div>
      <h1>What is JSX?</h1>
      
      <p>
        JSX is a syntax extension that allows you to write HTML-like code within
        JavaScript. It makes it easier to create React components and is the
        standard way to structure the UI in React.
      </p>

      <section>
        <h2>Example:</h2>
        <pre>
          {`function Welcome() {
  return <h1>Hello, World!</h1>;
}`}
        </pre>
        <p>
          Here, <code>&lt;h1&gt;Hello, World!&lt;/h1&gt;</code> looks like HTML,
          but it&apos;s actually JSX.
        </p>
      </section>

      <section>
        <h2>Key Concepts and Rules of JSX</h2>

        <article>
          <h3>Embedding JavaScript Expressions</h3>
          <p>
            You can embed JavaScript expressions inside JSX using curly braces{" "}
            {}.
          </p>
          <p>
            This is useful for dynamic content, like showing a variable or
            calling a function.
          </p>
          <pre>
            {`const name = "Miroslava";
function Welcome() {
  return <h1>Hello, {name}!</h1>;
}`}
          </pre>
          <p>This code displays: Hello, Miroslava!.</p>
        </article>

        <article>
          <h3>JSX Must Have a Single Parent Element</h3>
          <p>JSX expressions need to return a single parent element.</p>
          <p>
            If you want to return multiple elements, wrap them in a div or use a
            React Fragment (&lt;&gt;...&lt;/&gt;).
          </p>
          <pre>
            {`function Greeting() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>We&apos;re glad to see you here.</p>
    </>
  );
}`}
          </pre>
        </article>

        <article>
          <h3>Class vs. className</h3>
          <p>
            In JSX, use className instead of class because class is a reserved
            word in JavaScript.
          </p>
          <pre>
            {`function StyledComponent() {
  return <div className="container">Styled Content</div>;
}`}
          </pre>
        </article>

        <article>
          <h3>Self-Closing Tags</h3>
          <p>
            If an HTML tag doesn&apos;t have any children (like img or input), it
            must be self-closed in JSX.
          </p>
          <pre>
            {`function Avatar() {
  return <img src="avatar.png" alt="User avatar" />;
}`}
          </pre>
        </article>

        <article>
          <h3>JSX is JavaScript</h3>
          <p>
            JSX compiles to regular JavaScript, so you can use it in statements,
            pass it as arguments, or assign it to variables.
          </p>
          <pre>{`const element = <h1>Hello, React!</h1>;`}</pre>
        </article>
      </section>

      <section>
        <h2>Benefits of JSX</h2>
        <ul>
          <li>
            Readability: JSX&apos;s HTML-like structure makes it easier to visualize
            the UI structure.
          </li>
          <li>
            Logic and UI Together: You can keep JavaScript logic close to your
            UI, like embedding functions or conditionals directly within the
            JSX.
          </li>
        </ul>
      </section>
    </div>
  );
}
