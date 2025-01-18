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
import { Loader2 } from "lucide-react";

function SignUp() {
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    role: "",
    password: "",
  });
  const [file, setFile] = useState(null);

  // Event Handlers
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setFile(e.target.files?.[0] || null);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Prepare FormData
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (file) {
      formData.append("file", file); // Attach the file
    }

    try {
      dispatch(setLoading(true)); // Show loading spinner

      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          // Don't manually set Content-Type; axios handles it automatically
        },
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error Response:", error.response);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      dispatch(setLoading(false)); // Hide loading spinner
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
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Enter name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="my-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="my-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter password"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="my-2">
            <label>Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="Enter phone number"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                Student
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                Recruiter
              </label>
            </div>
            <div className="my-2">
              <label>Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="w-full p-2 border rounded cursor-pointer"
              />
            </div>
          </div>
          {loading ? (
            <button disabled className="w-full p-2 bg-gray-400">
              Please wait...
            </button>
          ) : (
            <button className="w-full p-2 bg-blue-500 text-white">Sign Up</button>
          )}
          <p className="text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}


export default SignUp;
