import mongoose, {Schema } from "mongoose";

const MyInfo = new Schema({
    name: String,
    age: String,
    contact: {
        facebook: String,
        zalo: String,
        instagram: String
    },
    images: String,
    infoQuickly: String,
    subDescription: String,
    description: String,
    iCanDo: String
})

export default mongoose.model("MyInfo", MyInfo)