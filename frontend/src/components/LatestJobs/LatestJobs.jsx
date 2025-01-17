import React from "react";
import LatestJobCards from "../LatestJobCards/LatestJobCards";
import { useSelector } from "react-redux";

function LatestJobs() {
  // const AllJobs = [1, 2, 3, 4, 5, 6, 7, 8];
  const {allJobs} = useSelector(store=>store.job)
  console.log(allJobs)
  return (
    <div className="max-w-7xl mx-auto my-15">
      <h1 className="text-4xl font-bold">
        {" "}
        <span className="text-[#6A38C2]">Latest & Top</span> Kob Openings
      </h1>
      <div className=" grid grid-cols-3 gap-5 my-6">
        { allJobs.lenght <= 0 ? <span>No job Available </span> :allJobs.slice(0, 6).map((job) => (
          <LatestJobCards key={job._id} job={job}/>
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
