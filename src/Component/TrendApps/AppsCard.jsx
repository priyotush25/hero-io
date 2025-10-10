import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { name, image, id } = app;
  return (
    <div className="card bg-white shadow-sm hover:scale-105 transition ease-in-out p-4">
      <figure className="h-72 overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover" src={image} alt="Shoes" />
      </figure>

      <h2 className="card-title py-4">{name}</h2>

      <div className="justify-between flex">
        <Link
          to={`/app/${id}`}
          className="btn border-none text-[#00D390] bg-[#F1F5E8]"
        >
          <MdOutlineFileDownload className="text-xl" /> 9M
        </Link>

        <Link
          to={`/app/${id}`}
          className="btn border-none text-[#FF8811] bg-[#F1F5E8] flex items-center gap-2 font-semibold"
        >
          <FaStar />5<span className="text-xl"></span>
        </Link>
      </div>
    </div>
  );
};

export default AppsCard;
