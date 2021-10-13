import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext/UserContext";
import { getFirestore } from "../../firebase";

export default function MyAccount() {
  const { email, login } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const orders = db.collection("orders");
    orders.where("userEmail", "==", email).onSnapshot((querySnapshop) => {
      setUserInfo(
        querySnapshop.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [email]);

  const date = (timestap) => {
    const time = timestap.toDate().toDateString();
    return time;
  };

  if (login && userInfo.length) {
    return (
      <Container className="py-5 text-center">
        <h1 className="py-5">Tus pedidos</h1>
        {userInfo.map((el) => (
          <Row key={el.items[0].id} className="my-5">
            <Col>
              <ul className="p-0">
                Esta es tu lista de pedidos del día {date(el.date)}:
              </ul>
              <li className="p-0">
                {el.items[0].quantity} {el.items[0].title} {"$"}
                {el.items[0].price}
              </li>
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
  if (login && !userInfo.length) {
    return (
      <Container className="py-5 text-center">
        <h1>Aún no hay pedidos</h1>
      </Container>
    );
  }
  if (!login) {
    return (
      <Container className="py-5 text-center">
        <h1>Ups! No estás logueado</h1>
        <Button className="my-4" variant="dark" as={Link} to="/registro">
          Iniciar sesión
        </Button>
      </Container>
    );
  }
}
