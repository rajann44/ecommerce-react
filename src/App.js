import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Banner from "./components/Banner";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={[<Banner></Banner>, <Products></Products>]}
        ></Route>
        <Route
          path="/product"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
