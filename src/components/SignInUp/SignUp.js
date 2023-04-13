import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupAndUploadUserInfoToDb } from "../../firebase/Database/UsersFirebase";

const SignUp = () => {
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    // Call the function like this:
    (async () => {
      const result = await signupAndUploadUserInfoToDb(signupForm);
      console.log(result);
      if (result !== null) {
        navigate("/signin");
        console.log("User signup successful");
      } else {
        console.log("User signup failed");
      }
    })();
  };

  return (
    <div class="flex min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50">
      <div class="relative">
        <div class="hidden sm:block h-56 w-56 text-blue-300 absolute a-z-10 -left-20 -top-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.6) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  stroke-width="1"
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#a)"
            />
          </svg>
        </div>
        <div class="hidden sm:block h-28 w-28 text-blue-300 absolute a-z-10 -right-20 -bottom-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="b"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.5) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  stroke-width="1"
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#b)"
            />
          </svg>
        </div>
        {/* <!-- Register --> */}
        <div class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div class="flex-auto p-6">
            {/* <!-- Logo --> */}
            <div class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <a
                href="#"
                class="flex cursor-pointer items-center gap-2 text-blue-500 no-underline hover:text-blue-500"
              >
                <span class="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">
                  Ecom-Reactify
                </span>
              </a>
            </div>
            {/* <!-- /Logo --> */}
            <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">
              Welcome to the shopping web!
            </h4>
            <p class="mb-6 text-gray-500">
              Please sign-up to create your account
            </p>

            <form id="" class="mb-4">
              <div class="mb-4">
                <label
                  for="email"
                  class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email"
                  autofocus=""
                  onChange={(event) =>
                    setSignupForm({ ...signupForm, email: event.target.value })
                  }
                />
              </div>
              <div class="mb-4">
                <div class="flex justify-between">
                  <label
                    class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    for="password"
                  >
                    Password
                  </label>
                </div>
                <div class="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="password"
                    id="password"
                    class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    name="password"
                    placeholder="············"
                    onChange={(event) =>
                      setSignupForm({
                        ...signupForm,
                        password: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div class="mb-4">
                <button
                  class="grid w-full cursor-pointer select-none rounded-md border border-blue-500 bg-blue-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:border-blue-600 focus:bg-blue-600 focus:text-white focus:shadow-none"
                  onClick={(e) => handleSignup(e)}
                >
                  Sign up
                </button>
              </div>
            </form>

            <Link to="/signin">
              <p class="mb-4 text-center">
                Already on ecom-reactify?
                <a
                  href="#"
                  class="cursor-pointer text-blue-500 no-underline hover:text-blue-500"
                >
                  Login Here
                </a>
              </p>
            </Link>
          </div>
        </div>
        {/* <!-- /Register --> */}
      </div>
    </div>
  );
};

export default SignUp;
