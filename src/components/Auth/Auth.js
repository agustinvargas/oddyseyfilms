import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { auth } from "../../firebase";
import AlertForm from "../Alert/Alert";
import { useHistory } from "react-router";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();

  const userRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => history.push("/mi-cuenta/detalles"))
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          setError("Contraseña inválida");
        }
        if (err.code === "auth/weak-password") {
          setError("Tu contraseña debe tener un mínimo de 6 caracteres");
        }
      });
  };

  const userLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => history.push("/mi-cuenta/detalles"))
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
            setError("Contraseña inválida");
          }
      });
  };

  return (
    <Form onSubmit={userRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mx-2">
        Registrarme
      </Button>
      <Button variant="success" onClick={() => userLogin()}>
        Iniciar sesión
      </Button>
      {error ? <AlertForm state={true} heading="Error" text={error} /> : null}
    </Form>
  );
}
