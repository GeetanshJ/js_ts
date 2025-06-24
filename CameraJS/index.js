// let stream;
// let face = "environment";

// async function play() {
//   stream = await navigator.mediaDevices.getUserMedia({
//     video: { facingMode: face },
//     audio: true,
//   });
//   document.querySelector("video").srcObject = stream;
// }

// async function pauseAudio() {
//   let audio = stream.getAudioTracks();
//   if (audio.length) {
//     audio[0].enabled = false;
//   }
// }

// async function resumeAudio() {
//   let audio = stream.getAudioTracks();
//   if (audio.length) {
//     audio[0].enabled = true;
//   }
// }

// async function pauseCamera() {
//   let cam = stream.getVideoTracks();
//   if (cam.length) {
//     cam[0].enabled = false;
//   }
// }

// async function resumeCamera() {
//   let cam = stream.getVideoTracks();
//   if (cam.length) {
//     cam[0].enabled = true;
//   }
// }

// async function switchCamera() {
//   face = face === "user" ? "environment" : "user";
//   await play();
// }

// let mediaRecorder;
// let recordedChunks = [];

// function startRecording() {
//   recordedChunks = [];
//   mediaRecorder = new MediaRecorder(stream);

//   mediaRecorder.ondataavailable = (e) => {
//     if (e.data.size > 0) recordedChunks.push(e.data);
//   };

//   mediaRecorder.onstop = () => {
//     const blob = new Blob(recordedChunks, { type: "video/webm" });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "recorded-video.webm";
//     a.click();

//     URL.revokeObjectURL(url);
//   };

//   mediaRecorder.start();
//   alert("🎥 Recording started...");
// }

// function stopRecording() {
//   if (mediaRecorder && mediaRecorder.state === "recording") {
//     mediaRecorder.stop();
//   }
// }

for (let i = 1; i <= 5; i++) {
  document.getElementById(`div${i}`).addEventListener(
    "click",
    function (e) {
      console.log(`BUBBLE: div${i}`);
      e.stopPropagation()
    },
    true // or omit this line (default is bubbling)
  );
}
