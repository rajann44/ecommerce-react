import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const ProfileFlyoutMenu = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleFlyOutToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    //   return <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative">
      {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
      <button
        type="button"
        class="inline-flex items-center bg-blue-500 text-cyan-50 border-0 py-1 px-3 mx-2 focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0"
        aria-expanded="false"
        onClick={handleFlyOutToggle}
      >
        <span>
          {user?.loginStatus
            ? `Hello! ${user.email.match(/^([^@]*)@/)[1]}`
            : "Hello! Sign in"}
        </span>
        {/* <!--
        Heroicon name: solid/chevron-down
  
        Item active: "text-gray-600", Item inactive: "text-gray-400"
      --> */}
        <svg
          class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          stroke="white"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      {/* <!--
      Flyout menu, show/hide based on flyout menu state.
  
      Entering: "transition ease-out duration-200"
        From: "opacity-0 translate-y-1"
        To: "opacity-100 translate-y-0"
      Leaving: "transition ease-in duration-150"
        From: "opacity-100 translate-y-0"
        To: "opacity-0 translate-y-1"
    --> */}
      <div
        class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
        style={{ display: isToggled ? "" : "none" }}
      >
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <Link to="/cart">
              <a
                href="#"
                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
              >
                {/* <!-- Heroicon name: outline/chart-bar --> */}
                <svg
                  class="flex-shrink-0 h-6 w-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    You have
                    <span class="inline-flex items-center justify-center px-2 py-1 mx-1 text-xs font-bold leading-none text-red-100 bg-blue-500 rounded-full">
                      {user?.products.length}
                    </span>
                    items in Cart
                  </p>

                  <p class="mt-1 text-sm text-gray-500">
                    and counting - ready to checkout?
                  </p>
                </div>
              </a>
            </Link>

            <Link to="/order">
              <a
                //   href="#"
                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
              >
                {/* <!-- Heroicon name: outline/cursor-click --> */}
                <svg
                  class="flex-shrink-0 h-6 w-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">Your orders</p>
                  <p class="mt-1 text-sm text-gray-500">
                    View your order history - track your journey with us.
                  </p>
                </div>
              </a>
            </Link>

            {user?.loginStatus ? (
              <Link to="/">
                <button
                  className="inline-flex w-full items-center bg-red-500 text-cyan-50 border-0 py-1 px-3 mx-2 focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Sign out
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            ) : (
              <Link to="/signin">
                <button className="inline-flex w-full items-center bg-blue-500 text-cyan-50 border-0 py-1 px-3 mx-2 focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0">
                  Sign in
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            )}
          </div>
          <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
            <div class="flow-root">
              <a
                href="#"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
              >
                {/* <!-- Heroicon name: outline/play --> */}
                <svg
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="ml-3">Watch Demo</span>
              </a>
            </div>

            <div class="flow-root">
              <a
                href="#"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
              >
                {/* <!-- Heroicon name: outline/phone --> */}
                <svg
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span class="ml-3">Contact Sales</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFlyoutMenu;
