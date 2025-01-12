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

function UpdateProfileDialog({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills.map((skill) => skill),
    file: user?.profile?.resume,
  });
  console.log(input.fullname)
  console.log(input.email)

  //   onchange k liye function
  const onChangeHandler = (e) => {
    if (e.target.name === "skills") {
        const updatedSkills = e.target.value.split(",").map(skill => skill.trim());
        setInput({ ...input, skills: updatedSkills });
      } else {
        setInput({ ...input, [e.target.name]: e.target.value });
      }
    // setInput({ ...input, [e.target.name]: e.target.value });
  };

  //   for file handlr
  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };
  const OnSubmitHandler = async (e) => {
    e.preventDefault();
  console.log("test")
  console.log(input.fullname,"this is full name ")
  console.log(input.email,"this is email")
    const formData = new FormData();
  
   
    if (!input.fullname || !input.email) {
      toast.error("Please fill all required fields.");
      return;
    }

    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    console.log(formData)
    // formData.append("skills", input.skills);
    formData.append("skills", input.skills.join(","));
    if (input.file) {
      formData.append("file", input.file);
    }
  
    setLoading(true); // Show loader
  
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          withCredentials: true, // Include credentials (cookies)
        }
      );
  
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message); 
        setOpen(false); 
      } else {
        toast.error(res.data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error during profile update:", error);
  
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.message === "Network Error") {
        toast.error("Unable to connect to the server. Please check your network or server configuration.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false); // Hide loader
    }
  };
  
  
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={OnSubmitHandler}>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullname" className="text-right">
                  name
                </Label>
                <Input
                  id="fullname"
                  name="fullname"
                  type="text"
                  value={input.fullname}
                  onChange={onChangeHandler}
                  // value="email"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={onChangeHandler}
                  // value="email"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input
                  id="number"
                  name="number"
                  type="number"
                  value={input.phoneNumber}
                  onChange={onChangeHandler}
                  // value="number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  value={input.bio}
                  onChange={onChangeHandler}
                  name="bio"
                  // value="bio"

                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={onChangeHandler}
                  // value="skills"

                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  onChange={fileChangeHandler}
                  type="file"
                  accept="application/pdf"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                  <Loader2 className="mr-2 h-4 animate-spin" />
                  please wait
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
}

export default UpdateProfileDialog;
