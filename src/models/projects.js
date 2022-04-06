import mongoose, { Schema} from "mongoose"
const Project = new Schema({
    name: String,
    description: String
})

export default mongoose.model("Project", Project)