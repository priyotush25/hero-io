import { Link } from "react-router";
import errorPage from "../../assets/error-404.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
        <Navbar />
        <div className="max-w-screen-xl flex flex-col items-center gap-4 justify-center mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1">
          <img src={errorPage} alt="" />
          <h1 className="text-5xl font-semibold text-[#001931]">
            Oops, page not found!
          </h1>
          <p>The page you are looking for is not available.</p>

          <Link
            to={"/"}
            className="btn w-fit mx-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2"
          >
            Go Back
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ErrorPage;
