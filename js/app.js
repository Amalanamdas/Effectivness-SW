// Elements Declaration
var work = document.querySelector("#work-time");
var rest = document.querySelector("#rest-time");
var currentTime = document.querySelector(".time");

document.body.onload(displayCurrentTime());
// function init() {
//   startTime();
// }
//
function displayCurrentTime() {
  setTimeout(displayCurrentTime, 500);
  let date = new Date();
  let hours = date.getHours();
  let am_pm = date.getHours() <= 12 ? "PM" : "AM";
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
  currentTime.innerHTML = time;
}

