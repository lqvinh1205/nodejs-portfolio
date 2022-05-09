import mongoose, { Schema } from "mongoose";

const SkillSchema = new Schema({
    name: String,
    images: Array,
    description: String
})

export default mongoose.model("Skill", SkillSchema)