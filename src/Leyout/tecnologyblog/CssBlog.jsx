import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";


function CssBlog() {
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
          Introduction to CSS
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          Adding Style and Design to the Web
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            CSS, or <strong>Cascading Style Sheets</strong>, is the language
            used to style and design web pages. While HTML builds the structure
            of a webpage, CSS makes it visually attractive by adding colors,
            fonts, layouts, and animations.
          </p>

          <p>
            Without CSS, every webpage would look plain and unstyled—just black
            text on a white background. CSS brings creativity and aesthetics to
            the web.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why is CSS Important?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Improves Appearance:</strong> Adds colors, fonts, spacing,
              and layout design.
            </li>
            <li>
              <strong>Responsive Design:</strong> Makes websites adapt to
              different screen sizes (mobile, tablet, desktop).
            </li>
            <li>
              <strong>Separation of Concerns:</strong> HTML handles structure,
              CSS handles styling—making websites easier to manage.
            </li>
            <li>
              <strong>Animations and Effects:</strong> Adds smooth transitions,
              hover effects, and modern interactions.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does CSS Work?
          </h3>
          <p>
            CSS works by selecting HTML elements and applying style rules to
            them. Each rule consists of a <em>selector</em> (which element to
            style) and a set of <em>properties</em> (what styles to apply).
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
{`/* Example CSS */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #007acc;
  text-align: center;
}

p {
  font-size: 18px;
  line-height: 1.6;
}` }
          </pre>

          <p>
            In the example above:  
            – <code>body</code> sets the background and font for the whole page. <br />
            – <code>h1</code> changes the heading’s color and alignment. <br />
            – <code>p</code> adjusts text size and spacing.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Types of CSS
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Inline CSS:</strong> Written directly inside an HTML
              element using the <code>style</code> attribute.
            </li>
            <li>
              <strong>Internal CSS:</strong> Written inside a{" "}
              <code>&lt;style&gt;</code> tag in the HTML file.
            </li>
            <li>
              <strong>External CSS:</strong> Written in a separate{" "}
              <code>.css</code> file and linked to the HTML file (most common
              method).
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            CSS is what transforms a simple HTML structure into a professional,
            modern-looking website. It’s an essential skill for every web
            developer. By combining CSS with HTML and JavaScript, you can create
            responsive, interactive, and visually stunning web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CssBlog;
