import React from "react";
import { Link } from "react-router-dom";

const productDetails = [
  {
    name: "Celestial Vision",
    image: "product1.jpg",
    category: "Abstract",
    price: "$66.00",
  },
  {
    name: "Midnight Mirage",
    image: "product2.jpg",
    category: "Digital",
    price: "$86.00",
  },
  {
    name: "Electric Dreamscape",
    image: "product3.jpg",
    category: "Abstract",
    price: "$186.00",
  },
  {
    name: "Ethereal Odyssey",
    image: "product4.jpg",
    category: "Neo-Futuristic",
    price: "$161.00",
  },
  {
    name: "Neon Jungle",
    image: "product5.jpg",
    category: "Abstract",
    price: "$15.00",
  },
  {
    name: "Cosmic Cascade",
    image: "product6.jpg",
    category: "Digital",
    price: "$76.00",
  },
  {
    name: "Radiant Reverie",
    image: "product7.jpg",
    category: "Neo-Futuristic",
    price: "$45.00",
  },
  {
    name: "Solar Symphony",
    image: "product8.jpg",
    category: "Digital",
    price: "$39.00",
  },
];

const Products = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {productDetails.map((product, index) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
              <a className="block relative h-48 rounded overflow-hidden">
                <Link to="/product" state={product}>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={require(`../assets/${product.image}`)}
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
