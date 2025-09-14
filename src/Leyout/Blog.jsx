import React, { useContext } from "react";
import { ColorContext } from "../Color/ColorContext";

function Blog() {
  const { colors } = useContext(ColorContext);

  return (
    <section
      style={{
        background: colors.background,
        color: colors.text,
        transition: "background 0.3s, color 0.3s",
        padding: "3rem 1rem",
      }}
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-bold text-center"
          style={{ color: colors.primary }}
        >
          🚀 Complete Guide to Programming Hero
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed">
          In today’s world, learning programming is not just a skill – it’s one
          of the best ways to build a career. Among the most popular platforms
          for learning programming in Bangladesh is <b>Programming Hero</b>.
        </p>

        {/* What is PH */}
        <h2
          className="text-2xl font-semibold mt-6"
          style={{ color: colors.accent }}
        >
          🔹 What is Programming Hero?
        </h2>
        <p>
          Programming Hero is an <b>E-learning platform</b> where programming
          and software development are taught. It mainly focuses on
          project-based learning. This means students don’t just learn theory –
          they practice every concept hands-on and apply it in real projects.
        </p>

        {/* Who is it for */}
        <h2
          className="text-2xl font-semibold mt-6"
          style={{ color: colors.accent }}
        >
          🔹 Who is Programming Hero for?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Beginners who have no prior knowledge of programming</li>
          <li>People who want to switch careers and become Software Developers</li>
          <li>University students or freelancers looking to expand skills</li>
          <li>
            Anyone aiming for a job or overseas opportunities with IT skills
          </li>
        </ul>

        {/* What you learn */}
        <h2
          className="text-2xl font-semibold mt-6"
          style={{ color: colors.accent }}
        >
          🔹 What do you learn in Programming Hero?
        </h2>
        <p>The most popular course is the Complete Web Development (MERN) course:</p>

        <h3 className="text-xl font-semibold">🖥️ Frontend Development</h3>
        <ul className="list-disc pl-6">
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>React Router</li>
        </ul>

        <h3 className="text-xl font-semibold">⚙️ Backend Development</h3>
        <ul className="list-disc pl-6">
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>

        <h3 className="text-xl font-semibold">🗄️ Database</h3>
        <ul className="list-disc pl-6">
          <li>MongoDB</li>
        </ul>

        <h3 className="text-xl font-semibold">🔧 Tools & Others</h3>
        <ul className="list-disc pl-6">
          <li>Firebase Authentication</li>
          <li>JWT Authentication</li>
          <li>Stripe Payment Gateway</li>
          <li>Git & GitHub</li>
          <li>Vite, NPM, Axios, DaisyUI, etc.</li>
        </ul>

        {/* Learning style */}
        <h2
          className="text-2xl font-semibold mt-6"
          style={{ color: colors.accent }}
        >
          🔹 Learning Style
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>✅ Module-based lessons</li>
          <li>✅ Easy-to-understand video lectures</li>
          <li>✅ Quizzes & challenges</li>
          <li>✅ Assignments with real projects</li>
          <li>✅ Final industry-level project</li>
        </ul>

        {/* Mentor Support */}
        <h2
          className="text-2xl font-semibold mt-6"
          style={{ color: colors.accent }}
        >
          🔹 Mentor Support
        </h2>
        <p>
          One of the strongest parts of Programming Hero is its{" "}
          <b>mentor team</b>. Students can ask questions through Slack/Discord,
          get quick answers, and join live support sessions with feedback.
        </p>

        {/* Career */}
        <h2
          className="text-2xl font-semibold mt-6"
          style={{ color: colors.accent }}
        >
          🔹 Career Support
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>CV/Resume building guidelines</li>
          <li>Mock Interviews</li>
          <li>Portfolio preparation</li>
          <li>Internship & Job Placement opportunities</li>
        </ul>

        {/* Why popular */}
        <h2
          className="text-2xl font-semibold mt-6"
          style={{ color: colors.accent }}
        >
          🔹 Why is Programming Hero Popular?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Project-based learning</li>
          <li>Fun & simple teaching style</li>
          <li>Active student community</li>
          <li>Career-oriented roadmap</li>
          <li>Affordable compared to foreign courses</li>
        </ul>

        {/* Founder */}
        <h2
          className="text-2xl font-semibold mt-6"
          style={{ color: colors.accent }}
        >
          🔹 The Founder
        </h2>
        <p>
          The founder of Programming Hero is <b>Jhankar Mahbub</b>, a
          Bangladeshi-American Software Engineer. He currently works in the USA
          and started Programming Hero with a dream to make programming easy for
          Bangladeshi learners.
        </p>

        {/* Conclusion */}
        <h2
          className="text-2xl font-semibold mt-6"
          style={{ color: colors.accent }}
        >
          🔹 Final Thoughts
        </h2>
        <p>
          Programming Hero is not just a course – it’s a <b>community</b> where
          thousands of students learn, practice, and prepare for their future
          together.  
          <br /> If you want to start learning Web Development or Programming,
          Programming Hero could be your best decision.
        </p>
      </div>
    </section>
  );
}

export default Blog;
