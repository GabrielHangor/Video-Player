const video = document.querySelector("video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playButton = document.querySelector("#play-button");
const volumeIcon = document.querySelector("#volume-icon");
const volumeRange = document.querySelector(".volume-range");
const volumeBar = document.querySelector(".volume-bar");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const fullscreenBtn = document.querySelector(".fullscreen");

// Play & Pause ----------------------------------- //

function showPlayIcon() {
  playButton.classList.replace("fa-pause", "fa-play");
  playButton.setAttribute("title", "Play");
}

function togglePlay() {
  video.paused
    ? (video.play(),
      playButton.classList.replace("fa-play", "fa-pause"),
      playButton.setAttribute("title", "Pause"))
    : (video.pause(), showPlayIcon());
}

// Progress Bar ---------------------------------- //

//Get the exact time in seconds/minutes
function displayTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  minutes = minutes > 9 ? minutes : `0${minutes}`;
  return `${minutes}:${seconds}`;
}

function updateProgress() {
  progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  currentTime.textContent = `${displayTime(video.currentTime)} /`;
  duration.textContent = `${displayTime(video.duration)}`;
}
// Volume Controls --------------------------- //

// Change Playback Speed -------------------- //

// Fullscreen ------------------------------- //

// Event listeners
playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("ended", showPlayIcon);
video.addEventListener("timeupdate", updateProgress);
video.addEventListener("canplay", updateProgress);
