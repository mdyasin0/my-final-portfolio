import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";


function JavaScriptBlog() {
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
          Introduction to JavaScript
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          The Language of the Web
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            JavaScript is a <strong>high-level, dynamic programming language</strong> that
            powers the interactive elements of websites. While HTML provides the
            structure and CSS adds styling, JavaScript makes web pages dynamic
            and interactive.
          </p>

          <p>
            It runs directly in the browser and allows you to respond to user
            actions like button clicks, form submissions, animations, and much
            more.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why is JavaScript Important?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Interactivity:</strong> Enables dropdowns, sliders,
              modals, games, and animations.
            </li>
            <li>
              <strong>Client-Side Logic:</strong> Validates forms, processes
              data, and improves user experience without reloading the page.
            </li>
            <li>
              <strong>Universal Use:</strong> Works on both frontend (with
              browsers) and backend (using Node.js).
            </li>
            <li>
              <strong>Huge Ecosystem:</strong> Thousands of libraries and
              frameworks (React, Angular, Vue, etc.).
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does JavaScript Work?
          </h3>
          <p>
            JavaScript runs in the browser using a JavaScript engine (like
            Google’s V8 in Chrome). You can write JavaScript code inside{" "}
            <code>&lt;script&gt;</code> tags in your HTML or in separate{" "}
            <code>.js</code> files.
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
{`<!-- Example JavaScript -->
<!DOCTYPE html>
<html>
  <head>
    <title>JS Example</title>
  </head>
  <body>
    <h1 id="title">Hello, JavaScript!</h1>
    <button onclick="changeText()">Click Me</button>

    <script>
      function changeText() {
        document.getElementById("title").innerText = "You clicked the button!";
      }
    </script>
  </body>
</html>`}
          </pre>

          <p>
            In this example:  
            – <code>onclick</code> listens for a button click. <br />
            – The <code>changeText()</code> function changes the heading text
            dynamically. <br />
            – This shows how JavaScript adds interactivity to static HTML.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            JavaScript is the backbone of interactive web development. By
            learning it, you can build everything from simple interactive pages
            to full-scale web applications. Together with HTML and CSS, it forms
            the core foundation of the web.
          </p>
        </div>
      </div>
    </section>
  );
}

export default JavaScriptBlog;
