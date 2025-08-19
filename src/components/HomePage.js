import React, { useState } from "react";
import { Container, Typography, Button, TextField, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    if (!password) {
      alert("Please enter a password");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/placement"); // go to dashboard after login
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign up successful! Please login.");
        setIsLogin(true); // switch to login after signup
        setPassword("");
      }
    } catch (error) {
      if (error.code === "auth/wrong-password") alert("Password incorrect");
      else if (error.code === "auth/user-not-found") alert("Email not found");
      else if (error.code === "auth/email-already-in-use") alert("Email already exists. Please login.");
      else alert(error.message);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={5} style={{ padding: "30px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Anurag University Placements
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          {isLogin ? "Login to your account" : "Create a new account"}
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
          onClick={handleSubmit}
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>

        <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
          <Grid item>
            <Button onClick={handleToggle} color="secondary">
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default HomePage;
