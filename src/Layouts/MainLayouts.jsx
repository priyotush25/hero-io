import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
        <Navbar />
        <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1">
          <Outlet></Outlet>
          <ToastContainer />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MainLayouts;
