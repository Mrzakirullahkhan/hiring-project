import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import React from "react";
import { PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/Utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";
import axios from "axios";
import logo from "../../assets/logo.png";

function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      console.log("Logout Response:", res.data);

      if (res.data.success) {
        console.log("Dispatching user logout...");
        dispatch(setUser(null));

        console.log("Navigating to home...");
        navigate("/");

        console.log("Showing success toast...");
        toast.success(res.data.message);
      } else {
        console.log("Unexpected response:", res.data);
        toast.error("Failed to log out.");
      }
    } catch (error) {
      console.error("Logout Error:", error);
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto mx-w-7xl h-16 ">
        <div>
          <div>
            <img src={logo} alt="" width="180" height="180" className="pl-2" />
          </div>
          {/* Job <span className="text-red-500">Portal</span> */}
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex item-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                {" "}
                <Button className="bg-[#6A38C3] hover:bg-[#421c8a]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer w-12 h-12 rounded-full">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                    className="w-full h-full rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer w-12 h-12 rounded-full">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                      className="w-full h-full rounded-full"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-grey-600">
                  {user && user.role === "student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        {" "}
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}
                  <div className="flex w-fit items-center gap-3 cursor-pointer">
                    <LogOut />
                    <Button
                      variant="link"
                      className="border-none"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
