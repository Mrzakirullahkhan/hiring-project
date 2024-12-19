import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"

// registration
//  ye me user k registration k liye aik controller bana rha hu 
export const registure = async (req,res)=>{
    try {
        const {fullname,email,phoneNumber,password,role}= req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"something is missing",
                success:false
                
            });
        };
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"user already exist with this email",
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role
        })

    } catch (error) {
        return res.status(400).json({
            message:"something is missing",
            success:false
            
        });
    }
}

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
        const user = await User.findOne({ email });

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
        // Continue with role check or token generation if needed

        return res.status(200).json({
            message: "Login successful",
            success: true,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};
