import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductDetailsFromDb } from "../../firebase/Database/ProductsFirebase";

const Category1 = () => {
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
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Category 1 Products</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {productDetails.map((product, index) => (
            <div>
              <div className="relative">
                <div
                  className="relative w-full h-72 rounded-lg overflow-hidden"
                  key={index}
                >
                  <Link to="/product" state={product}>
                    <img
                      alt="ecommerce"
                      src={product.image}
                      className="w-full h-full object-center object-cover"
                    />
                  </Link>
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    CATEGORY: {product.category}
                  </p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  //   href={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category1;
