import appStore from "../../assets/appstore.svg";
import banner from "../../assets/hero.png";
import playStore from "../../assets/playstore.svg";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="md:text-7xl text-4xl font-bold">
          We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
          Apps
        </h1>
        <p className="lg:w-4/6 mb-10 text-[#627382]">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="gap-4 flex mb-10">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex items-center gap-2 px-6 py-3"
          >
            <img src={playStore} alt="Play Store" className="w-6 h-6" />
            Play Store
          </a>

          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex items-center gap-2 px-6 py-3"
          >
            <img src={appStore} alt="App Store" className="w-6 h-6" />
            App Store
          </a>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
