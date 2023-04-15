import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import SignIn from "./components/SignInUp/SignIn";
import SignUp from "./components/SignInUp/SignUp";
import TopBanner from "./components/Banner/TopBanner";
import UserProvider from "./context/UserProvider";
import Order from "./components/Order";
import Notification from "./components/Notification/Notification";
import NotificationProvider from "./context/NotificationProvider";
import Marketing from "./components/Banner/Marketing";
import Category1 from "./components/Products/Category1";
import Category2 from "./components/Products/Category2";
import Category3 from "./components/Products/Category3";

function App() {
  return (
    <UserProvider>
      <NotificationProvider>
        <Header></Header>
        <Notification></Notification>
        <Routes>
          <Route
            path="/"
            element={[
              <TopBanner></TopBanner>,
              <Products></Products>,
              <Marketing></Marketing>,
            ]}
          ></Route>
          <Route
            path="/product"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>
          <Route path="/cat1" element={<Category1></Category1>}></Route>
          <Route path="/cat2" element={<Category2></Category2>}></Route>
          <Route path="/cat3" element={<Category3></Category3>}></Route>
        </Routes>

        <Footer></Footer>
      </NotificationProvider>
    </UserProvider>
  );
}

export default App;
