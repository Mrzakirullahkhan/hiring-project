import { Job } from "../models/job.model.js";


export const postJob = async (req,res) => {
       try {
        const  {title, description, requirments, salary, location, jobType, experience, position, companyId}=req.body;
        const userId = req.id;
         if(!title || !description || !requirments || !salary || !location || !jobType || !experience || !position || !companyId){
             return res.status(400).json({
              message:"something is missing",
              success:true
             })
         }
         const job = await Job.create({
              title,
              description,
              requirments:requirments.split(","),
              salary:Number(salary),
              location,
              jobType,
              experienceLevel:experience,
              position,
              created_by:userId,
              company:companyId
      
         })
         return res.status(200).json({
            message:"job posted successfully",
            success:true
         })
       } catch (error) {
        console.log(error)
       }
}