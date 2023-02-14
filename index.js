const express = require("express");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");
const { createServer } = require("http");
const httpServer = createServer(app);
//....................................
const User = require("./src/models/User");
const Message = require("./src/models/Message");
//....................................
require("./src/DataBase");
const io = new Server(httpServer, {
  cors: {
    origin: true,
    credentials: true,
    methods: ["GET", "POST"],
  },
});
let u = 1;
io.on("connection", (socket) => {
  console.log("User online " + u);
  u++;
  socket.on("AddUser", async (name, Avatar, phone, des) => {
    const element = new User({
      name,
      number: phone,
      Avatar,
      Descripcion: des,
      Admin: false,
    });
    await element.save();
    io.emit(
      "RecibeUser",
      element.name,
      element.id,
      element.number,
      element.Descripcion
    );
  });
  socket.on("AddMessage", async (id, text) => {
    const ele = new Message({ idUser: id, text: text });
    await ele.save();
    io.emit("RecibedUser", ele.id, ele.idUser, ele.text);
  });
  socket.on("DeleteMessage", async (id) => {
    await Message.findOneAndDelete({ _id: id });
    io.emit("RecibedDeleteMessage", id)
  });
  socket.on("DeleteUser", async (id) => {
    await User.findOneAndDelete({ _id: id });
    io.emit("RecibedUserDelete", id)
  });
});

/*................................................................. */

/********************************************************************/
app.use(cors());
app.use(express.json());
app.use(require("./src/routes/index"));
httpServer.listen(3000);
console.log("Server on port 3000");
