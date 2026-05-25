import Portfolio
from "../models/portfolio.model.js";

export const getPortfolio =
async(req,res)=>{

 try{

 const data =
 await Portfolio.findOne();

 res.status(200)
 .json(data);

 }

 catch(error){

 res.status(500)
 .json({
 message:error.message
 });

 }

};