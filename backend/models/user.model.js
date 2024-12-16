import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        required:true
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String}, //url to resume file 
        resumerOriginalName:{stype:String},
        company:{type:mongoose.Schema.Types.ObjectId, ref:"company"},
        profilePhoto:{
            default:"",
            type:"String"
        }
    }

},{timestamps:true})
export const User = mongoose.model('User', userSchema)