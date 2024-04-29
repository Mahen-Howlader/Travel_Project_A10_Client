import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Countriessection from "../Countries_Section/Countriessection";
import Touristsspots from "../TouristsSpots/Touristsspots";
import Apihook from "../../CoustomHook/Apihook";
import Travelinformation from "../TravelInformation/Travelinformation";
function Home() {
   const {data} = Apihook()
    return (
        <div>
            <Banner ></Banner>
            <div className="container mx-auto">
            <Touristsspots data={data}></Touristsspots>
            <Countriessection></Countriessection>
            <Travelinformation></Travelinformation>
            </div>
        </div>
    );
}

export default Home;