import AllTouristsSportCard from "../AllTouristsSportCard/AllTouristsSportCard";
import Apihook from "../../CoustomHook/Apihook";
import { useEffect, useState } from "react";

function Alltouristsspots() {
  const { data } = Apihook();
  const [getRead, setgetRead] = useState(data);
  const [getReadFilters, setReaddatafilters] = useState([]);
  
  useEffect(() => {
    setgetRead(data);
    setReaddatafilters(data)
  }, [data]);
  // setgetRead(data)
  console.log(getRead)
  

  var byDate = getRead.slice(0);

  function handelSortData(sort) {
    if (sort === "maxcost") {
      byDate.sort(function (a, b) {
        const A = parseFloat(a.average_cost.match(/\d+(\.\d+)?/));
        const B = parseFloat(b.average_cost.match(/\d+(\.\d+)?/));
        return B - A;
        // console.log(a)
      });
      setReaddatafilters(byDate);
    } else if (sort === "mincost") {
      byDate.sort(function (a, b) {
        const A = parseFloat(a.average_cost.match(/\d+(\.\d+)?/));
        const B = parseFloat(b.average_cost.match(/\d+(\.\d+)?/));
        return A - B;
        // console.log(a)
      });
      setReaddatafilters(byDate);
    } else if (sort === "all") {
      setReaddatafilters(getRead);
    }
  }
  return (
    <div className="container mx-auto px-10">
    
      <div className="w-8/12 mx-auto text-center space-y-4 my-10">
        <h1 className="text-[#005B21] prompt-extrabold text-6xl">
          Amazing places to visit
        </h1>
        <p className="prompt-regular">
          With its unique cuisine, rich culture, some of the most beautiful
          beaches in the world, breathtaking waterfalls, and adventure for
          everyone’s liking, all you have to do is choose the perfect type of
          tourism for you and be amazed by the wonders of Brazil.
        </p>
        <div className="flex justify-center md:justify-end my-5">
        <div className="relative w-48">
          <select
            onChange={(e) => handelSortData(e.target.value)}
            className="block bg-[#005B21]  appearance-none w-full  font-bold text-white hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline "
            id="grid-state"
          >
            <option value={"all"}>Sort By</option>
            <option value={"maxcost"}>Max Cost</option>
            <option value={"mincost"}>Min Cost</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 font-bold text-white">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      </div>
      
      <div className="grid grid-cols-3 gap-10">
        {getReadFilters &&
          getReadFilters.map((singleData, index) => (
            <AllTouristsSportCard
              data={singleData}
              key={index}
            ></AllTouristsSportCard>
          ))}
      </div>
    </div>
  );
}

export default Alltouristsspots;
