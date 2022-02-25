import mongoose from "mongoose";
// import userSchema from '../../models/User';
// const UserCols = mongoose.model("UserCol",userSchema);
import User from "../../../models/User";
import "../../../Connection";
export default async function (req, res) {
  switch (req.method) {
    case "POST":
      try {
        const { userName, email, age } = req.body;
        console.log(req.body);
        const newUser = new User({
          userName,
          email,
          age,
        });
        const result = await newUser.save();
        res.status(201).json({
          message: "User Inserted",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
      break;
    case "GET":
      try {
        const userData = await User.find();
        res.status(200).json({
          message: "All User Details",
          data: userData,
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
      break;
    default:
      res.status(500).json({
        message: error.message,
      });
  }
}
