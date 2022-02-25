import mongoose from "mongoose";
const url =
  "mongodb+srv://mern123:mern123@cluster0.tisfy.mongodb.net/userDb?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connection success"))
  .catch((err) => console.log(err.message));
