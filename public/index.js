document
  .getElementById("motor-stop")
  .addEventListener("click", () => socket.emit("motor", "stop"));
document
  .getElementById("motor-start")
  .addEventListener("click", () => socket.emit("motor", "start"));

const motorLimitStatus = document.getElementById("motor-limit-status");

const socket = io();

socket.on("socket connection established", () => console.log("socket connection established"));

socket.on("motor limit", (msg) => {
  if (msg === "open") {
    return (motorLimitStatus.textContent = "open");
  }
  if (msg === "closed") {
    return (motorLimitStatus.textContent = "closed");
  }
});
