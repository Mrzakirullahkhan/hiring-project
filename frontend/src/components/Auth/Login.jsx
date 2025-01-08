import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link,  useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/Utils/constant";

function Login() {
    const navigate = useNavigate();
  const [input, setinput] = useState({
    email: "",
    role: "",
    password: "",
  });
  // handler function
  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  //   submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // yaha me backend se data check kr rha hu
    try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res)
        if (res.data.success) {
            navigate("/");
            toast.success(res.data.message);
        }
    } catch (error) {
        toast.error("Login failed. Please check your credentials.");
      
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
          <h1 className="font-bold text-xl mb-5">Login</h1>

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

          <div>
            <RadioGroup className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  type="radio"
                  name="role"
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
