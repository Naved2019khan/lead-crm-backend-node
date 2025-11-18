
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index.js";


const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api", router);


export default app;
