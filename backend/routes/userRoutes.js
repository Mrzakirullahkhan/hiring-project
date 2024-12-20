import express from "express";
 import { login, registure, updateProfile } from "../controller/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

 const router = express.Router();
 router.route("/registure").post(registure)
 router.route("/login").post(login)
 router.route("/profile/update").post(isAuthenticated,updateProfile)