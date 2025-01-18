import {Company} from "../models/company.model.js"


export const registerCompany = async (req,res)=>{
    try {
        const {companyName} = req.body;
        if(!companyName){
           return res.status(400).json({
            message:"company name is required",
            status:false,

           })
        }
        let company = await Company.findOne({name:companyName});
        if(company){
             return res.status(400).json({
                  message:"we can't registure same company",
                  success:false
             })
        }
        company = await Company.create({
            name:companyName,
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
        return res.status(200).json({
            message:"companies are available for this user",
            companies,
            success:true
        })
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
        console.log(error)
       }
}


// update companies 
export const updateCompany = async (req, res) =>{
       try {
        const {name, description, website, location} = req.body;
        // idhar cloudanry aega
       
        const updateData = {name, description, website, location};
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new:true});
        if(!company){
             return res.status(404).json({
                message:"company no found",
                success:false
             })
        }
        return res.status(200).json({
            message:"company information updated",
            success:true
        })
       } catch (error) {
        console.log(error)
       }
}