import express from "express";
import cors from 'cors'
import empRoutes from "./routes/employee.route.js";
const app = express();
// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here
const corsOptions = {
    origin : 'http://127.0.0.1:5501'
}

app.use(cors(corsOptions))

app.use("/api/v1/emp", empRoutes);

export default app;
