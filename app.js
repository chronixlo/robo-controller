var SERVER_IP = "192.168.4.1";

var leftButton = document.getElementById("left");
var rightButton = document.getElementById("right");

leftButton.addEventListener("pointerdown", () => pointerDown("left"));
leftButton.addEventListener("pointerup", () => pointerUp("left"));

rightButton.addEventListener("pointerdown", () => pointerDown("right"));
rightButton.addEventListener("pointerup", () => pointerUp("right"));

function pointerDown(button) {
  communicate(button, 1023);
}

function pointerUp(button) {
  communicate(button, 0);
}

function communicate(param, value) {
  fetch("http://" + SERVER_IP + "/comm?" + param + "=" + value);
}
