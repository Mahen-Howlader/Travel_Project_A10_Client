import { useEffect, useState } from "react";
import UseAuthHook from "../../ContexApi/UseAuthHook";
import Mylisttabledetails from "../Mylisttabledetails.jsx/Mylisttabledetails";
function Mylist() {
  const [item, setItem] = useState([]);
  const [control, setControl] = useState(false);
  const { user } = UseAuthHook() || {};
  // console.log(user.email)

  useEffect(() => {
    fetch(`http://localhost:5000/mylist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [user,control]);
  // console.log(item)
  return (
    <div className="mt-10 container mx-auto">
      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr className="font-bold text-lg">
              <th></th>
              <th>Location</th>
              <th>Spot Name</th>
              <th>Country</th>
              <th>
                <div className="flex px-2 text-center justify-between">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {item.map((val, index) => (
              <Mylisttabledetails
                control={control}
                setControl={setControl}
                key={index}
                data={val}
                indexNum={index}
              ></Mylisttabledetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mylist;
