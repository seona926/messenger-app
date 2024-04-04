const mongoose = require("mongoose");

const userSchema = new new mongoose.Schema({
  nickname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: "" },
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  signUpDate: { type: Date, default: Date.now },
  selfIntroduction: { type: String, default: "" },
})();

const User = mongoose.model("User", userSchema);

module.exports = User;
