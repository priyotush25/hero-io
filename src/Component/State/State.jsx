const State = () => {
  return (
    <div className="shadow flex flex-col justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-15 text-center md:px-20 w-full text-white">
      <h1 className="text-5xl font-bold mb-10">
        Trusted by Millions, Built for You
      </h1>

      <div className="flex md:flex-row items-center justify-between flex-col">
        <div className="stats text-center">
          <div className="stat">
            <div className="stat-title text-white">Total Downloads</div>
            <div className="stat-value text-6xl my-4">29.6M</div>
            <div className="stat-desc text-white">21% more than last month</div>
          </div>
        </div>

        <div className="stats text-center mx-20">
          <div className="stat">
            <div className="stat-title text-white">Total Downloads</div>
            <div className="stat-value text-6xl my-4">29.6M</div>
            <div className="stat-desc text-white">21% more than last month</div>
          </div>
        </div>

        <div className="stats text-center">
          <div className="stat">
            <div className="stat-title text-white">Total Downloads</div>
            <div className="stat-value text-6xl my-4">29.6M</div>
            <div className="stat-desc text-white">21% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
