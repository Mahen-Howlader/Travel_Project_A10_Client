import { Link, NavLink, useLocation } from "react-router-dom";
import { IoAirplane } from "react-icons/io5";
import "animate.css";
import { useEffect, useRef, useState } from "react";
import UseAuthHook from "../../ContexApi/UseAuthHook";

function Nav() {
  const { user, logOutFun, setUser, loading } = UseAuthHook();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  function handleLogin(e) {
    // console.log(e.target)
    e.target.classList.add("animate__heartBeat");
    setTimeout(() => {
      e.target.classList.remove("animate__heartBeat");
    }, 1000);
  }

  const location = useLocation();
  const handelNavbarBgColor = useRef();
  const isPathNameRoot = location.pathname === "/";

  useEffect(() => {
    if (!isPathNameRoot) {
      handelNavbarBgColor.current.classList.add("bg-[#3636c2b6]", "border");
      handelNavbarBgColor.current.classList.remove("absolute");
    } else {
      handelNavbarBgColor.current.classList.remove("bg-[#3636c2b6]", "border");
      handelNavbarBgColor.current.classList.add("absolute");
    }
  }, [location]);
  // handelLogout
  function handelLogout() {
    setUser(null);
    logOutFun()
      .then(() => {
        // Sign-out successful.
        alert("Logout successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  }
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen((prevState) => !prevState);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  function handelTheme(e) {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <div
        ref={handelNavbarBgColor}
        className="absolute w-full   top-0 left-0 z-50 "
      >
        <header className="py-2  dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex justify-between items-center container mx-auto text-white h-16 mx-auto">
            <div className="flex items-center gap-2 md:gap-x-3">
              <IoAirplane className="text-[#07f9a2] text-2xl md:text-4xl" />
              <h2 className="merriweather-bold text-2xl md:text-3xl tracking-wide  bg-gradient-to-r from-[#005bc5] via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient animate-gradient">
                Tourism Lover
              </h2>
            </div>
            <div>
              <ul className="items-center text-white hidden prompt-regular space-x-8 lg:flex roboto-regular">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? "text-[#0091FF]" : "";
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? "text-[#0091FF]" : "";
                  }}
                  to="/alltouristsspot"
                >
                  All Tourists Spot
                </NavLink>
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? "text-[#0091FF]" : "";
                  }}
                  to="/addtouristsspot"
                >
                  Add Tourists Spot
                </NavLink>
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? "text-[#0091FF]" : "";
                  }}
                  to="/mylist"
                >
                  My List
                </NavLink>
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    onChange={handelTheme}
                    className="theme-controller"
                    value="dark"
                    checked ={theme === "dark"}
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </ul>
            </div>

            <div className="items-center flex-shrink-0 hidden lg:flex">
              {user ? (
                <div
                  className="dropdown dropdown-end tooltip tooltip-left"
                  data-tip={user?.email}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 text-black shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="">
                        Name :{" "}
                        <span className="font-bold texts">
                          {user?.displayName}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <Link onClick={handelLogout}>Logout</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={handleLogin}
                  className="px-8 py-3 roboto-regular prompt-regular rounded dark:bg-violet-600 dark:text-gray-50 animate__animated"
                >
                  Log in
                </Link>
              )}
            </div>
            <div className="lg:hidden">
              <button className="p-4 " onClick={toggleList}>
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    checked={isListOpen}
                    onChange={toggleList}
                  />
                  {/* hamburger icon */}
                  <svg
                    className={`swap-off ${
                      isListOpen ? "hidden" : "block"
                    } fill-current`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>

                  {/* close icon */}
                  <svg
                    className={`swap-on ${
                      isListOpen ? "block" : "hidden"
                    } fill-current`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </button>
            </div>
          </div>
          <div className="relative">
            <ul
              className={`prompt-regular z-50 border-2 text-black p-3 rounded-lg w-8/12 md:w-5/12 min-h-52 gap-y-3 flex flex-col absolute bg-white ${
                isListOpen ? "block" : "hidden"
              }`}
            >
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "text-[#0091FF]" : "";
                }}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "text-[#0091FF]" : "";
                }}
                to="/alltouristsspot"
              >
                All Tourists Spot
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "text-[#0091FF]" : "";
                }}
                to="/addtouristsspot"
              >
                Add Tourists Spot
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "text-[#0091FF]" : "";
                }}
                to="/mylist"
              >
                My List
              </NavLink>
              <Link
                to="/login"
                onClick={handleLogin}
                className="px-8 py-3 roboto-regular bg-violet-600 hover:bg-violet-700 text-white prompt-regular btn rounded dark:bg-violet-600  animate__animated"
              >
                Log in
              </Link>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Nav;
