import { useEffect, useState } from "react";

function Apihook() {
    const [data, setData] = useState([]);
    const [dataCountry, setDataCountrys] = useState([]);
    const [loadingData, setLodaingData] = useState(false);
    useEffect(() => {
      const loadData = async () => {
        setLodaingData(true);
        const API = await fetch("https://assignmentten-one.vercel.app/touristsspots");
        const APICountrys = await fetch("https://assignmentten-one.vercel.app/countrys");
        const data = await API.json();
        const dataCountry = await APICountrys.json()
        setData(data);
        setDataCountrys(dataCountry)
        setLodaingData(false);
      };
      loadData();
    }, []);
    // console.log(data)
    return { data, loadingData,dataCountry };
}

export default Apihook;