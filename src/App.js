import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import SignIn from "./components/SignInUp/SignIn";
import SignUp from "./components/SignInUp/SignUp";
import TopBanner from "./components/Banner/TopBanner";
import BottomBanner from "./components/Banner/BottomBanner";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={[
            <TopBanner></TopBanner>,
            <Products></Products>,
            <BottomBanner></BottomBanner>,
          ]}
        ></Route>
        <Route
          path="/product"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      <Footer></Footer>
    </UserProvider>
  );
}

export default App;
