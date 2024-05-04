// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const textBox = document.getElementById("text-to-speak");

  addVoices(synth, voiceSelect);
  textArea(textBox);
  talkButton(synth, textBox, voiceSelect);
}

// DONE:
function addVoices(synth, voiceSelect) {
  synth.addEventListener("voiceschanged", function() {
    let voiceList = synth.getVoices();

    voiceList.forEach((voice) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    });
  });
}

// DONE:
function textArea(textBox) {
  textBox.addEventListener("input", function () {
    textBox.textContent = this.value;
  })
}

// DONE:
function talkButton(synth, textBox, voiceSelect) {
  const pressButton = document.querySelector("button");

  pressButton.addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(textBox.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    let voiceList2 = synth.getVoices();

    voiceList2.forEach((voice) => {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    });
    imageSpeak(synth, utterThis);
    synth.speak(utterThis);
  });
}

// DONE:
function imageSpeak(synth, utterThis) {
  const imageSmile = document.querySelector("img");

  utterThis.addEventListener("start", (event) => {
    imageSmile.src = "/assets/images/smiling-open.png";
  });

  utterThis.addEventListener("end", (event) => {
    imageSmile.src = "/assets/images/smiling.png";
  });
}