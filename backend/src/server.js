import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import portfolioRoutes from "./routes/portfolio.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());

app.use(express.json());

app.use(
 "/api/portfolio",
 portfolioRoutes
);

app.get("/",(req,res)=>{

 res.send("Backend Running");

});

app.listen(PORT,()=>{

 console.log(
 `Server running on ${PORT}`
 );

});