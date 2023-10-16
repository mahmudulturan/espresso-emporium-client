import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const RootElement = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootElement;
