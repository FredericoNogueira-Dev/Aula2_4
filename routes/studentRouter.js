import express from "express"
import { studentModel } from "../models/studentModel.js"

const app = express();

//CREATE
app.post("/student", async (req, res) => {

    try {
        const student = new studentModel(req.body);
        await student.save()
        res.send(student)
    } catch (err) {
        res.status(500).send(err)
    }
})

//RETRIEVE
app.get("/student", async (req, res) => {
    try {
        const student = await studentModel.find({})
        res.send(student)
    } catch (error) {
        res.status(500).send(error)
    }
})

//UPDATE
app.patch("/student/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await studentModel.findByIdAndUpdate({ _id: id }, req.body, {
            new: true
        })
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.put("/student/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await studentModel.findByIdAndUpdate({ _id: id }, req.body, {
            new: true
        })
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})

//DELETE
app.delete("/student/:id", async (req, res) => {
    try {
        const student = await studentModel.findByIdAndDelete({ _id: req.params.id })

        if (!student) {
            res.status(404).send("Documento não encontrado na coleção")
        } else {
            res.send(200)
        }

    } catch (error) {
        res.status(500).send(error)
    }
})

export { app as studentRouter }
