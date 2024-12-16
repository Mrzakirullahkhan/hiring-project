import { User } from "../models/user.model.js";


export const registure = async (req,res)=>{
    try {
        const {fullName,email,phoneNumber,password,role}= req.body;
        if(!fullName || !email || !phoneNumber || !password || !role){
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
    } catch (error) {
        
    }
}