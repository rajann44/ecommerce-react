import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductDetailsFromDb } from "../../firebase/Database/ProductsFirebase";

const Category3 = () => {
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
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {productDetails.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                  src={product.image}
                  //   alt={product.imageAlt}
                  className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link to="/product" state={product}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    {/* {product.options} */}
                  </p>
                  <p className="text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category3;
