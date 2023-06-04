import React, { useState } from "react";
import { Stack, FloatingLabel, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterInput = ({ handleClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const payload = { name, email, username, password };

  return (
    <Stack gap={2} className="my-auto p-4">
      <h1>Register</h1>
      <p>Yuks daftar terlebih dahulu ...</p>
      <FloatingLabel label="Nama mu ...">
        <Form.Control
          type="text"
          placeholder="Nama"
          id="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel label="Alamat Email">
        <Form.Control
          type="email"
          placeholder="Email"
          id="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FloatingLabel>
      <Row>
        <Col className="pe-0">
          <FloatingLabel label="Username">
            <Form.Control
              type="text"
              placeholder="Username"
              id="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label="Password mu ...">
            <Form.Control
              type="password"
              placeholder="Password"
              id="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Button
        id="btnReg"
        style={{ minHeight: "55px" }}
        className="mb-2 border-0"
        disabled={username && password ? false : true}
        onClick={() => handleClick(payload)}
      >
        Register
      </Button>
      <Link id="link" to="/login" className=" nav-link">
        Sudah punya akun?
      </Link>
    </Stack>
  );
};

export default RegisterInput;
