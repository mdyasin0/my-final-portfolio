import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";


function MongoDBBlog() {
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
          Introduction to MongoDB
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          A Powerful NoSQL Database
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            MongoDB is a <strong>NoSQL, document-oriented database</strong> that
            stores data in flexible, JSON-like documents. Unlike traditional
            relational databases that use rows and tables, MongoDB uses
            collections and documents, making it highly scalable and efficient
            for modern applications.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why Use MongoDB?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Flexibility:</strong> Schema-less design allows storing
              different types of data in the same collection.
            </li>
            <li>
              <strong>Scalability:</strong> Easily handles large amounts of data
              using sharding and replication.
            </li>
            <li>
              <strong>Performance:</strong> Optimized for high-speed read/write
              operations.
            </li>
            <li>
              <strong>Integration:</strong> Works seamlessly with Node.js and
              Express.js in the MERN stack.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does MongoDB Work?
          </h3>
          <p>
            Data in MongoDB is stored in <strong>collections</strong> (similar to
            tables) and inside collections, data is represented as{" "}
            <strong>documents</strong> (similar to rows), which are structured
            in JSON format.
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
{`// Example: Inserting a document into MongoDB
const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("myDatabase");
    const users = db.collection("users");

    // Insert a new user
    const result = await users.insertOne({ 
      name: "John Doe", 
      age: 25, 
      profession: "Developer" 
    });

    console.log("New user inserted with ID:", result.insertedId);
  } finally {
    await client.close();
  }
}

main().catch(console.error);`}
          </pre>

          <p>
            In this example:  
            – We connect to a MongoDB database. <br />
            – Create a collection called <code>users</code>. <br />
            – Insert a document with user details. <br />
            – The document is automatically stored in JSON-like format.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            MongoDB is a modern, high-performance database solution for
            applications that need flexibility and scalability. Combined with
            Node.js and Express.js, it forms the backbone of the MERN stack,
            making it an essential tool for full-stack developers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MongoDBBlog;
