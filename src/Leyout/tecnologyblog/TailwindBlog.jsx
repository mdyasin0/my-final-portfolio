import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";


function TailwindBlog() {
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
          Introduction to Tailwind CSS
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          A Utility-First Framework for Faster Styling
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Tailwind CSS is a <strong>utility-first CSS framework</strong> that
            allows developers to build modern, responsive, and customizable
            designs directly in their markup. Instead of writing traditional CSS
            files, you use pre-defined utility classes in your HTML or JSX to
            style elements quickly and consistently.
          </p>

          <p>
            Unlike frameworks like Bootstrap, Tailwind doesn’t provide ready-made
            components. Instead, it gives you building blocks (utilities) to
            create custom designs without leaving your HTML.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why Use Tailwind CSS?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Faster Development:</strong> Apply styles directly in your
              HTML/JSX without switching to a CSS file.
            </li>
            <li>
              <strong>Highly Customizable:</strong> Configure colors, fonts, and
              spacing in the Tailwind config file.
            </li>
            <li>
              <strong>Responsive by Default:</strong> Built-in responsive design
              classes like <code>md:</code>, <code>lg:</code>, <code>xl:</code>.
            </li>
            <li>
              <strong>No Naming Hassles:</strong> No need to come up with class
              names—just use Tailwind’s utilities.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does Tailwind Work?
          </h3>
          <p>
            Tailwind provides thousands of small utility classes like{" "}
            <code>text-center</code>, <code>bg-blue-500</code>,{" "}
            <code>p-4</code>, and <code>rounded-lg</code>. You combine these
            classes in your HTML to design elements.
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
{`<!-- Example Tailwind HTML -->
<div class="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
  <h1 class="text-3xl font-bold mb-4">Hello, Tailwind!</h1>
  <p class="text-lg">This is a styled card using utility classes.</p>
  <button class="mt-4 bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
    Click Me
  </button>
</div>`}
          </pre>

          <p>
            In this example:  
            – <code>bg-blue-500</code> sets the background color. <br />
            – <code>p-6</code> adds padding. <br />
            – <code>rounded-lg</code> makes corners rounded. <br />
            – <code>shadow-lg</code> adds a drop shadow.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            Tailwind CSS is a game-changer for frontend development. It speeds
            up the design process, keeps your styles consistent, and allows you
            to create fully responsive, modern interfaces without writing a
            single line of custom CSS. Once you master Tailwind, you’ll find it
            hard to go back to traditional styling methods.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TailwindBlog;
