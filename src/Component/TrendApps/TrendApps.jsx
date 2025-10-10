import { Link } from "react-router";
import useApps from "../../Hooks/useApps";
import AppsCard from "./AppsCard";

const TrendApps = () => {
  const { loading, error, apps } = useApps();

  const trendApp = apps.slice(0, 8);
  console.log(trendApp);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-5xl text-[#001931] font-bold mb-4">
          Trending Apps
        </h1>
        <p className="text-xl text-[#627382] font-medium mb-20">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div>
          <div>
            {loading ? (
              // <SkeletonLoader />
              <p>loading</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {trendApp.map((app) => (
                  <AppsCard app={app} key={app.id} />
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center py-5 items-center mt-4">
            <Link
              className="btn btn-outline bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
              to="/apps"
            >
              Show All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendApps;
