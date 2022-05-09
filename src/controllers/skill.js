import axios from "axios"
import Skill from "../models/skill";

export const create = async (req, res) => {
    try {
        const skill = await new Skill(req.body).save()
        res.json(skill)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            messages: "Ban khong the them ky nang"
        })
    }
}

export const list = async (req, res) => {
    try {

        const skills = await Skill.find().exec()
        res.json(skills)
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay ky nang"
        })
    }
}

export const read = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id).exec()
        res.json(skill)
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay ky nang"
        })
    }
}

export const remove = async (req, res) => {
    try {

        const skill = await Skill.findByIdAndRemove(req.params.id).exec()
        res.json(skill)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the xoa ky nang"
        })
    }
}

export const update = async (req, res) => {
    try {

        const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true}).exec()
        res.json(skill)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the cap nhat thong tin"
        })
    }
}