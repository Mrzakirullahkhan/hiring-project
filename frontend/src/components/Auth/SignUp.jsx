import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";

function SignUp() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 my-10 rounded-md p-4 mx-auto"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label> Full Name</Label>
            <input
              placeholder="Enter name"
              type="text"
              className="w-full p-2 border rounded"
            />
          </div>
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
          <div className="my-2">
            <Label>Phone</Label>
            <input
              placeholder="Enter name"
              type="password"
              className="w-full p-2 border rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
