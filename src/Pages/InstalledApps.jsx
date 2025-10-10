import { useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { getInstalledApps } from "../utilities/localStorage";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState(() => getInstalledApps());
  const [sortOrder, setSortOrder] = useState("none");

  if (!installedApps.length)
    return <p className="text-center text-gray-500 mt-10">No Installed Apps</p>;

  // Sort logic
  const sortedItem = (() => {
    if (sortOrder === "size-asc")
      return [...installedApps].sort((a, b) => a.size - b.size);
    if (sortOrder === "size-desc")
      return [...installedApps].sort((a, b) => b.size - a.size);
    return installedApps;
  })();

  const handleRemove = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setInstalledApps(updated);
    toast("App Uninstall");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between py-5 items-center gap-3">
        <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
          ({sortedItem.length}) Installed Apps
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by size</option>
            <option value="size-asc">Small → Large</option>
            <option value="size-desc">Large → Small</option>
          </select>
        </label>
      </div>

      {/* Row-wise Installed Apps */}
      <div className="space-y-4">
        {sortedItem.map((app) => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-xl shadow p-4 gap-4"
          >
            {/* Left section */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                className="w-20 h-20 object-cover rounded-lg"
                src={app.image}
                alt={app.title}
              />
              <div>
                <h3 className="text-lg font-semibold">{app.title}</h3>
                <div className="flex flex-wrap gap-4 text-[#00D390] text-sm mt-2">
                  <div className="flex items-center gap-1">
                    <FaDownload /> {app.downloads}
                  </div>
                  <div className="flex items-center gap-1 text-amber-600">
                    <FaStar /> {app.ratingAvg}
                  </div>
                  <div>{app.size} MB</div>
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="w-full sm:w-auto">
              <button
                onClick={() => handleRemove(app.id)}
                className="btn bg-[#2ECC71] text-white w-full sm:w-auto"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
