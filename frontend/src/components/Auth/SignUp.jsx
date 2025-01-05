import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function SignUp() {
    const [input, setinput] = useState({
        fullname: "",
        phoneNumber: "",
        email:"",
        file:"",
        role: "",
        password: "",
      });
    // handler function 
      const changeEventHandler =(e)=>{
                 setinput({...input, [e.target.name]:e.target.value})
      }
      const changeFileHandler =()=>{
        setinput({...input, file:e.target.files?.[0]})
      }
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
                checked={input.role==="student"}
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
                checked={input.role==="recruiter"}
                onChange={changeEventHandler}
                className="cursor-pointer"
                 />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2 mt-2">
                <label>Profile</label>
                <input type="file" accept="image/*" className="cursor-pointer" />
            </div>
          </div>
          <Button className="w-full mt-4">Signup</Button>
          <span className="text-sm gap-3">Alreay have an account ? <Link to="/login" className="text-red-600">Login</Link></span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
