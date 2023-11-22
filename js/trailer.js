var nav = document.querySelector("nav");

function removeMuted(event) {
  event.preventDefault();
  var video = document.getElementById("Myvideo");
  video.muted = false;
}

const content = document.getElementById("cnt");
const trailerBtn = document.getElementById("trailerBtn");

trailerBtn.addEventListener("click", function () {
  content.style.display = "none";
});

function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById("session");
  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }
  if (hrs > 12) {
    hrs = hrs - 12;
  }

  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}
setInterval(displayTime, 10);
