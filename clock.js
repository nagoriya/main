function showTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  // Add leading zero to single digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currentTime = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerText = currentTime;
}

// Call the function every 1000ms (1 second)
setInterval(showTime, 1000);

// Call once to avoid initial 1 sec delay
showTime();
