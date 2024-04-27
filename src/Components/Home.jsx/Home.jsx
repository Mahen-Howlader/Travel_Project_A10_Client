import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Countriessection from "../Countries_Section/Countriessection";
import Touristsspots from "../TouristsSpots/Touristsspots";
function Home() {
    const [data1] = useLoaderData()
    // console.log(data1)
    return (
        <div>
            <Banner ></Banner>
            <div className="container mx-auto">
            <Touristsspots data={data1}></Touristsspots>
            <Countriessection></Countriessection>
            </div>
        </div>
    );
}

export default Home;