import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className="font-mop">
            <Navbar></Navbar>

            <div className="max-w-7xl mx-auto">
                
                <Outlet></Outlet>
                <Toaster></Toaster>

            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;