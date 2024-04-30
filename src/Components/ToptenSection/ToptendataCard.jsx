import { Link } from "react-router-dom";
import UseAuthHook from "../../ContexApi/UseAuthHook";

function ToptendataCard() {
    const {user} = UseAuthHook();
  return (
    <div className="card-container mt-10">
      <div className="relative ">
        <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover" src="/Animated_Shape.svg" alt="" />
        <div className="card-content absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            {" "}
            Let’s make the travel
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            experience amazing together.
          </h1>
        <div className="mt-10">
        {user ?  <Link
            to="/alltouristsspot"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">All Tourists Spot</span>
          </Link>: <Link
            to="/register"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Sign Up</span>
          </Link>}
        </div>
        </div>
      </div>
    </div>
  );
}

export default ToptendataCard;
