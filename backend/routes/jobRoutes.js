import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controller/jobController.js";


 const router = express.Router();
 router.route("/post").post(isAuthenticated,postJob)
 router.route("/get").get(isAuthenticated,getAllJobs)
 router.route("/getadminjobs").get(isAuthenticated,getAdminJobs)
 router.route("/get/:id").put(isAuthenticated,getJobById)

 export default router;