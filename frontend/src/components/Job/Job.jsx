import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Job({ job }) {
  const navigate = useNavigate();
// Log the job object to see its properties.

  return (
    <div className="p-4 rounded-md shadow-xl bg-white border border-blue-400">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">4 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1> {/* Access job.company */}
          <p className="text-sm text-gray-500">Pakistan</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1> {/* Access job.title */}
        <p className="text-sm text-gray-600">{job?.description}</p> {/* Access job.description */}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Positions {/* Access job.position */}
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.type} {/* Access job.type */}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary} LPA {/* Access job.salary */}
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline" onClick={() => navigate(`/description/${job._id}`)}>Details</Button> {/* Pass job._id */}
        <Button className="bg-[#591caa]" size="sm">
          Save For Later
        </Button>
      </div>
    </div>
  );
}


export default Job;
