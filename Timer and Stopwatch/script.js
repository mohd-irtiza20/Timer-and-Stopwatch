// Digital Clock
function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = hours + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById("clockDisplay").innerText = time;
  setTimeout(showTime, 1000); // Update every second
}

showTime(); // Call the function to display the time initially

// Stopwatch
var stopwatchInterval;
var stopwatchRunning = false;
var stopwatchTime = 0;

function updateStopwatch() {
  var milliseconds = stopwatchTime % 100;
  var seconds = Math.floor((stopwatchTime / 100) % 60);
  var minutes = Math.floor((stopwatchTime / 6000) % 60);
  var hours = Math.floor(stopwatchTime / 360000);

  var time =
    formatTime(hours) +
    ":" +
    formatTime(minutes) +
    ":" +
    formatTime(seconds) +
    ":" +
    formatMilliseconds(milliseconds);

  document.getElementById("stopwatchDisplay").innerText = time;
  stopwatchTime++;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function formatMilliseconds(milliseconds) {
  if (milliseconds < 10) {
    return "00" + milliseconds;
  } else if (milliseconds < 100) {
    return "0" + milliseconds;
  } else {
    return milliseconds;
  }
}

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
    stopwatchRunning = true;
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  updateStopwatch();
}

// Event Listeners
document.getElementById("startButton").addEventListener("click", startStopwatch);
document.getElementById("stopButton").addEventListener("click", stopStopwatch);
document.getElementById("resetButton").addEventListener("click", resetStopwatch);
