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