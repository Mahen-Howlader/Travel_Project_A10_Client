function Country({props}) {
    // console.log(props)
    const {image,description,country_Name} = props;
    return (
        <div>
              <div className=" bg-gray-40 flex justify-center items-center">
      <div className="flex flex-col justify-between rounded-lg w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer object-cover" style={{backgroundImage: `url(${image})`}}>
        <div className="flex justify-between items-center ml-4 pr-8">
          <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Some information</div>
          <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">%</div>
        </div>
        <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
          <h3 className="text-xl font-bold pb-2">{country_Name}</h3>
          <p className="truncate text-gray-500 text-sm">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">Have a nice year...</span>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Country;