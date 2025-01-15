import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
// import store from "@/redux/store";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import axios from "axios";
import { USER_API_END_POINT } from "@/Utils/constant";
import { Loader2 } from "lucide-react";
import store from "@/redux/store";

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
  
    // Initialize the input state with user data
    const [input, setInput] = useState({
      fullname: user?.fullname || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
      bio: user?.profile?.bio || "",
      skills: user?.profile?.skills?.join(", ") || "", // Join skills as comma-separated string
      file: null, // Initialize file as null
    });
  
    // Function to handle input changes (for skills and other fields)
    const onChangeHandler = (e) => {
      if (e.target.name === "skills") {
        setInput({ ...input, skills: e.target.value });
      } else {
        setInput({ ...input, [e.target.name]: e.target.value });
      }
    };
  
    // File handler to set the selected file
    const fileChangeHandler = (e) => {
      const file = e.target.files?.[0];
      setInput({ ...input, file });
    };
  
    // Function to handle form submission
    const OnSubmitHandler = async (e) => {
      e.preventDefault();
  
      // Prepare FormData to submit
      const formData = new FormData();
      formData.append("fullname", input.fullname);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("bio", input.bio);
      formData.append("skills", JSON.stringify(input.skills.split(",").map((skill) => skill.trim()))); // Split and trim skills
      if (input.file) {
        formData.append("file", input.file);
      }
  
      // Start loading state
      setLoading(true);
  
      try {
        // API call to update profile
        const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        if (res.data.success) {
          // Update user in redux store and show success toast
          dispatch(setUser(res.data.user));
          toast.success("Profile updated successfully!");
          console.log(res.data)
          setOpen(false);
        } else {
          toast.error(res.data.message || "Failed to update profile.");
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div>
        <Dialog open={open}>
          <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
            <DialogHeader>
              <DialogTitle>Update Profile</DialogTitle>
            </DialogHeader>
            <form onSubmit={OnSubmitHandler}>
              <div className="grid gap-4 py-4">
                {/* Full Name */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="fullname" className="text-right">Full Name</Label>
                  <Input
                    id="fullname"
                    name="fullname"
                    type="text"
                    value={input.fullname || ""}
                    onChange={onChangeHandler}
                    placeholder="Enter your full name"
                    className="col-span-3"
                  />
                </div>
  
                {/* Email */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={input.email || ""}
                    onChange={onChangeHandler}
                    placeholder="Enter your email address"
                    className="col-span-3"
                  />
                </div>
  
                {/* Phone Number */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phoneNumber" className="text-right">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={input.phoneNumber || ""}
                    onChange={onChangeHandler}
                    placeholder="Enter your phone number"
                    className="col-span-3"
                  />
                </div>
  
                {/* Bio */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="bio" className="text-right">Bio</Label>
                  <Input
                    id="bio"
                    name="bio"
                    type="text"
                    value={input.bio || ""}
                    onChange={onChangeHandler}
                    placeholder="Write a short bio"
                    className="col-span-3"
                  />
                </div>
  
                {/* Skills */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="skills" className="text-right">Skills</Label>
                  <Input
                    id="skills"
                    name="skills"
                    type="text"
                    value={input.skills || ""}
                    onChange={onChangeHandler}
                    placeholder="Enter skills, separated by commas"
                    className="col-span-3"
                  />
                </div>
  
                {/* Resume */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="file" className="text-right">Resume</Label>
                  <Input
                    id="file"
                    name="file"
                    type="file"
                    accept="application/pdf"
                    onChange={fileChangeHandler}
                    className="col-span-3"
                  />
                </div>
              </div>
  
              <DialogFooter>
                {loading ? (
                  <Button className="w-full my-4">
                    <Loader2 className="mr-2 h-4 animate-spin" />
                    Please wait...
                  </Button>
                ) : (
                  <Button className="w-full mt-4">Update</Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
export default UpdateProfileDialog;
