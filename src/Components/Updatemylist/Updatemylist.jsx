import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuthHook from "../../ContexApi/UseAuthHook";

function Updatemylist() {
  const { user } = UseAuthHook();

  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleData(data);
      });
  }, [id]);

  const {
    image,
    tourists_spot_name,
    location,
    travel_time,
    average_cost,
    seasonality,
    total_visitors_per_year,
    user_email,
    user_name,
    short_description,
    _id,
    country_Name
  } = singleData || {};

  // console.log(country_Name)

  function handelFormSubmit(e) {
    e.preventDefault();
    const image = e.target.image.value;
    const tourists_spot_name = e.target.tourists_spot_name.value;
    const location = e.target.location.value;
    const travel_time = e.target.travel_time.value;
    const average_cost = e.target.average_cost.value;
    const total_visitors_per_year = e.target.totalVisitorsPerYear.value;
    const seasonality = e.target.seasonality.value;
    const short_description = e.target.short_description.value;
    const user_email = e.target.user_email.value;
    const user_name = e.target.user_name.value;
    // console.log(image)
    // image
    // tourists_spot_name
    // country_Name
    // location
    // short_description
    // average_cost
    // seasonality
    // travel_time
    // total_visitors_per_year
    // user_email
    // user_name
    const addDataTravel = {
      image,
      tourists_spot_name,
      location,
      travel_time,
      average_cost,
      seasonality,
      total_visitors_per_year,
      user_email,
      user_name,
      short_description,
      country_Name
    };

    fetch(`http://localhost:5000/touristsspots/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addDataTravel),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Success Update");
        }
      });
  }

  return (
    <div>
      <div>
        <div className="w-[70%] mx-auto mt-10 bg-slate-300 p-10 rounded-lg">
        <h1 className="text-center mb-10">
        <span className="border-b-4 pb-2 border-green-500 text-3xl font-bold  ">
            Update Tourist Spot
          </span>
        </h1>
          <form
            id="addTouristSpotForm"
            onSubmit={handelFormSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-x-4">
              <div className="w-full">
                <label htmlFor="image" className="block">
                  Image URL:
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  defaultValue={image}
                  required
                  className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-600    py-2 px-4 mt-1"
                />
              </div>
              <div className="w-full">
                <label htmlFor="tourists_spot_name" className="block">
                  Tourists Spot Name:
                </label>
                <input
                  type="text"
                  id="tourists_spot_name"
                  name="tourists_spot_name"
                  defaultValue={tourists_spot_name}
                  required
                  className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-600 py-2 px-4 mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 items-center gap-x-3">
              <div>
                <label htmlFor="location" className="block">
                  Country Name:
                </label>
                <div className=" flex items-center mt-1 relative">
                  <select
                    value={country_Name } // Set the value attribute to the selected country
                    id="countrySelect"
                    className="w-full appearance-none px-4 py-[10px] pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Country</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Bangladesh">Bangladesh</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 7l5 5 5-5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label htmlFor="location" className="block">
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  defaultValue={location}
                  required
                  className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-600 py-2 px-4 mt-1"
                />
              </div>

              <div className="w-full">
                <label htmlFor="travel_time" className="block">
                  Travel Time:
                </label>
                <input
                  type="text"
                  id="travel_time"
                  name="travel_time"
                  defaultValue={travel_time}
                  required
                  className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-600 py-2 px-4 mt-1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="short_description" className="block">
                Short Description:
              </label>
              <textarea
                id="short_description"
                name="short_description"
                defaultValue={short_description}
                required
                className="w-full rounded min-h-20 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-600 py-2 px-4 mt-1"
              ></textarea>
            </div>

            <div className="grid grid-cols-3 gap-x-3">
              <div className="w-full">
                <label htmlFor="average_cost" className="block">
                  Average Cost:
                </label>
                <input
                  type="text"
                  id="average_cost"
                  name="average_cost"
                  defaultValue={average_cost}
                  required
                  className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-600 py-2 px-4 mt-1"
                />
              </div>
              <div className="w-full">
                <label htmlFor="seasonality" className="block">
                  Seasonality:
                </label>
                <input
                  type="text"
                  id="seasonality"
                  name="seasonality"
                  defaultValue={seasonality}
                  className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-600 py-2 px-4 mt-1"
                />
              </div>

              <div className="w-full">
                <label htmlFor="totalVisitorsPerYear" className="block">
                  Total Visitors Per Year:
                </label>
                <input
                  type="number"
                  id="totalVisitorsPerYear"
                  defaultValue={total_visitors_per_year}
                  name="totalVisitorsPerYear"
                  required
                  className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-600 py-2 px-4 mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10">
              <div>
                <label htmlFor="user_email" className="block">
                  User Email:
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  disabled
                  defaultValue={user?.email}
                  required
                  className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-600 py-2 px-4 mt-1"
                />
              </div>
              <div>
                <label htmlFor="user_name" className="block">
                  User Name:
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  defaultValue={user?.displayName}
                  disabled
                  required
                  className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-600 py-2 px-4 mt-1"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" w-full bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-600"
              >
               Update Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Updatemylist;
