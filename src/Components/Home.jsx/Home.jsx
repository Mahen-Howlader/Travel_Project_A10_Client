import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Countriessection from "../Countries_Section/Countriessection";
import Touristsspots from "../TouristsSpots/Touristsspots";
import Apihook from "../../CoustomHook/Apihook";
import Travelinformation from "../TravelInformation/Travelinformation";
import Topteninfosection from "../ToptenSection/Topteninfosection";
import { ToastContainer } from "react-toastify";
function Home() {
    return (
        <div>
            <Banner ></Banner>
            <div className="container mx-auto  px-5 md:px-0">
            <Touristsspots></Touristsspots>
            <Countriessection></Countriessection>
            <Travelinformation></Travelinformation>
            <Topteninfosection></Topteninfosection>
            </div>
        </div>
    );
}

export default Home;