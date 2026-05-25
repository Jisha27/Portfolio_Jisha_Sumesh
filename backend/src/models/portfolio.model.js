import mongoose from "mongoose";

const portfolioSchema =
new mongoose.Schema({

 hero:Object,

 about:Object,

 skills:Array,

 projects:Array,

 contact:Object

},
{
 timestamps:true
});

const Portfolio =
mongoose.model(
 "Portfolio",
 portfolioSchema
);

export default Portfolio;