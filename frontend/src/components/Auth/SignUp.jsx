import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

function SignUp() {
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [input, setinput] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    file: "",
    role: "",
    password: "",
  });
  // handler function
  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setinput({ ...input, file: e.target.files?.[0] });
  };
  //   un submt form
  //   const onSubmitHandler = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("fullname", input.fullname);
  //     formData.append("email", input.email);
  //     formData.append("phoneNumber", input.phoneNumber);
  //     formData.append("password", input.password);
  //     formData.append("role", input.role);
  //     if (input.file) {
  //       formData.append("file", input.file);
  //     }

  //     try {
  //       const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //         withCredentials: true,
  //       });
  //       if (res.data.success) {
  //         navigate("/login");
  //         toast.success(res.data.message);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     //   toast.success(error.res.data.message);
  //     }
  //   };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Log input for debugging
    console.log("Input Data:", input);

    const formData = new FormData();
    formData.append("fullname", input.fullname || "");
    formData.append("email", input.email || "");
    formData.append("phoneNumber", input.phoneNumber || "");
    formData.append("password", input.password || "");
    formData.append("role", input.role || "");
    if (input.file) {
      formData.append("file", input.file);
    }

    // Log formData for debugging
    console.log("FormData Contents:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        // withCredentials: true, // Optional: Remove if not required
      });

      // Handle success response
      if (res.data.success) {
        console.log("Response Data:", res.data);
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error Response:", error.response);

      // Display error message if available
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
    dispatch(setLoading(false));
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={onSubmitHandler}
          className="w-1/2 border border-gray-200 my-10 rounded-md p-4 mx-auto"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label> Full Name</Label>
            <input
              placeholder="Enter name"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              type="text"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <input
              placeholder="Enter your email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              type="text"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <input
              placeholder="Enter password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              type="password"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="my-2">
            <Label>Phone</Label>
            <input
              placeholder="Enter phone number"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              type="number"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <RadioGroup className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2 mt-2">
              <label>Profile</label>
              <input
                type="file"
                onChange={changeFileHandler}
                accept="image/*"
                className="cursor-pointer"
              />
            </div>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 animate-spin" />
              please wait
            </Button>
          ) : (
            <Button className="w-full mt-4">Signup</Button>
          )}
          <span className="text-sm gap-3">
            Alreay have an account ?{" "}
            <Link to="/login" className="text-red-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
