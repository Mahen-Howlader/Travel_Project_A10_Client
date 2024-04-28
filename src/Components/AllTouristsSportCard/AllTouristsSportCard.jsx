import { Link } from "react-router-dom";

function AllTouristsSportCard({ data }) {
  const {
    seasonality,
    travel_time,
    total_visitors_per_year,
    average_cost,
    tourists_spot_name,
    image,
    _id
  } = data || {};
//   console.log(data);


  return (
    <div>
      <div className="!z-5 relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-2xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
        <div className="h-full w-full">
          <div className="relative w-full">
            <img
              src={image}
              className="mb-3 h-full w-full rounded-xl  min-h-52 max-h-52 object-cover 3xl:w-full"
              alt=""
            />
            <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
              <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                  ></path>
                </svg>
              </div>
            </button>
            <Link to={`/alltouristsspot/${_id}`} className="absolute bottom-5 right-5">
              <div className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Read More +{" "}
                </span>
              </div>
            </Link>
          </div>
          <div className="mb-3 flex items-center justify-between px-1 md:items-start">
            <div className="mb-2">
              <p className="text-lg font-bold text-navy-700">
                {" "}
                {tourists_spot_name}
              </p>
              <p className="mt-1 text-sm font-normal text-gray-600 md:mt-2">
                <span className=" font-bold">View</span>{" "}
                {total_visitors_per_year}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between md:items-center lg:justify-between ">
            <div className="">
              <p className="!mb-3 text-sm font-normal  text-gray-600">
                <span className=" font-bold">Travel Time : </span>{" "}
                {travel_time}
              </p>
              <p className="!mb-3 text-sm font-normal  text-gray-600">
                <span className=" font-bold">Seasonality : </span>{" "}
                {seasonality}
              </p>
              <p className="!mb-3 text-sm font-normal  text-gray-600">
                <span className=" font-bold">Average cost : </span>{" "}
                {average_cost}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTouristsSportCard;
