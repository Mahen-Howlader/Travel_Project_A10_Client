function Mylisttabledetails({ indexNum, data }) {
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
    country_Name,
  } = data || {};
  return (
    <>
      <tr className="">
        <th>{indexNum+1}</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>
        <div className="flex justify-between">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </td>
      </tr>
    </>
  );
}

export default Mylisttabledetails;
