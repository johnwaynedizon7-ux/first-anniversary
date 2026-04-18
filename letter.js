function toggleLetter() {
  const letter = document.getElementById("letter");
  letter.classList.toggle("open");

  document.body.classList.toggle("open-letter");
  startTyping();
}

let started = false;
let i = 0;

// grab text once, keeping <br> tags
const fullText = document.getElementById("typing").innerHTML;

function startTyping() {
  if (started) return;
  started = true;

  document.getElementById("typing").innerHTML = "";

  function type() {
    if (i < fullText.length) {
      document.getElementById("typing").innerHTML += fullText.charAt(i);
      i++;
      setTimeout(type, 30);
    }
  }

  type();
}

document.getElementById("goBtn").addEventListener("click", function() {
  // Redirect to another HTML file
  window.location.href = "pic.html"; 
});

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");

// start with audio playing (because autoplay is set)
playPauseBtn.textContent = "Stop Music";

playPauseBtn.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Stop Music";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play Music";
  }
});


