import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";


function ViteBlog() {
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
          Introduction to Vite
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          A Modern Build Tool for Frontend Development
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Vite is a <strong>next-generation frontend build tool</strong> that
            aims to provide a faster and leaner development experience for web
            projects. It was created by Evan You, the developer behind Vue.js.
          </p>

          <p>
            Unlike traditional bundlers like Webpack, Vite leverages native
            ES modules in the browser during development, which allows lightning-fast hot module replacement (HMR) and instant server start.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why Use Vite?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Fast Development:</strong> Instantly updates modules in
              the browser without full page reload.
            </li>
            <li>
              <strong>Optimized Build:</strong> Uses Rollup under the hood for
              production builds.
            </li>
            <li>
              <strong>Framework Agnostic:</strong> Works with React, Vue, Svelte,
              and vanilla JavaScript.
            </li>
            <li>
              <strong>Minimal Configuration:</strong> Easy to set up and
              configure.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does Vite Work?
          </h3>
          <p>
            During development, Vite serves source files over native ES modules
            using a dev server. This eliminates the need for bundling while
            developing. For production, Vite bundles your code using Rollup to
            generate optimized assets.
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
{`# Example: Create a React project with Vite

# Install Vite globally (optional)
npm install -g create-vite

# Create a new React project
npm create vite@latest my-react-app

# Navigate to project folder
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev`}
          </pre>

          <p>
            In this example:  
            – <code>npm create vite@latest</code> initializes a new project. <br />
            – <code>npm install</code> installs dependencies. <br />
            – <code>npm run dev</code> starts the dev server with hot module
            replacement.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            Vite is an excellent tool for modern frontend development, offering
            super fast development, easy configuration, and optimized builds.
            It’s perfect for React, Vue, or any modern JavaScript project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ViteBlog;
