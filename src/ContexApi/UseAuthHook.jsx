import { useContext } from "react";
import { contextProvide } from "./Contexapi";

function UseAuthHook() {
    const AllContext = useContext(contextProvide)
    return AllContext
}

export default UseAuthHook;