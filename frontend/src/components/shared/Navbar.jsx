import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button"
import React from "react";
import { PopoverContent } from "../ui/popover";

function Navbar() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-red-500">Portal</span>
          </h1>
        </div>
        <div>
          <ul className="flex font-medium item-center gap-5">
            <li>Home</li>
            <li>Job</li>
            <li>Browser</li>
          </ul>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
                <h1>hello </h1>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
