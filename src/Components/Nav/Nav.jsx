import { Link, NavLink, useLocation } from "react-router-dom";
import { IoAirplane } from "react-icons/io5";
import "animate.css";
import { useEffect, useRef } from "react";
import UseAuthHook from "../../ContexApi/UseAuthHook";


function Nav() {
  const { user,logOutFun,setUser } = UseAuthHook();

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
function handelLogout(){
  setUser(null)
  logOutFun()
  .then(() => {
    // Sign-out successful.
    alert("Logout successful")
  }).catch((error) => {
    // An error happened.
    console.log(error.message)
  });
}





// // Example usage
// const imagePath = 'example.jpg';
// if (validateImage(imagePath)) {
//     console.log("Image validation passed");
// } else {
//     console.log("Image validation failed");
// }





return (
    <div className="">
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
              <ul className="items-stretch text-white hidden prompt-regular space-x-8 lg:flex roboto-regular">
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
            <button className="p-4 lg:hidden ">
              <label className="   swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
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
          <div className="relative hidden">
            <ul className="prompt-regular text-black p-3 rounded-lg w-8/12 md:w-5/12 min-h-52 gap-y-3 flex flex-col absolute bg-white">
              <NavLink>Home</NavLink>
              <NavLink>All Tourists Spot</NavLink>
              <NavLink>Add Tourists Spot</NavLink>
              <NavLink>My List</NavLink>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Nav;
