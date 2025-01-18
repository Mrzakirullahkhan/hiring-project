import { application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";


export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required.",
                success: false
            })
        };
        // check if the user has already applied for the job
        const existingApplication = await application.findOne({ job: jobId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this jobs",
                success: false
            });
        }

        // check if the jobs exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        // create a new application
        const newApplication = await application.create({
            job:jobId,
            applicant:userId,
        });

        job.application.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
};
// get applied job 
export const getAppliedJobs = async (req,res) => {
    try {
        const userId = req.id;
        const aapplication = await application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!aapplication){
            return res.status(404).json({
                message:"No Applications",
                success:false
            })
        };
        return res.status(200).json({
            aapplication,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}


// applicant dekega kitne user agae hai 

// ye wala tora msla kr rha hai 
export const getApplicants = async (req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'application',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!job){
            return res.status(404).json({
                message:'Job not found.',
                success:false
            })
        };
        return res.status(200).json({
            job, 
            succees:true
        });
    } catch (error) {
        console.log(error);
    }
}

// status
export const updateStatus = async (req, res) => {
    try {
      const { status } = req.body;
      const applicationId = req.params.id;
      
      if (!status) {
        return res.status(400).json({
          message: 'Status is required',
          success: false
        });
      }
  
      // Find the application by application id
      const aapplication = await application.findOne({ _id: applicationId });
      if (!aapplication) {
        return res.status(404).json({
          message: "Application not found.",
          success: false
        });
      }
  
      // Update the status
      aapplication.status = status.toLowerCase();
      await aapplication.save();  // Corrected this line
  
      return res.status(200).json({
        message: "Status updated successfully.",
        success: true
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error.",
        success: false
      });
    }
  };
  