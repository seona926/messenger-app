const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  receiver_id: { type: String, required: true },
  message: { type: String, required: true },
  send_date: { type: Date, default: Date.now },
  read_date: { type: Date },
  read_yn: { type: String, default: "N" },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
