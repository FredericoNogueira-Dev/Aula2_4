import express from "express";
import mongoose from "mongoose";
import { studentRouter } from "./routes/studentRouter.js"

mongoose.connect("mongodb+srv://Fred:Rayra@cluster0.pmvmc.mongodb.net/grades?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)

const app = express();

app.use(express.json())
app.use(studentRouter);

app.listen(3000, () => { console.log("API Iniciada") })