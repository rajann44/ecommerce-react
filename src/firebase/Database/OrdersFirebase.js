import { addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import { ordersReference } from "../FireApp";

export const calculateCartTotal = (user) => {
  let productSubTotal = user.products.reduce(
    (accumulator, product) =>
      accumulator + parseFloat(product.price.replace("$", "")),
    0
  );
  return productSubTotal;
};

export const createOrder = async (userData) => {
  try {
    await addDoc(ordersReference, {
      date: serverTimestamp(),
      items: userData.products,
      total: calculateCartTotal(userData),
      uid: userData.uid,
      oid: Math.random().toString(36).slice(2),
    });
    console.log("Order was successful");
  } catch (error) {
    console.log("Order was unsuccessful" + error);
  }
};

//Get list of all users
export const getOrderDetailsFromDb = async () => {
  const orderList = await getDocs(ordersReference);
  return orderList;
};
