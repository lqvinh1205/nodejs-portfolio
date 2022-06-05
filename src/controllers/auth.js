import jsonwebtoken from "jsonwebtoken";
import User from "../models/user";
export const getUser = async (req, res) => {
  try {
    const data = await User.find().exec();
    res.json(data);
  } catch (error) {}
};
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
    console.log(user);
    if (!user) {
      return res.status(404).json({
        msg: "user not found !",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({
        msg: "Password error",
      });
    }
    const token = jsonwebtoken.sign({ id: user.id }, "123456", {
      expiresIn: 60 * 60,
    });
    return res.json({
      token,
      user: {
        _id: user.id,
        email: user.email,
        role: user.role
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      messages: "Ban khong the dang nhap",
    });
  }
};
export const signup = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    console.log(user);
    if (user) {
      return res.json({
        msg: "Tai khoan da ton tai !",
      });
    }
    const data = await new User(req.body).save();
    return res.json(data);
  } catch (error) {}
};
