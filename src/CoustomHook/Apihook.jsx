import { useEffect, useState } from "react";

function Apihook() {
    const [data, setData] = useState([]);
    const [loadingData, setLodaingData] = useState(true);
    useEffect(() => {
      const loadData = async () => {
        setLodaingData(true);
        const API = await fetch("http://localhost:5000/touristsspots");
        const data = await API.json();
        setData(data);
        setLodaingData(false);
      };
      loadData();
    }, []);
    // console.log(data)
    return { data, loadingData };
}

export default Apihook;