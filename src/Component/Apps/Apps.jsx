import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useApps from "../../Hooks/useApps";
import SkeletonLoader from "../SkeletonLoader";
import AppsCard from "../TrendApps/AppsCard";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedProducts = term
    ? apps.filter((product) => product.name.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center lg:mt-20">
        <h1 className="text-5xl text-[#001931] font-bold mb-4">
          Our All Applications
        </h1>
        <p className="text-xl text-[#627382] font-medium mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between py-5 items-center">
        <h1 className="md:text-3xl font-semibold">
          ({searchedProducts.length}) Apps Found{" "}
        </h1>
        <label className="input flex items-center">
          <CiSearch className="text-xl font-bold" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="search Apps"
          />
        </label>
      </div>
      {loading ? (
        <SkeletonLoader count={16} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchedProducts.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
