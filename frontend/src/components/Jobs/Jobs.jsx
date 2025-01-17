import React from "react";
import Navbar from "../shared/Navbar";
import Job from "../Job/Job";
import FilterCard from "../FilterCard/FilterCard";
import { useSelector } from "react-redux";

function Jobs() {
  const { allJobs } = useSelector((store) => store.job);
  console.log("All Jobs:", allJobs);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-7">
        <div className="flex gap-3">
          {/* Filter Job Section */}
          <div className="w-[18%]">
            <FilterCard />
          </div>

          {/* Job Card Section */}
          <div className="flex-1">
            {allJobs && allJobs.length === 0 ? (
              <span>No jobs found</span>
            ) : (
              <div className="flex-1 h-[80vh] overflow-auto pb-2 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <div className="grid grid-cols-4 gap-3">
                  {allJobs?.map((job) => (
                    <div key={job._id}>
                      <Job job={job} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
