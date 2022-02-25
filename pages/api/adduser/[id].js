import mongoose from "mongoose";
import "../../../Connection";
import User from "../../../models/User";
const handler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;
  switch (method) {
    case "GET":
      try {
        const result = await User.findById(id);
        if (!result) {
          return res.status(500).json({
            message: error.message,
          });
        }
        res.status(200).json({
          message: "Get one user",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
      break;
    case "PUT":
      try {
        const result = await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
        if (!result) {
          return res.status(500).json({
            message: error.message,
          });
        }
        return res.status(200).json({
          message: "User is updated",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          message: error,
        });
      }
    case "DELETE":
      try {
        const result = await User.findByIdAndDelete(id);
        if (!result) {
          return res.status(500).json({
            message: error.message,
          });
        }
        res.status(200).json({
          message: "User Deleted",
          data: result,
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
};

export default handler;
