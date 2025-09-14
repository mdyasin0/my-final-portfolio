import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";


function NodeBlog() {
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
          Introduction to Node.js
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          JavaScript Beyond the Browser
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Node.js is an <strong>open-source, cross-platform runtime
            environment</strong> that allows developers to run JavaScript code
            outside the browser. Built on Google Chrome’s V8 JavaScript engine,
            Node.js is fast, lightweight, and perfect for building scalable
            network applications.
          </p>

          <p>
            Before Node.js, JavaScript was mostly limited to browsers. But with
            Node.js, you can use JavaScript on the server-side to handle
            requests, manage databases, and build full-stack applications.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why Use Node.js?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Single Language:</strong> Use JavaScript for both frontend
              and backend development.
            </li>
            <li>
              <strong>Non-blocking I/O:</strong> Handles multiple requests
              simultaneously without slowing down.
            </li>
            <li>
              <strong>Scalable:</strong> Ideal for building real-time
              applications like chat apps or streaming services.
            </li>
            <li>
              <strong>Huge Ecosystem:</strong> Comes with npm (Node Package
              Manager), offering millions of reusable libraries.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does Node.js Work?
          </h3>
          <p>
            Node.js uses an <em>event-driven, non-blocking I/O model</em>. This
            means instead of waiting for one task to finish, Node.js continues
            processing other tasks in the background, making it efficient and
            fast.
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
{`// Example Node.js server
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js Server!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});`}
          </pre>

          <p>
            In this example:  
            – <code>http</code> module creates a simple web server. <br />
            – The server listens on port <code>3000</code>. <br />
            – When accessed, it responds with <em>"Hello from Node.js Server!"</em>.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            Node.js has transformed JavaScript into a full-stack development
            language. It’s fast, scalable, and perfect for building everything
            from small utilities to large-scale enterprise applications. If you
            know JavaScript, learning Node.js is the natural next step.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NodeBlog;
