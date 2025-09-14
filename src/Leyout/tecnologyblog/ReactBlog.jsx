import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";


function ReactBlog() {
  const { colors } = useContext(ColorContext);

  return (
    <section
      style={{
        background: colors.background,
        color: colors.text,
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
        padding: "3rem 1rem"
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Blog Header */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          style={{ color: colors.primary }}
        >
          Introduction to React
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          A JavaScript Library for Building User Interfaces
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            React is a <strong>JavaScript library</strong> developed by Facebook
            for building fast, interactive, and component-based user interfaces.
            Instead of updating the entire page, React updates only the parts of
            the page that change, making applications much faster and more
            efficient.
          </p>

          <p>
            Today, React is one of the most popular tools for frontend
            development and is widely used in building modern web applications.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why Use React?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Component-Based:</strong> Build reusable UI components,
              which makes code easier to manage and scale.
            </li>
            <li>
              <strong>Virtual DOM:</strong> React uses a virtual DOM to update
              only what’s necessary, improving performance.
            </li>
            <li>
              <strong>Reusable Code:</strong> Write once and use components
              multiple times in different parts of your app.
            </li>
            <li>
              <strong>Strong Community:</strong> Large ecosystem, many
              libraries, and excellent developer support.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does React Work?
          </h3>
          <p>
            React applications are built with components. Each component is like
            a small piece of UI that can have its own logic and styling. You
            combine these components to create full web applications.
          </p>

          <pre
            style={{
              background: colors.secondary,
              color: colors.background,
              padding: "1rem",
              borderRadius: "0.5rem",
              overflowX: "auto"
            }}
          >
{`// Example React Component
import React from "react";

function Welcome() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default Welcome;`}
          </pre>

          <p>
            In this example:  
            – <code>Welcome</code> is a functional React component. <br />
            – It returns JSX, which looks like HTML but works inside JavaScript. <br />
            – You can reuse this component anywhere in your app.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            React makes it easier to build interactive, dynamic, and scalable
            web applications. With concepts like components, hooks, and the
            virtual DOM, React has become a must-learn tool for modern frontend
            developers. Once you master React, you’ll be able to create
            powerful, production-ready applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ReactBlog;
