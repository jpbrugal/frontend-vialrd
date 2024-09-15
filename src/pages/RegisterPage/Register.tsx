

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import { RegisterUser } from "../../api/S_GestionUsuarios";
import "./Register.css"; // Import the CSS file

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      nombres: name,
      apellidos: lastName,
      numerocelular: phoneNumber,
    };

    const result = await RegisterUser(userData);
    if (result) {
      setMessage("User registered successfully!");
      setTimeout(() => {
        history.push("/login"); // Redirect to login after successful registration
      }, 2000);
    } else {
      setMessage("Error registering user");
    }
  };

  const goToLogin = () => {
    history.push("/login"); // Navigate to login
  };

  return (
    <Container className="container" maxWidth="sm">
      <Box className="formContainer">
        <img src="src/assets/logo.png" alt="VialRD Logo" className="logo" />
        <h1 className="title">Registro</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="inputGroup">
            <TextField
              type="text"
              value={name}
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              variant="outlined"
              id="input"
            />
          </div>
          <div className="inputGroup">
            <TextField
              type="text"
              value={lastName}
              placeholder="Apellido"
              onChange={(e) => setLastName(e.target.value)}
              required
              fullWidth
              variant="outlined"
              id="input"
            />
          </div>
          <div className="inputGroup">
            <TextField
              type="email"
              value={email}
              placeholder="Correo"
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              variant="outlined"
              id="input"
            />
          </div>
          <div className="inputGroup">
            <TextField
              type="password"
              value={password}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              variant="outlined"
              id="input"
            />
          </div>
          <div className="inputGroup">
            <TextField
              type="text"
              value={phoneNumber}
              placeholder="Telefono"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              fullWidth
              variant="outlined"
              id="input"
            />
          </div>
          <Box display="flex" justifyContent="space-between" gap={2} marginTop={2}>
            <Button
              type="button"
              variant="contained"
              id="buttonback"
              sx={{ flex: 1 }}
              onClick={goToLogin}
            >
              Volver
            </Button>
            <Button
              type="submit"
              variant="contained"
              id="buttonregistrar"
              sx={{ flex: 1 }}
            >
              Registrar
            </Button>
          </Box>
        </form>
        {message && <p>{message}</p>}
      </Box>
    </Container>
  );
};

export default Register;
