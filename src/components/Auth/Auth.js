import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { auth } from "../../firebase";
import AlertForm from "../Alert/Alert";
import { useHistory } from "react-router";
import { UserContext } from "../../contexts/userContext/UserContext";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

export default function Auth() {
  const { email, setEmail } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();

  const userRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setError(null);
        history.push("/mi-cuenta");
      })
      .catch((err) => {
        if (
          err.code === "auth/invalid-email" ||
          err.code === "auth/missing-email"
        ) {
          setError("Correo inválido");
        }
        if (err.code === "auth/weak-password") {
          setError("Tu contraseña debe tener un mínimo de 6 caracteres");
        }
        if (err.code === "auth/email-already-in-use") {
          setError("Ya hay una cuenta creada con ese correo");
        }
        console.log(err.code);
      });
  };

  const userLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setError(null);
        history.push("/mi-cuenta");
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setError("Contraseña inválida");
        }
        if (err.code === "auth/internal-error") {
          setError("Ocurrió un error. Chequeá que los datos estén correctos");
        }
        console.log(err.code);
      });
  };

  const userLoginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setEmail(result.user.email);
        history.push("/mi-cuenta");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userLoginFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => history.push("/mi-cuenta"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="m-auto">
      <Row className="align-items-end">
        <Col className="p-5">
          <Form onSubmit={userRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </Form.Group>
            <Button
              className="d-bloc w-100 my-1"
              variant="primary"
              type="submit"
            >
              Registrarme
            </Button>
          </Form>
        </Col>
        <Col className="p-5">
          <Button
            className="d-bloc w-100 my-1"
            variant="success"
            onClick={() => userLogin()}
          >
            Iniciar sesión
          </Button>
          <Button
            className="d-bloc w-100 my-1"
            variant="danger"
            onClick={() => userLoginGoogle()}
          >
            Ingresar con Google
          </Button>
          <Button
            className="d-bloc w-100 my-1"
            variant="primary"
            onClick={() => userLoginFacebook()}
          >
            Ingresar con Facebook
          </Button>
        </Col>
        {error ? <AlertForm state={true} heading="Error" text={error} /> : null}
      </Row>
    </Container>
  );
}
