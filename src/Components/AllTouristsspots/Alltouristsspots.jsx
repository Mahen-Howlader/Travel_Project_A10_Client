import AllTouristsSportCard from "../AllTouristsSportCard/AllTouristsSportCard";
import Apihook from "../../CoustomHook/Apihook";

function Alltouristsspots() {
  const {data} = Apihook() 

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
      </div>
      <div className="grid grid-cols-3 gap-10">
        {data && data.map((singleData,index) => <AllTouristsSportCard data={singleData} key={index}></AllTouristsSportCard>)}
      </div> 
    </div>
  );
}

export default Alltouristsspots;
