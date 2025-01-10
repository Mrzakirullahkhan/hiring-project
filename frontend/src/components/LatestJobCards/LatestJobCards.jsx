import React from "react";
import { Badge } from "../ui/badge";

function LatestJobCards() {
  return (
    // ye latest job wale cards hai 
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          Dume Positions
        </Badge>
        <Badge className="text-[#ec2b2bec] font-bold" variant="ghost">
          Job Type
        </Badge>
        <Badge className="text-[#45255a] font-bold" variant="ghost">
          Dume LPA
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
