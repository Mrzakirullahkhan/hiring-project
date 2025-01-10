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
        <div className="flex gap-3">
          {/* Filter Job Section */}
          <div className="w-[18%]">
            <FilterCard />
          </div>

          {/* Job Card Section */}
          <div className="flex-1">
            {jobArray.length === 0 ? (
              <span>No jobs found</span>
            ) : (
                
              <div className="flex-1 h-[80vh] overflow-auto pb-2 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <div className="grid grid-cols-4 gap-3">
                  {jobArray.map((item, index) => (
                    <div key={index}>
                      <Job />
                    </div> // Fixed the closing div tag here
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
