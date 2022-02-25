const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: String,
  email: String,
  age: String,
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
