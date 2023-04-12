import React from "react";
import { Link } from "react-router-dom";

const productDetails = [
  {
    name: "Celestial Vision",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Sebastiano_Ricci_002.jpg",
    category: "Abstract",
    price: "$66.00",
  },
  {
    name: "Midnight Mirage",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/%22Human_robot.jpg",
    category: "Digital",
    price: "$86.00",
  },
  {
    name: "Electric Dreamscape",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/0167%28a%29.RAMONA_VINSON.CHARCOAL_ON_PAPER.ca.1920%27s.8.75%22x12.5%22.FRONT.jpg",
    category: "Abstract",
    price: "$186.00",
  },
  {
    name: "Ethereal Odyssey",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/1_Weltfeld_Helianthus_XIV_Pastell_140x120.jpg",
    category: "Neo-Futuristic",
    price: "$161.00",
  },
  {
    name: "Neon Jungle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/1-miragem%2C2003%2Cs%C3%A9rie_Feuerbach%2C.jpg",
    category: "Abstract",
    price: "$15.00",
  },
  {
    name: "Cosmic Cascade",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/1-Igarap%C3%A9%2C2009%2Cs%C3%A9rie_Feuerbach.jpg",
    category: "Digital",
    price: "$76.00",
  },
  {
    name: "Radiant Reverie",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/1981_was_on_consignment_at_betty_parsons_gallery_new_york%2C_and_included_in_a_solo_exhibition_at_william_francis_gallery_1981%2C_acrylic_on_matboard%2C_cut%2C_pealed_or_carved_paper%2C_8X10in.jpg",
    category: "Neo-Futuristic",
    price: "$45.00",
  },
  {
    name: "Solar Symphony",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/%22Confidenze_segrete%22.jpg",
    category: "Digital",
    price: "$39.00",
  },
];

const Products = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
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
