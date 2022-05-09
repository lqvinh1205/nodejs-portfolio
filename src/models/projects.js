import mongoose, { Schema} from "mongoose"
const Project = new Schema({
    name: String,
    description: String,
    linkPreview: String,
    linkSource: String,
    images: String,
    auth: String
}, { timestamps: true})

export default mongoose.model("Project", Project)