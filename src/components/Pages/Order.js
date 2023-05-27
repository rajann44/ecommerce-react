import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import { getOrderDetailsFromDb } from "../../firebase/Database/OrdersFirebase";

const Order = () => {
  const { user } = useContext(UserContext);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    async function getOrderDetails() {
      setOrderDetails([]); //I have explicitly set it empty, so that there is no previous state stored (to avoid duplicate cards on screen)
      const orderData = await getOrderDetailsFromDb(user.uid);
      console.log(orderData);
      orderData.forEach((order) => {
        setOrderDetails((prv) => [...prv, { ...order }]);
      });
    }
    getOrderDetails();
  }, []);

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white">
      <div class="max-w-6xl mx-auto py-12 sm:px-6 sm:py-12">
        <div class="px-2 sm:px-0">
          <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Order history
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and download
            invoices.
          </p>
        </div>

        <div class="mt-16">
          <h2 class="sr-only">Recent orders</h2>
          {orderDetails.map((product, index) => (
            <div class="space-y-16 sm:space-y-24" key={index}>
              <div>
                <h3 class="sr-only">
                  Order placed on{" "}
                  <time datetime="2021-01-22">{"RAJAN ADD KRO DATE"}</time>
                </h3>

                <div class="bg-blue-200 px-4 py-6 mt-8 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                  <dl class="divide-y divide-gray-200 space-y-4 text-sm text-gray-600 flex-auto md:divide-y-0 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                    <div class="flex justify-between md:block">
                      <dt class="font-medium text-gray-900">Order number</dt>
                      <dd class="md:mt-1">{product.oid}</dd>
                    </div>
                    <div class="flex justify-between pt-4 md:block md:pt-0">
                      <dt class="font-medium text-gray-900">Date placed</dt>
                      <dd class="md:mt-1">
                        <time datetime="2021-01-22">
                          {product.date.toDate().toLocaleDateString(undefined, {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </dd>
                    </div>
                    <div class="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0">
                      <dt>Total amount</dt>
                      <dd class="md:mt-1">${product.total}</dd>
                    </div>
                  </dl>
                  <div class="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                    >
                      View Order
                      <span class="sr-only">WU88191111</span>
                    </a>
                    <a
                      href="#"
                      class="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                    >
                      View Invoice
                      <span class="sr-only">for order WU88191111</span>
                    </a>
                  </div>
                </div>

                <div class="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                  <div class="-my-6 divide-y divide-gray-200 sm:-my-10">
                    {product.items.map((productItem, index) => (
                      <div class="flex py-6 sm:py-10">
                        <div class="min-w-0 flex-1 lg:flex lg:flex-col">
                          <div class="lg:flex-1">
                            <div class="sm:flex">
                              <div>
                                <h4 class="font-medium text-gray-900">
                                  {productItem.name}
                                </h4>
                                <p class="hidden mt-2 text-sm text-gray-500 sm:block">
                                  This durable double-walled insulated tumbler
                                  keeps your beverages at the perfect
                                  temperature all day long. Hot, cold, or even
                                  lukewarm if you&#039;re weird like that, this
                                  bottle is ready for your next adventure.
                                </p>
                              </div>
                              <p class="mt-1 font-medium text-gray-900 sm:mt-0 sm:ml-6">
                                {productItem.price}
                              </p>
                            </div>
                            <div class="mt-2 flex text-sm font-medium sm:mt-4">
                              <a
                                href="#"
                                class="text-indigo-600 hover:text-indigo-500"
                              >
                                View Product
                              </a>
                              <div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                                <a
                                  href="#"
                                  class="text-indigo-600 hover:text-indigo-500"
                                >
                                  Buy Again
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="mt-2 font-medium">
                            <p>Out for delivery</p>
                          </div>
                        </div>

                        <div class="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
                          <img
                            src={productItem.image}
                            alt="Olive drab green insulated bottle with flared screw lid and flat top."
                            class="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-30 sm:h-30 lg:w-40 lg:h-40"
                          />
                        </div>
                      </div>
                    ))}

                    {/* <!-- More products... --> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
