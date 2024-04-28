import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Mylisttabledetails({ indexNum, data,control,setControl }) {
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
    _id,
  } = data || {};

  function handelDeleteTable(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mylist/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then(dataval => {
            if(dataval.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  setControl(!control)
            }
          });
      }
    });
  }

//   function handelEditTable(id) {
//     fetch(`http://localhost:5000/mylist/${id}`, {
//         method: "PUT",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//   }
  return (
    <>
      <tr className="conatiner mx-auto text-lg">
        <th>{indexNum + 1}</th>
        <td>{location}</td>
        <td>{tourists_spot_name}</td>
        <td>{country_Name}</td>
        <td>
          <div className="flex  text-center justify-between">
            <Link
              to={`/update/${_id}`}
              className="bg-green-600 text-white btn"
            >
              <FaRegEdit />
            </Link>
            <button
              onClick={() => handelDeleteTable(_id)}
              className="bg-red-600 text-2xl text-white btn"
            >
              <MdDelete />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Mylisttabledetails;
