import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import UseAuthHook from "../ContexApi/UseAuthHook";

function PrivateRouter({ children }) {
  const { loading, user } = UseAuthHook();
  const location = useLocation();
  if (!loading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname || "/"} to="/login"></Navigate>;
}

export default PrivateRouter;
