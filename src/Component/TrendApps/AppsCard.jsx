import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { title, image, id, downloads, ratingAvg } = app;

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
    <Link
      to={`/app/${id}`}
      className="card bg-white shadow-sm hover:scale-105 transition ease-in-out p-4"
    >
      <figure className="h-72 overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </figure>

      <h2 className="card-title py-4">{title}</h2>

      <div className="justify-between flex">
        <button className="btn border-none text-[#00D390] bg-[#F1F5E8] flex items-center gap-2">
          <MdOutlineFileDownload className="text-xl" />{" "}
          {formatDownloads(downloads)}
        </button>

        <button className="btn border-none text-[#FF8811] bg-[#F1F5E8] flex items-center gap-2 font-semibold">
          <FaStar /> {ratingAvg.toFixed(1)}
        </button>
      </div>
    </Link>
  );
};

export default AppsCard;
