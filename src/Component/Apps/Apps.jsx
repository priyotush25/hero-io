import { useState } from "react";
import useApps from "../../Hooks/useApps";

import SkeletonLoader from "../SkeletonLoader";
import AppsCard from "../TrendApps/AppsCard";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const term = search.trim().toLocaleLowerCase();

  const searchedApps = showAll
    ? apps
    : term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  const handleShowAll = () => {
    setShowAll(true);
    setSearch("");
  };

  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          ({searchedApps.length}) All Products
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowAll(false);
            }}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>

      {loading ? (
        <SkeletonLoader count={16} />
      ) : searchedApps.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-3xl font-bold">No App Found</p>
          <button
            onClick={handleShowAll}
            className="mt-4 font-bold px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded hover:bg-blue-600"
          >
            Show All App
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
