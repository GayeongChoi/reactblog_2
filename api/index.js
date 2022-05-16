const express = require("express");
const app = express();
const dotenv = require("dotenv"); //환경변수 실행
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('몽고DB랑 연결이 되었습니다."'))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", catRoute);

app.listen(5070, () => {
  console.log("Backend is running = 잘 나오는 중");
});
