import React from "react";
import Navbar from "../shared/Navbar";
import Job from "../Job/Job";
import FilterCard from "../FilterCard/FilterCard";

function Jobs() {
  const jobArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-7">
        <div className="flex gap-5">
          <div className="w-24%">
            {/* filter job */}
            <FilterCard />
          </div>
          {/* job card  */}
          {jobArray.map((item, index) => (
            <Job />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
