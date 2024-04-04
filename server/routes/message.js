const express = require("express");
const router = express.Router();
const Message = require("../models/message");

router.post("/sendMessage", async (req, res) => {
  try {
    const { sender, receiver, receiver_id, message } = req.body;

    const newMessage = new Message({
      sender,
      receiver,
      receiver_id,
      message,
      read_yn: "Y",
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/getMessage/:userid", async (req, res) => {
  const userId = req.params.userid;
  try {
    // receiver_id가 userId와 일치하고 send_date가 가장 최신인 메시지를 조회
    const message = await Message.findOne({ receiver_id: userId }).sort({
      send_date: -1,
    }); // 최신 날짜 순으로 정렬

    if (message) {
      res.json(message);
    } else {
      res.status(404).send("Message not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
