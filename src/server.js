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

const { arduino, j5 } = require("./arduino");

arduino.on("ready", () => {
  io.on("connection", (socket) => {
    console.log("client socket connection established");

    const motor = new j5.Led(2);
    const motorLimit = new j5.Switch(3);

    socket.on("motor", (msg) => {
      msg === "start" ? motor.on() : msg === "stop" ? motor.off() : null;
    });

    motorLimit.on("close", () => socket.emit("motor limit", "closed"));
    motorLimit.on("open", () => socket.emit("motor limit", "open"));

    socket.on("close", () => console.log("Socket closed"));
    socket.on("disconnect", () => console.log("Socket disconnected"));
  });
});

module.exports = server;
