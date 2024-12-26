import { Job } from "../models/job.model.js";



// post job k liye hai ye 
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
            message:"job created successfully",
            job,
            success:true
         })
       } catch (error) {
        console.log(error)
       }
}

// ab yaha me sab jobs ko get krunga jo me search me dekna chah rha hu 

export const getAllJobs = async ()=>{
    try {
        const keyword = req.query.keyword || "" ;
        const query = {
            $or:[
                {title:{$regex:keyword, $option:"i"}},
                {description:{$regex:keyword, $option:"i"}},

            ]
        }
        const jobs = await Job.find(query);
        if(!jobs){
            return res.status(404).json({
                message:"no jobs found !",
                success:flase
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

// ab me job get krunga user ki id se jo login hai 

export const getJobById = async (req,res)=>{
    try {
        const jobId = res.params.id;
        const job = await Job.findById(jobId)
        if(!job){
            return res.status(404).json([
                message:"job not found",
                success:false
            ])
        }

        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}