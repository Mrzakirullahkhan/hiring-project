import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/Utils/constant";

function SignUp() {
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
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.log(error);
      }
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
              placeholder="Enter name"
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
              placeholder="Enter name"
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
          <Button className="w-full mt-4">Signup</Button>
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
