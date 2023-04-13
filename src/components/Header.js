import React from "react";
import { Link } from "react-router-dom";
import ProfileFlyoutMenu from "./Menu/ProfileFlyoutMenu";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-gray-900">Category 1</a>
          <a className="mr-5 hover:text-gray-900">Category 2</a>
          <a className="hover:text-gray-900">Category 3</a>
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
          <ProfileFlyoutMenu></ProfileFlyoutMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
