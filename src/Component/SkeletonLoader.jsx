const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="bg-gray-200 animate-pulse rounded-md h-48 w-full"></div>
          <div className="bg-gray-200 animate-pulse rounded h-4 w-28"></div>
          <div className="bg-gray-200 animate-pulse rounded h-4 w-full"></div>
          <div className="bg-gray-200 animate-pulse rounded h-4 w-full"></div>
          <div className="bg-gray-200 animate-pulse rounded h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
