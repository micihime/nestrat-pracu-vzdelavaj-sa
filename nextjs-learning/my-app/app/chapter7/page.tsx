"use client";

import React from "react";

export default function Chapter7() {
  return (
    <div>
      <h1>Forms and Controlled Components in React</h1>

      <p>
        Forms and Controlled Components in React are essential for gathering and
        managing user input. Forms are often used to capture data from users,
        and controlled components offer a powerful way to handle that data
        within React.
      </p>

      <section>
        <h2>1. Controlled vs. Uncontrolled Components</h2>
        <p>
          In React, a controlled component is a form element (like an input,
          textarea, or select) where the component&apos;s state controls the input&apos;s
          value. The state and the form element are synced, allowing React to
          manage and control the form data.
        </p>

        <ul>
          <li>
            Controlled Components: React state holds the form data, so the value
            of each form element is determined by React state.
          </li>
          <li>
            Uncontrolled Components: The form data is handled by the DOM itself,
            and React accesses the value only when needed (e.g., via refs).
          </li>
        </ul>

        <article>
          <h3>Example: Basic Controlled Component</h3>
          <pre>
            {`import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Submitted name: \${name}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>2. Handling Multiple Form Inputs</h2>
        <p>
          When dealing with forms that have multiple inputs, each input can be
          controlled with a separate piece of state, or all form data can be
          stored in a single object. Using an object often simplifies the code.
        </p>

        <article>
          <h3>Example: Controlled Form with Multiple Inputs</h3>
          <pre>
            {`import React, { useState } from "react";

function UserInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2>Benefits of Form Control</h2>
        <ul>
          <li>Immediate access to form data</li>
          <li>Ability to pass form data between components</li>
          <li>Instant validation</li>
          <li>Conditional rendering based on form state</li>
          <li>Controlled submission handling</li>
        </ul>
      </section>
    </div>
  );
}
