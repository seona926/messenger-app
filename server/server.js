const express = require("express");
const cors = require("cors"); // cors 미들웨어 import
const app = express();
const questionRoute = require("./routes/question");
const messageRoute = require("./routes/message");
const mongoose = require("mongoose");

app.use(cors()); // 모든 도메인에 대한 요청 허용

const mongoURI =
  "mongodb+srv://admin:park240404!!@messenger-app.05wkjdw.mongodb.net/";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB database");
});

app.use(express.json());

// Questions route
app.use("/question", questionRoute);
app.use("/message", messageRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
