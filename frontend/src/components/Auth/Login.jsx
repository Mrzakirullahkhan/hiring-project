import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Login() {

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 my-10 rounded-md p-4 mx-auto"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <input
              placeholder="Enter your email"
              type="text"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <input
              placeholder="Enter name"
              type="password"
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
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button className="w-full mt-4">Login</Button>
          <span className="text-sm gap-3">
            Don't have an account ?{" "}
            <Link to="/signup" className="text-red-600">
              SignUp
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
