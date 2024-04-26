import Banner from "../Banner/Banner";
import Countriessection from "../Countries_Section/Countriessection";
import Touristsspots from "../TouristsSpots/Touristsspots";

function Home() {
    return (
        <div>
            <Banner></Banner>
            <Touristsspots></Touristsspots>
            <Countriessection></Countriessection>
        </div>
    );
}

export default Home;