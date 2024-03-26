import express from "express";
import { newUserWithValidation } from "./user.controller.js";

const app = express()

app.use(express.json());
app.post("/new", newUserWithValidation);

export default app;
