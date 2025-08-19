import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Redirect logged-in users automatically
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/placement");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSignup = async () => {
    if (!email.endsWith("@anurag.edu.in")) {
      alert("Only Anurag University students can signup!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/placement"); // redirect after signup
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupPage;
