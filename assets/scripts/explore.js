// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const textBox = document.getElementById("text-to-speak");

  addVoices(synth, voiceSelect);
  selectVoice(voiceSelect);
  //talkButton(textBox, voiceSelect);
}

// DONE:
function addVoices(synth, voiceSelect) {
  synth.addEventListener("voiceschanged", function() {
    let voiceList = synth.getVoices();

    voiceList.forEach((voice) => {
      const option = document.createElement("option");
      // console.log(voice.name);
      // console.log(voice.lang);
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    });
  });
}

// TODO:
function selectVoice(voiceSelect) {
  voiceSelect.addEventListener("change", function() {
    //console.log(this.value);
  });
}

// TODO:
function talkButton(textBox, voiceSelect) {
  const pressButton = document.querySelector("button");

  pressButton.addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(textBox.value);
    //const selectedOption = voiceSelect.g
    //console.log(selectedOption);
  });
}