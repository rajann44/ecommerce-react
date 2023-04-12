import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="hover:text-gray-900">Fourth Link</a>
        </nav>

        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              stroke="#ffa07a"
              strokeWidth="20"
              fill="none"
            />
          </svg>
          <Link to="/">
            <span className="ml-3 text-xl">Ecom-Reactify</span>
          </Link>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {user?.loginStatus && (
            <div className="inline-flex items-center py-1 px-3 text-base mt-4 md:mt-0">
              Hello! {user.email.match(/^([^@]*)@/)[1].toUpperCase()}
            </div>
          )}
          <Link to="/checkout">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Cart
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
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-500 rounded-full">
                {user.products.length}
              </span>
            </button>
          </Link>
          {user?.loginStatus ? (
            <Link to="/">
              <button
                className="inline-flex items-center bg-blue-500 text-cyan-50 border-0 py-1 px-3 mx-2 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0"
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
              <button className="inline-flex items-center bg-blue-500 text-cyan-50 border-0 py-1 px-3 mx-2 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0">
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
      </div>
    </header>
  );
};

export default Header;
