import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";

function GitBlog() {
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
          Introduction to Git
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          Version Control Made Easy
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Git is a <strong>distributed version control system</strong> that
            helps developers track changes in code, collaborate with teams, and
            manage project history efficiently. Created by Linus Torvalds, Git
            is now the standard tool for version control in software development.
          </p>

          <p>
            With Git, developers can maintain multiple versions of their code,
            experiment with new features, and merge changes without losing
            progress.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why Use Git?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Version History:</strong> Track every change made to your
              codebase and revert if needed.
            </li>
            <li>
              <strong>Collaboration:</strong> Multiple developers can work on
              the same project simultaneously.
            </li>
            <li>
              <strong>Branching:</strong> Experiment with new features safely
              without affecting the main code.
            </li>
            <li>
              <strong>Integration:</strong> Works with GitHub, GitLab, and other
              remote repositories for cloud-based collaboration.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does Git Work?
          </h3>
          <p>
            Git tracks changes using a repository, which contains all project
            files and history. Each change is saved as a commit, which has a
            unique ID. Developers can create branches, merge them, and manage
            project history efficiently.
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
{`# Example Git Commands

# Initialize a new Git repository
git init

# Check status of files
git status

# Add files to staging area
git add .

# Commit changes with a message
git commit -m "Initial commit"

# Push changes to remote repository
git push origin main`}
          </pre>

          <p>
            In this example:  
            – <code>git init</code> creates a new Git repository. <br />
            – <code>git add</code> stages files for commit. <br />
            – <code>git commit</code> saves a snapshot of changes. <br />
            – <code>git push</code> uploads changes to a remote repository.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            Git is an essential tool for developers to manage code, collaborate
            with teams, and maintain a clean project history. Mastering Git
            ensures smooth workflow and professional software development
            practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GitBlog;
