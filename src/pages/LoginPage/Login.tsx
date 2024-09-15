import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Container,
} from "@mui/material";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const goToHome = () => {
    history.push("/home");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setMessage(`Welcome ${user.email}`);
      goToHome();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage("Error logging in: " + error.message);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  const goToRegister = () => {
    history.push("/register");
  };

  return (
    <Container className="container" maxWidth="sm">
      <Box className="formContainer">
        <img src="src/assets/logo.png" alt="VialRD Logo" className="logo" />
        <h1 className="title">VialRD</h1>
        <form onSubmit={handleLogin} className="form">
          <div className="inputGroup">
            <TextField
              type="email"
              value={email}
              // label="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              variant="outlined"
              className="input"
            />
          </div>
          <div className="inputGroup">
            <TextField
              type="password"
              value={password}
              // label="Contraseña"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              variant="outlined"
              className="input"
            />
          </div>
          <Link href="#" variant="body2" className="forgotPassword">
            Olvidé mi contraseña
          </Link>
          <Box display="flex" justifyContent="space-between" gap={2}>
            <Button
              type="button"
              onClick={goToRegister}
              variant="contained"
              id="buttonregister"
              sx={{ flex: 1 }}
            >
              Registro
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="buttonlogin"
              sx={{ flex: 1 }}
            >
              Login
            </Button>
          </Box>
        </form>
        {message && <p>{message}</p>}
      </Box>
    </Container>
  );
};

export default Login;
