import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import React from "react";
import { PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";

function Navbar() {
    const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto mx-w-7xl h-16 ">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-red-500">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium item-center gap-5">
            <li>Home</li>
            <li>Job</li>
            <li>Browser</li>
          </ul>
        
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer w-12 h-12 rounded-full">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="w-full h-full rounded-full"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex gap-4 space-y-2">
                <Avatar className="cursor-pointer w-12 h-12 rounded-full">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="w-full h-full rounded-full"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">zakir khan</h4>
                  <p className="text-sm text-muted-foreground">
                    Mern stack developer
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-grey-600">
                <div className="flex w-fit items-center gap-3 cursor-pointer">
                  <User2 />
                  <Button  variant="link" className="border-none">View Profile</Button>
                </div>
                <div className="flex w-fit items-center gap-3 cursor-pointer">
                  <LogOut />
                  <Button variant="link" className="border-none">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
