import Apihook from "../../CoustomHook/Apihook";
import Country from "../Country/Country";

function Countriessection() {
  const {dataCountry} = Apihook()
    return (
        <div className="mt-14">
        {/* heading and title  */}
        <div className="flex w-7/12 mx-auto text-center">
          <div>
            <h1 className="text-4xl mb-3 roboto-regular">Countries Section</h1>
            <p className="roboto-light">
              In Bangladesh, adventure awaits at Sundarbans, home to majestic
              Royal Bengal tigers. Cox's Bazar boasts the world's longest natural
              sandy beach, while Rangamati's serene lakes and Bandarban's lush
              hills offer tranquil escapes. For pristine beaches and coral reefs,
              head to Saint Martin's Island, a paradise in the Bay of Bengal.
            </p>
          </div>
        </div>
        <div>
          {dataCountry.map((cou,index) => <Country props={cou} key={index}></Country>)}
        </div>
      </div>
    );
}

export default Countriessection;