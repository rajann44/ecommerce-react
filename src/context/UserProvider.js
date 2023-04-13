import React, { createContext, useState } from "react";

const UserProvider = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    uid: "",
    loginStatus: false,
    products: [],
  });

  // logout function to clear the user from state
  const logout = () => {
    setUser({ email: "", password: "", loginStatus: false, products: [] });
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
    setUser((prevUserData) => {
      const index = prevUserData.products.findIndex(
        (product) => product.id === productId
      );

      if (index !== -1) {
        const updatedProducts = [...prevUserData.products];
        const productToRemove = updatedProducts[index];

        // Remove only one instance of the product from the array
        updatedProducts.splice(index, 1);

        // If there are still other instances of the product, update its quantity
        if (productToRemove.quantity > 1) {
          productToRemove.quantity--;
          updatedProducts.splice(index, 0, productToRemove);
        }

        return {
          ...prevUserData,
          products: updatedProducts,
        };
      }

      return prevUserData;
    });
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
