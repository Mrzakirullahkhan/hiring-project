import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

    title:{
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

    

},{timestamps:true})