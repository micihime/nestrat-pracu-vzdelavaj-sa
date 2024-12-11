"use client";

import React from "react";

export default function Chapter10() {
  return (
    <div>
      <h1>Understanding React&apos;s Context API</h1>
      
      <p>
        The Context API is a React feature for managing global state or sharing data across deeply nested components without passing props through every level of the component tree. It&apos;s ideal for scenarios like theme management, user authentication, or language settings, where multiple components need access to the same data.
      </p>

      <section>
        <h2>1. Core Components of Context API</h2>
        
        <article>
          <h3>a. React.createContext()</h3>
          <p>Creates a context object. This object has two components:</p>
          <ul>
            <li>Provider: Supplies the context value to its child components.</li>
            <li>Consumer: Used to access the context value (though modern React often uses useContext instead).</li>
          </ul>
        </article>

        <article>
          <h3>b. Provider</h3>
          <p>Wraps parts of your component tree and provides the context value to its descendants. Any component inside the Provider can access the context.</p>
        </article>

        <article>
          <h3>c. useContext Hook</h3>
          <p>A React hook that simplifies accessing context values in functional components.</p>
        </article>
      </section>

      <section>
        <h2>2. Basic Setup of Context API</h2>
        
        <article>
          <h3>Step 1: Create a Context</h3>
          <p>Use React.createContext() to create a context object.</p>
          <pre>
{`import React from "react";

const ThemeContext = React.createContext(); // Create a context`}
          </pre>
        </article>

        <article>
          <h3>Step 2: Provide Context</h3>
          <pre>
{`function App() {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}`}
          </pre>
        </article>

        <article>
          <h3>Step 3: Consume Context</h3>
          <pre>
{`function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  const theme = React.useContext(ThemeContext);

  return <button className={\`theme-\${theme}\`}>Theme Button</button>;
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>3. Use Cases for Context API</h2>
        <ul>
          <li>Theming: Share light/dark mode settings across your app</li>
          <li>Authentication: Manage user login/logout state globally</li>
          <li>Language Settings: Pass the selected language or translations through the app</li>
          <li>Cart State in E-commerce: Manage shared cart items or checkout information</li>
        </ul>
      </section>

      <section>
        <h2>4. Complete Example: Theme Toggler</h2>
        <article>
          <h3>Setting Up the Context</h3>
          <pre>
{`import React, { createContext, useState, useContext } from "react";

// 1. Create Context
const ThemeContext = createContext();

// 2. Provide Context
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>5. Best Practices for Context API</h2>
        <ul>
          <li>Use Context Sparingly: Avoid overusing Context API for state that doesn&apos;t need to be global</li>
          <li>Combine with Reducers: For complex logic, combine useContext with useReducer</li>
          <li>Separate Concerns: Use multiple contexts for unrelated state</li>
          <li>Optimize Performance: Use memoization for context values and split providers</li>
          <li>Consider Alternatives: For very large-scale apps, evaluate other state management solutions</li>
        </ul>
      </section>
    </div>
  );
}
