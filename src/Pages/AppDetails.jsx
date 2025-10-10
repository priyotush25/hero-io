import { useEffect, useState } from "react";
import { FaCommentAlt, FaDownload, FaStar } from "react-icons/fa";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar as RechartsBar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useApps from "../Hooks/useApps";
import { getInstalledApps, saveInstalledApp } from "../utilities/localStorage"; // separate file

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getInstalledApps();
    if (installedApps.some((item) => item.id === Number(id))) {
      setInstalled(true);
    }
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  const app = apps.find((p) => p.id === Number(id));
  if (!app)
    return <p className="text-center text-lg text-red-500">App not found</p>;

  const handleInstall = () => {
    saveInstalledApp(app);
    setInstalled(true);
    toast("App installed");
  };

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
    <div className="p-6 md:p-10 space-y-10">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 border-b-2 pb-6 border-gray-200">
        <div className="rounded-2xl">
          <img
            src={app.image}
            alt={app.title}
            className="w-40 md:w-80 rounded-xl"
          />
        </div>
        <div className="space-y-4 flex-1">
          <h2 className="text-3xl font-bold text-[#27374D]">{app.title}</h2>
          <p className="text-[#627382] mt-2 border-b-2 pb-4 border-gray-200">
            Developed by{" "}
            <span className="text-blue-600 font-medium">{app.companyName}</span>
          </p>

          {/* Stats */}
          <div className="flex gap-10 text-center text-[#27374D]">
            <div>
              <FaDownload className="text-2xl mx-auto text-[#4CAF50]" />
              <p className="text-sm text-[#627382] mt-2">Downloads</p>
              <p className="font-black text-2xl md:text-[40px]">
                {formatDownloads(app.downloads)}
              </p>
            </div>
            <div>
              <FaStar className="text-2xl mx-auto text-yellow-500" />
              <p className="text-sm text-[#627382] mt-2">Average Rating</p>
              <p className="font-black text-2xl md:text-[40px]">
                {app.ratingAvg}
              </p>
            </div>
            <div>
              <FaCommentAlt className="text-2xl mx-auto text-[#03A9F4]" />
              <p className="text-sm text-[#627382] mt-2">Total Reviews</p>
              <p className="font-black text-2xl md:text-[40px]">
                {app.reviews}
              </p>
            </div>
          </div>

          {/* Install Button */}
          <div className="flex gap-4">
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`btn bg-[#2ECC71] text-white disabled:bg-gray-400 disabled:text-gray-600 ${
                installed ? "cursor-not-allowed" : ""
              }`}
            >
              {installed ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="border-b-2 pb-15 border-gray-200">
        <h3 className="text-2xl font-semibold text-[#27374D] mb-4">Ratings</h3>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={app.ratings} layout="vertical">
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                width={80}
                reversed={true} // এই লাইনটা top-to-bottom order উল্টে দেবে
              />
              <Tooltip />
              <RechartsBar
                dataKey="count"
                fill="#FFA726"
                radius={[4, 4, 4, 4]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-2xl font-semibold text-[#27374D] mb-3">
          Description
        </h3>
        <p className="text-[#627382] leading-relaxed text-justify">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
