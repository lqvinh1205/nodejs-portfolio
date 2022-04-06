import axios from "axios"
import Projects from "../models/projects";

export const create = async (req, res) => {
    try {
        console.log(req.body);
        const project = await new Projects(req.body).save()
        res.json(project)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            messages: "Ban khong the them project"
        })
    }
}

export const list = async (req, res) => {
    try {

        const projects = await Project.find().exec()
        res.json(projects)
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay project"
        })
    }
}

export const read = async (req, res) => {
    try {

        const project = await Project.findById(req.body._id).exec()
        res.json(project)
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay project"
        })
    }
}

export const remove = async (req, res) => {
    try {

        const project = await Project.findByIdAndRemove(req.body._id).exec()
        res.json(project)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the xoa project"
        })
    }
}

export const update = async (req, res) => {
    try {

        const project = await Project.findIdAndUpdate(req.body._id).exec()
        res.json(project)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the xoa project"
        })
    }
}