import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';

// registration
//  ye me user k registration k liye aik controller bana rha hu 

// export const register = async (req,res)=>{
//     try {
//         const {fullname,email,phoneNumber,password,role}= req.body;
//         if(!fullname || !email || !phoneNumber || !password || !role){
//             return res.status(400).json({
//                 message:"something is missing z",
//                 success:false
                
//             });
//         };
//         const user = await User.findOne({email});
//         if(user){
//             return res.status(400).json({
//                 message:"user already exist with this email",
//                 success:false
//             })
//         }
//         const hashedPassword = await bcrypt.hash(password,10);

//         await User.create({
//             fullname,
//             email,
//             phoneNumber,
//             password:hashedPassword,
//             role,
//         })
//         return res.status(201).json({
//             message:"Account created successfully",
//             success:true
//         })

//     } catch (error) {
//         return res.status(400).json({
//             message:"something is missing aaaaa",
//             success:false
            
//         });
//     }
// }
export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;

        // Check for missing fields
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists with this email",
                success: false
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        });
    } catch (error) {
        console.error("Error during registration:", error); // Log the error for debugging
        return res.status(500).json({
            message: "An error occurred during registration",
            success: false,
            error: error.message 
        });
    }
};

// login
// ab me user k login k liye aik controller bana rha hu 

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false,
            });
        }

        // Find user by email
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false,
            });
        }

        // Check password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false,
            });
        }
        // for userrole 

        if (role !== user.role) {
            return res.status(400).json({
                message: "Account does not exist with the current role",
                success: false,
            });
        }
        // yaha me token generate karunga user ka 
        const tokenData ={
            userId:user._id
        }
        
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY,{expiresIn:"1d"})
        user = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }
        return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpsOnly:true, sameSite:"strict"}).json({
            message:`welcome back ${user.fullname}`,
            user,
            success:true
        })
        // return res.status(200).json({
        //     message: "Login successful",
        //     success: true,
        // });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

// ab logout ka banega 
export const logout = async (req,res)=>{
        try {
            return res.status(200).cookie("token","",{maxAge:0}).json({
                message:"logged out successfylly"
            })
        } catch (error) {
            console.log(error)
        }
}

// profile update krne ja rha hu me 
export const updateProfile = async (req,res)=>{
    try {
        const {fullname, email,phoneNumber,bio,skills} = req.body;
        const file = req.file
       
        // cloudenary aeyga idhar 
        let skillsArray;
        if(skills){
            skillsArray = skills.split("");
        }
        
        const userId = req.id;
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"User not found",
                success:false
            })
        }
        // update the user profile data
        if(fullname) user.fullname = fullname
        if(email) user.fullname = email
        if(phoneNumber) user.fullname = phoneNumber
        if(bio) user.profile.skills = bio
        if(skills) user.profile.skills = skillsArray


        // resume come later here 

        await user.save()
        user = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }
        return res.status(200).json({
            message:"prfile update successfully",
            user,
            success:true
        })

    } catch (error) {
        
    }
}