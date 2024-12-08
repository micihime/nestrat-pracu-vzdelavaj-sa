// What is JSX?
// JSX is a syntax extension that allows you to write HTML-like code within JavaScript. It makes it easier to create React components and is the standard way to structure the UI in React.
export default function Welcome() {
  return (
    <>
      <h1>Hello, World!</h1>;
      <Welcome2 />
      <Greeting />
      <StyledComponent />
      <Avatar />
      {element}
    </>
  );
}

//Embedding JavaScript Expressions
// You can embed JavaScript expressions inside JSX using curly braces {}.
// This is useful for dynamic content, like showing a variable or calling a function.
const name = "Miroslava";
function Welcome2() {
  return <h1>Hello, {name}!</h1>;
}

// JSX Must Have a Single Parent Element
// JSX expressions need to return a single parent element.
// If you want to return multiple elements, wrap them in a div or use a React Fragment (<>...</>).
function Greeting() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>We’re glad to see you here.</p>
    </>
  );
}

// Class vs. className
// In JSX, use className instead of class because class is a reserved word in JavaScript.
function StyledComponent() {
  return <div className="container">Styled Content</div>;
}

// Self-Closing Tags
// If an HTML tag doesn’t have any children (like <img> or <input>), it must be self-closed in JSX.
function Avatar() {
  return <img src="avatar.png" alt="User avatar" />;
}

// JSX is JavaScript
// JSX compiles to regular JavaScript, so you can use it in statements, pass it as arguments, or assign it to variables.
const element = <h1>Hello, React!</h1>;
