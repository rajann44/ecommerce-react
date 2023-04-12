import React, { createContext, useState } from "react";

const UserProvider = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    loginStatus: false,
    products: [],
  });

  // logout function to clear the user from state
  const logout = () => {
    setUser(null);
  };

  //This method get called in Login Component
  const login = (userData) => {
    setUser(userData);
  };

  //Add products to user, so that we can show it in cart
  const addProductToCart = (productInfo) => {
    setUser((prevUserData) => ({
      ...prevUserData,
      products: [...prevUserData.products, productInfo],
    }));
  };

  //Remove product from user, so that its updated in cart
  const removeProductFromCart = (productId) => {
    setUser((prevUserData) => ({
      ...prevUserData,
      products: prevUserData.products.filter(
        (product) => product.id !== productId
      ),
    }));
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, addProductToCart, removeProductFromCart }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export const UserContext = createContext();
