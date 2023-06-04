import React, { useState } from "react";
import { Stack, FloatingLabel, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginInput = ({ handleClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack gap={2} className="my-auto p-4">
      <h1>Login</h1>
      <p>Yuks Login terlebih dahulu ...</p>
      <FloatingLabel label="Username">
        <Form.Control
          type="text"
          placeholder="Username"
          id="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel label="Password mu ...">
        <Form.Control
          type="password"
          placeholder="Password"
          id="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FloatingLabel>
      <Button
        id="btnReg"
        style={{ minHeight: "55px" }}
        className="mb-2 border-0"
        disabled={username && password ? false : true}
        onClick={() => handleClick({ username, password })}
      >
        Login
      </Button>
      <Link id="link" to="/register" className=" nav-link">
        Belum punya akun?
      </Link>
    </Stack>
  );
};

export default LoginInput;
