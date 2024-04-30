import { ScaleLoader } from "react-spinners";

function Spinner(props) {
    return (
        <div className="h-[100vh] w-full flex items-center justify-center">
            <ScaleLoader color="#36d7b7" />
        </div>
    );
}

export default Spinner;