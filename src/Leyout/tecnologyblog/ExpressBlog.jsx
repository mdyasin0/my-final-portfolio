import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";


function ExpressBlog() {
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
          Introduction to Express.js
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          A Minimal and Flexible Node.js Web Framework
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Express.js is a <strong>lightweight and flexible web application
            framework</strong> for Node.js. It simplifies building web servers
            and APIs by providing easy-to-use methods and middleware support.
          </p>

          <p>
            While Node.js provides the core runtime for running JavaScript on
            the server, Express.js adds powerful tools to handle routes,
            requests, and responses with minimal effort.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why Use Express.js?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Simple Routing:</strong> Define routes for different URLs
              in just a few lines.
            </li>
            <li>
              <strong>Middleware Support:</strong> Add functions to handle
              authentication, logging, errors, etc.
            </li>
            <li>
              <strong>Fast Development:</strong> Makes building REST APIs quick
              and efficient.
            </li>
            <li>
              <strong>Integration:</strong> Works seamlessly with databases like
              MongoDB, MySQL, and PostgreSQL.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does Express.js Work?
          </h3>
          <p>
            Express.js works by handling incoming HTTP requests through routes
            and middleware. Each route can have its own logic for handling
            requests and sending responses.
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
{`// Example Express.js server
const express = require("express");
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello from Express.js!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});`}
          </pre>

          <p>
            In this example:  
            – We create an Express application using <code>express()</code>. <br />
            – A route (<code>/</code>) responds with <em>"Hello from Express.js!"</em>. <br />
            – The server listens on port <code>3000</code>.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            Express.js is the most popular framework for Node.js because of its
            simplicity, flexibility, and efficiency. Whether you’re building a
            REST API, a single-page app backend, or a full web application,
            Express makes development faster and easier.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExpressBlog;
