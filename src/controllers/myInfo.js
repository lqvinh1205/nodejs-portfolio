import axios from "axios"
import MyInfo from "../models/myInfo";

export const create = async (req, res) => {
    try {
        console.log(req.body);
        const project = await new MyInfo(req.body).save()
        res.json(project)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            messages: "Ban khong the them thong tin"
        })
    }
}

export const read = async (req, res) => {
    try {
        const project = await MyInfo.findById("624fb6379fa6247e6084f51c").exec()
        res.json(project)
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay thong tin"
        })
    }
}

export const remove = async (req, res) => {
    try {

        const project = await MyInfo.findByIdAndRemove("624fb6379fa6247e6084f51c").exec()
        res.json(project)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the xoa thong tin"
        })
    }
}

export const update = async (req, res) => {
    try {

        const project = await MyInfo.findByIdAndUpdate("624fb6379fa6247e6084f51c", req.body, { new: true}).exec()
        res.json(project)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the cap nhat thong tin"
        })
    }
}