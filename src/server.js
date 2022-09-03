// Express Server & Socket.io Setup
const path = require("path");
const http = require("http");

const express = require("express");
const app = express();
app.use(require("cors")());
app.use(express.static(path.join(__dirname, "../public")));

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const { board, j5 } = require("./arduino/board");

board.on("ready", () => {
  io.on("connection", (socket) => {
    const connectMsg = "socket connection established";
    console.log(connectMsg);
    socket.emit(connectMsg);

    const motorPower = new j5.Led(2);
    const motorLimit = new j5.Switch(3);

    socket.on("motor", (msg) => {
      if(msg === "start") {
        motorPower.on();
        socket.emit("");
      }

      if(msg === "stop") {
        motorPower.off();
      }
    });

    motorLimit.on("close", () => {
      motorPower.off();
      socket.emit("motor", "stopped");
    });

    motorLimit.on("open", () => {
      socket.emit("motor", "started");
    });

    socket.on("close", () => console.log("Socket closed"));
    socket.on("disconnect", () => console.log("Socket disconnected"));
  });
});

module.exports = server;
