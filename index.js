document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  let stream;
  let face = "environment";

  async function play() {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: face },
      audio: true,
    });
    document.querySelector("video").srcObject = stream;
  }

  async function pauseAudio() {
    let audio = stream.getAudioTracks();
    if (audio.length) {
      audio[0].enabled = false;
    }
  }

  async function resumeAudio() {
    let audio = stream.getAudioTracks();
    if (audio.length) {
      audio[0].enabled = true;
    }
  }

  async function pauseCamera() {
    let cam = stream.getVideoTracks();
    if (cam.length) {
      cam[0].enabled = false;
    }
  }

  async function resumeCamera() {
    let cam = stream.getVideoTracks();
    if (cam.length) {
      cam[0].enabled = true;
    }
  }

  async function switchCamera() {
    face = face === "user" ? "environment" : "user";
    await play();
  }

  play()
});
