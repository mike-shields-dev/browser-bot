document
  .getElementById("motor-stop")
  .addEventListener("click", () => socket.emit("motor", "stop"));
document
  .getElementById("motor-start")
  .addEventListener("click", () => socket.emit("motor", "start"));

const motorLimitStatus = document.getElementById("motor-limit-status");

const socket = io();

socket.on("ball hopper ready", () => {
  console.log("ball hopper ready");
});

socket.on("motor limit", (msg) => {
  if (msg === "open") {
    return (motorLimitStatus.textContent = "open");
  }
  if (msg === "closed") {
    return (motorLimitStatus.textContent = "closed");
  }
});
