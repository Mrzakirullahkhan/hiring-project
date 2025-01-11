import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Job() {
  const navigate = useNavigate()
  const id = "12"
  return (
 
    <div className="p-4 rounded-md shadow-xl  bg-white border border-blue-400">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">4 days ego</p>
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
          <h1 className="font-medium text-lg">company name</h1>
          <p className="text-sm text-gray-500">pakistan</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">job title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          cupiditate amet obcaecati perspiciatis illum, facilis vel
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          type
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline"  onClick={()=> navigate(`/description/${id}`)} >Details</Button>
        <Button className="bg-[#591caa]" size="sm">
          Save For Later
        </Button>
      </div>
    </div>
  );
}

export default Job;
