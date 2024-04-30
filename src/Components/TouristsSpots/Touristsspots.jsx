import Apihook from "../../CoustomHook/Apihook";
import TouristSpotsCard from "../TouristSpots.jsx/TouristSpotsCard";

function Touristsspots() {
  const {data} = Apihook()

  return (
    <div className="mt-14">
      {/* heading and title  */}
      <div className="flex w-10/12 mx-auto text-center">
        <div>
          <h1 className="text-4xl mb-3 font-semibold  mb-6"><span className="border-b-2 pb-1 border-blue-500">Tourists Spots</span></h1>
          <p className="roboto-light">
            In Bangladesh, adventure awaits at Sundarbans, home to majestic
            Royal Bengal tigers. Cox's Bazar boasts the world's longest natural
            sandy beach, while Rangamati's serene lakes and Bandarban's lush
            hills offer tranquil escapes. For pristine beaches and coral reefs,
            head to Saint Martin's Island, a paradise in the Bay of Bengal.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-10 gap-10">
        {
         data && data.map((singleData,index) => <TouristSpotsCard cardData={singleData} key={index}></TouristSpotsCard>)
        }
      </div>
    </div>
  );
}

export default Touristsspots;
