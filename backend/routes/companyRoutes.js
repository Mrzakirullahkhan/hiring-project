import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controller/companyController.js";

 const router = express.Router();
 router.route("/register").post(isAuthenticated,registerCompany)
 router.route("/get").post(isAuthenticated,getCompany)
 router.route("/get/:id").get(isAuthenticated,getCompanyById)
 router.route("/profile/update/:id").post(isAuthenticated,updateCompany)

 export default router;