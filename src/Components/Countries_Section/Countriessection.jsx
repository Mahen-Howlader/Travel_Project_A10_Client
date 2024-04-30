import Apihook from "../../CoustomHook/Apihook";
import Country from "../Country/Country";
import Spinner from "../Spinner/Spinner";

function Countriessection() {
  const {dataCountry,loadingData} = Apihook()
  if(loadingData){
    return  <Spinner></Spinner>
  }
    return (
        <div className="mt-20 mx-auto">
        {/* heading and title  */}
        <div className="flex  md:w-9/12 mx-auto text-center">
          <div>
            <h1 className="text-4xl mb-3 font-semibold  mb-6"><span className="border-b-2 pb-1 border-blue-500">Countries Section</span></h1>
            <p className="roboto-light">
              In Bangladesh, adventure awaits at Sundarbans, home to majestic
              Royal Bengal tigers. Cox's Bazar boasts the world's longest natural
              sandy beach, while Rangamati's serene lakes and Bandarban's lush
              hills offer tranquil escapes.
            </p>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {dataCountry.map((cou,index) => <Country props={cou} key={index}></Country>)}
        </div>
      </div>
    );
}

export default Countriessection;