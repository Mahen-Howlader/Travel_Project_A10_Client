import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function Rootmain() {
    return (
        <div className="relative">
            <Nav></Nav>
            <div className="min-h-[calc(100vh-300px)] ">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Rootmain;