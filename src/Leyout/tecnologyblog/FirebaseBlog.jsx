import React, { useContext } from "react";
import { ColorContext } from "../../Color/ColorContext";


function FirebaseBlog() {
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
          Introduction to Firebase
        </h1>
        <h2
          className="text-xl md:text-2xl font-semibold mb-10 text-center"
          style={{ color: colors.accent }}
        >
          A Complete Backend-as-a-Service Platform
        </h2>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Firebase is a <strong>Backend-as-a-Service (BaaS)</strong> platform
            developed by Google. It provides developers with ready-to-use
            backend services like real-time databases, authentication, hosting,
            cloud functions, and more, allowing them to focus on building
            front-end applications without worrying about server setup.
          </p>

          <p>
            Firebase is widely used in modern web and mobile development because
            it simplifies backend management and offers scalable, secure,
            real-time solutions.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Why Use Firebase?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Real-time Database:</strong> Sync data instantly between
              clients and the cloud.
            </li>
            <li>
              <strong>Authentication:</strong> Built-in support for email/password,
              Google, Facebook, and other login providers.
            </li>
            <li>
              <strong>Hosting & Cloud Functions:</strong> Easily host your app
              and run server-side code without managing servers.
            </li>
            <li>
              <strong>Scalable & Secure:</strong> Automatically scales with your
              application while providing security rules for data access.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            How Does Firebase Work?
          </h3>
          <p>
            Firebase provides SDKs for web, iOS, and Android. You can integrate
            Firebase services directly into your application and use their APIs
            to store data, authenticate users, or deploy your app.
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
{`// Example: Adding data to Firebase Firestore
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a document
async function addUser() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "John Doe",
      age: 25,
      profession: "Developer"
    });
    console.log("User added with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding user:", e);
  }
}

addUser();`}
          </pre>

          <p>
            In this example:  
            – We initialize Firebase with <code>initializeApp()</code>. <br />
            – Access Firestore database with <code>getFirestore()</code>. <br />
            – Add a document to the <code>users</code> collection with
            <code>addDoc()</code>. <br />
            – Firebase handles storage, security, and real-time syncing.
          </p>

          <h3 className="text-2xl font-bold mt-8" style={{ color: colors.primary }}>
            Conclusion
          </h3>
          <p>
            Firebase is a powerful tool for developers who want to build
            modern, real-time, and scalable applications without managing
            servers. It integrates seamlessly with web and mobile apps and is
            an essential service for full-stack developers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FirebaseBlog;
