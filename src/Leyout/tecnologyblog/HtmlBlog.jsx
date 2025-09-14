import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";


function HtmlBlog() {
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
          Introduction to HTML
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          The Foundation of Every Website
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            HTML, or <strong>HyperText Markup Language</strong>, is the standard
            language used to create web pages. Think of HTML as the skeleton of
            a website—it structures the content, such as text, images, videos,
            and links, so that a browser can display them properly.
          </p>

          <p>
            Every time you open a website, your browser is reading and
            interpreting HTML. Without it, web pages would not exist in the way
            we know them today.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why is HTML Important?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Foundation of the Web:</strong> All websites are built
              with HTML at their core.
            </li>
            <li>
              <strong>Organizes Content:</strong> It structures headings,
              paragraphs, images, links, and other elements in a readable way.
            </li>
            <li>
              <strong>Works with CSS & JavaScript:</strong> HTML provides the
              structure, CSS adds style, and JavaScript adds interactivity.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does HTML Work?
          </h3>
          <p>
            HTML uses <em>tags</em> to define elements. A tag tells the browser
            what kind of content it is displaying. For example:
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
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}
          </pre>

          <p>
            In the example above:
            <br />
            – <code>&lt;h1&gt;</code> defines a heading. <br />
            – <code>&lt;p&gt;</code> defines a paragraph. <br />
            – <code>&lt;body&gt;</code> contains everything visible on the page.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            HTML is the starting point for anyone learning web development. By
            mastering it, you gain the ability to build and structure content on
            the web. Once comfortable with HTML, you can enhance your websites
            with CSS for styling and JavaScript for interactivity, creating
            modern and engaging web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HtmlBlog;
