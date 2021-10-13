import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(false);

  return (
    <UserContext.Provider
      value={{
        login,
        setLogin,
        email,
        setEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
