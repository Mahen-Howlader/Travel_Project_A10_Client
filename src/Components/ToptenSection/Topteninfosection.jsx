import { IoMdAirplane } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import ToptendataCard from "./ToptendataCard";

function Topteninfosection() {
  return (
    <div className="mt-20">
      <div className="flex w-10/12 mx-auto text-center">
        <div>
          <h1 className="text-4xl mb-3 font-semibold  mb-6">
            <span className="border-b-2 pb-1 border-blue-500">
              There’s more for you
            </span>
          </h1>
          <p className="roboto-light">
            In Bangladesh, adventure awaits at Sundarbans, home to majestic
            Royal Bengal tigers. Cox's Bazar boasts the world's longest natural
            sandy beach, while Rangamati's serene lakes and Bandarban's lush
            hills offer tranquil escapes. For pristine beaches and coral reefs,
            head to Saint Martin's Island, a paradise in the Bay of Bengal.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10 ">
        <div className="bg-white p-7 rounded-lg shadow-2xl space-y-2">
          <div className="flex items-center gap-x-4 text-xl font-semibold">
            <IoMdAirplane />
            <h1>For Travelers</h1>
            <SlArrowRight />
          </div>
          <p className="text-gray-500">
            Online B2C travel booking engine of Global Air tickets, Hotel
            Booking and Travel Packages
          </p>
        </div>
        <div className="bg-white p-7 rounded-lg shadow-2xl space-y-2">
          <div className="flex items-center gap-x-4 text-xl font-semibold">
            <IoMdAirplane />
            <h1>For Travel Organizers</h1>
            <SlArrowRight />
          </div>
          <p className="text-gray-500">
            Travel Organizers can user our booking engine to start their Online
            Travel Agency business
          </p>
        </div>
        <div className="bg-white p-7 rounded-lg shadow-2xl space-y-2">
          <div className="flex items-center gap-x-4 text-xl font-semibold">
            <IoMdAirplane />
            <h1>For Developers</h1>
            <SlArrowRight />
          </div>
          <p className="text-gray-500">
            We provide API with fully automated process including searching,
            pricing, booking and more
          </p>
        </div>
      </div>
      <ToptendataCard></ToptendataCard>
    </div>
  );
}

export default Topteninfosection;
