import React, { createContext, useState } from "react";

const UserProvider = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    loginStatus: false,
  });

  // logout function to clear the user from state
  const logout = () => {
    setUser(null);
  };

  //This method get called in Login Component
  const login = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export const UserContext = createContext();
