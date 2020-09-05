//imports
import express from "express";
import mongoose from "mongoose";
import { studentRouter } from "./routes/studentRouter.js"
require("dotenv").config();

//conect with mongoose
mongoose.connect("mongodb+srv://" + process.env.USERDB + ":" + process.env.PWDDB + "@cluster0.pmvmc.mongodb.net/grades?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)

const app = express();

app.use(express.json())
app.use(studentRouter);

app.listen(3000, () => { console.log("API Iniciada") })