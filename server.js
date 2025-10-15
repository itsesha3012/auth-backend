import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";
import sendEmail from "./utils/email.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

connectDB();

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
