import { useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import {
  BarChart,
  CartesianGrid,
  Legend,
  Bar as RechartsBar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getInstalledApps } from "../utilities/localStorage";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState(() => getInstalledApps());
  const [sortOrder, setSortOrder] = useState("none");

  if (!installedApps.length) return <p>No Installed Apps</p>;

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
  };

  // Chart data: total size by company
  const totalsByCompany = {};
  installedApps.forEach((app) => {
    const company = app.companyName;
    totalsByCompany[company] = (totalsByCompany[company] || 0) + app.size;
  });
  const chartData = Object.keys(totalsByCompany).map((company) => ({
    company,
    totalSize: totalsByCompany[company],
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          ({sortedItem.length}) Installed Apps
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by size</option>
            <option value="size-asc">Small-&gt;Large</option>
            <option value="size-desc">Large-&gt;Small</option>
          </select>
        </label>
      </div>

      {/* App cards */}
      <div className="space-y-3">
        {sortedItem.map((app) => (
          <div key={app.id} className="card bg-base-100 shadow p-4 flex gap-4">
            <div className="flex justify-between items-center">
              {/* Left: Image + stats */}

              <div className="flex-1 flex items-center gap-4">
                <img
                  className="w-24 h-24 object-cover rounded-xl"
                  src={app.image}
                  alt={app.title}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{app.title}</h3>
                  <div className="flex gap-4 text-gray-700 items-center">
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

              {/* Right: Uninstall button */}
              <div>
                <button
                  onClick={() => handleRemove(app.id)}
                  className="btn bg-[#2ECC71] text-white"
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart summary */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Installed Apps Summary</h3>
        <div className="bg-base-100 border rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="company" />
              <YAxis />
              <Tooltip />
              <Legend />
              <RechartsBar dataKey="totalSize" fill="#FFA726" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
