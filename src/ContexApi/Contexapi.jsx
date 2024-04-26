import { useContext } from "react";

function Contexapi({ children }) {
  const contextProvide = useContext(null);

  const name = "dfmsdfodsi";
  return (
    <contextProvide.Provider value={name}>{children}</contextProvide.Provider>
  );
}

export default Contexapi;
