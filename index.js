

let stream;
let face = "user";

async function play(face) {
  stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: face },
    audio: true,
  });
  document.querySelector("video").srcObject = stream;
}

async function pauseAudio() {
  let audio = stream.getAudioTracks();
  if(audio.length){
    audio[0].enabled = false;
  }
}

async function resumeAudio() {
  let audio = stream.getAudioTracks();
  if(audio.length){
    audio[0].enabled = true;
  }
}

async function pauseCamera() {
  let cam = stream.getVideoTracks();
  if(cam.length){
    cam[0].enabled = false;
  }
}

async function resumeCamera() {
  let cam = stream.getVideoTracks();
  if(cam.length){
    cam[0].enabled = true;
  }
}

async function switchCamera() {
    face = face === "user" ? "environment" : "user"
    play(face)
}
