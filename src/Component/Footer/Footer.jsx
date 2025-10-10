import {
  TiSocialDribbble,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white p-10">
      <div className="max-w-screen-xl mx-auto w-full lg:px-12">
        <div className="flex justify-between items-start mb-4">
          <div className="text-2xl font-bold flex items-center gap-2">
            <img src={logo} alt="" className="w-7" />
            <h1>HERO.IO</h1>
          </div>
          <div>
            <h1>Social Links</h1>
            <div className="flex items-center gap-4 text-2xl font-bold pt-4">
              <TiSocialLinkedin />
              <TiSocialFacebook />
              <TiSocialDribbble />
            </div>
          </div>
        </div>

        <h1 className="text-center mt-5 border-t-2 border-gray-500 pt-5">
          Copyright © 2025 - All right reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
