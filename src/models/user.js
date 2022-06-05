import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";
const User = new Schema({
  email: String,
  password: String,
  role: {
    type: Number,
    default: 1,
  },
});

User.methods = {
  authenticate(password) {
    return this.password == this.entryPassword(password);
  },
  entryPassword(password) {
    if (!password) return;
    return createHmac("sha256", "abc").update(password).digest("hex");
  },
};
User.pre("save", function (next) {
  this.password = this.entryPassword(this.password);
  next();
});
export default mongoose.model("User", User);
