import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"
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
        
    }
}

// ab me user k login k liye aik controller bana rha hu 