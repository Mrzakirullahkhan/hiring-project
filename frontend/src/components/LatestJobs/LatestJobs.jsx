import React from "react";
import Cards from "../Cards/Cards";

function LatestJobs() {
  const AllJobs = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-7xl mx-auto my-15">
      <h1 className="text-4xl font-bold">
        {" "}
        <span className="text-[#6A38C2]">Latest & Top</span> Kob Openings
      </h1>
      <div className=" grid grid-cols-3 gap-5 my-6">
        {AllJobs.slice(0, 6).map((item, index) => (
          <Cards />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
