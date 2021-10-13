import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext/UserContext";
import { getFirestore } from "../../firebase";

export default function MyAccount() {
  const { email, login } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    console.log(email);
    console.log("USER INFO", userInfo);
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

  console.log(email);
  console.log("USER INFO", userInfo);
  return login && userInfo.length > 0 ? (
    userInfo.map((el) => (
      <>
        <h1>Hola, {el.buyer.name}</h1>
        <p>Esta es tu lista de pedidos:</p>
        <p>
          {el.items[0].quantity} {el.items[0].title} ($ {el.items[0].price})
        </p>
      </>
    ))
  ) : (
    <h1>No has realizado ninguna compra</h1>
  );
}
