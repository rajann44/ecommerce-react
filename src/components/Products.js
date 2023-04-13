import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrderDetailsFromDbForSpecificUser } from "../firebase/Database/OrdersFirebase";
import { getProductDetailsFromDb } from "../firebase/Database/ProductsFirebase";

const Products = () => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    async function getProductDetails() {
      setProductDetails([]); //I have explicitly set it empty, so that there is no previous state stored (to avoid duplicate cards on screen)
      const productData = await getProductDetailsFromDb();
      productData.forEach((product) => {
        setProductDetails((prv) => [...prv, { ...product.data() }]);
      });
    }
    getProductDetails();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="relative py-10">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-white text-sm text-gray-500">
            More ranges from different Arts
          </span>
        </div>
      </div>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {productDetails.map((product, index) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
              <a className="block relative h-48 rounded overflow-hidden">
                <Link to="/product" state={product}>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </Link>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY: {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
