import {
  addDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
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

export const getOrderDetailsFromDb = async (userID) => {
  // let allOrders = null;
  // const queryResult = query(ordersReference, where("uid", "==", userID));
  // const querySnapshot = await getDocs(queryResult);
  // querySnapshot.forEach(async (singleResult) => {
  //   allOrders = console.log(singleResult.data());
  // });
  // return allOrders;
  const queryResult = query(ordersReference, where("uid", "==", userID));
  const querySnapshot = await getDocs(queryResult);
  const promises = querySnapshot.docs.map((doc) => doc.data());
  const allOrders = await Promise.all(promises);
  return allOrders;
};
