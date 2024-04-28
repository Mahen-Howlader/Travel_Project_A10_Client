import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
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
    _id
  } = data || {};


  function handelDeleteTable(id){
        fetch(`http://localhost:5000/mylist/${id}`,{
            method : "DELETE",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
  }

  function handelEditTable(id){

  }
  return (
    <>
      <tr className="conatiner mx-auto text-lg">
        <th>{indexNum + 1}</th>
        <td>{location}</td>
        <td>{tourists_spot_name}</td>
        <td>{country_Name}</td>
        <td>
          <div className="flex  text-center justify-between">
            <button onClick={() => handelEditTable(_id)} className="bg-green-600 text-white btn">
              <FaRegEdit />
            </button>
            <button  onClick={() => handelDeleteTable(_id)} className="bg-red-600 text-2xl text-white btn">
            <MdDelete />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Mylisttabledetails;
