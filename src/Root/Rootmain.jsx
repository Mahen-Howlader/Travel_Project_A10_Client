import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

function Rootmain() {
    return (
        <div className="relative bg-[#F3F4F6]">
            <Nav></Nav>
            <div className="min-h-[calc(100vh-300px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Rootmain;