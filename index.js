

let stream;

async function play() {
  stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "user" },
    audio: true,
  });
  document.querySelector("video").srcObject = stream;
}

async function pause() {
  stream.getTracks().forEach((element) => {
    element.stop();
  });

  stream = null;
  document.querySelector("video").srcObject = null;
}
