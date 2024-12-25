import {Company} from "../models/company.model.js"


const registerCompany = async (req,res)=>{
    try {
        const {compnayName} = req.body;
        if(!compnayName){
           return res.status(400).json({
            message:"company name is required",
            status:false,

           })
        }
        let company = await Company.findOne({name:compnayName});
        if(company){
             return res.status(400).json({
                  message:"we can't registure same company",
                  success:false
             })
        }
        company = await Company.create({
            name:compnayName,
            userId:req.id
        })
        return res.status(200).json({
            message:"company registered successfully",
            company,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

// ab jo company banai hai mene isko get bhi krna hai mere uskje liye bana rha hu ab 
export const getCompany = async (req,res)=> {
      try {
        const userId = req.id; //logged in user id
        const companies = await Company.find({userId});
        if(!companies){
            return res.status(404).json({
                message:"companies not found !",
                status:false
            })
        }
      } catch (error) {
        console.log(error)
      }
}

// get company by Id
export const getCompanyById = async (req,res)=>{
       try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if(!companyId){
           return res.status.json({
            message:"No company Found !",
            status:false
           })
        }
        return res.status(200).json({
            company,
            status:true
        })
       } catch (error) {
        
       }
}