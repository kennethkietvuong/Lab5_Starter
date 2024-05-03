// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const textBox = document.getElementById("text-to-speak");

  addVoices(synth, voiceSelect);
  selectVoice(voiceSelect);
  //talkButton(textBox, voiceSelect);
  textArea(textBox, voiceSelect);
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

function textArea(textBox, voiceSelect) {
  textBox.addEventListener("input", function () {
    textBox.textContent = this.value;
    //console.log(textBox.textContent);
    

    let u = new SpeechSynthesisUtterance();
    u.text = textBox.textContent;
    u.lang = voiceSelect.value;
    //u.voice = voiceSelect.value;

    speechSynthesis.speak(u);
  })
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

/**
 * TODO:
 * 1. Textbox functionality works as intended - we need to link text from text box
 * to the speech synthesis/voice/utterance?
 * 
 * 2. Button functionality - need to make it so pressing the button makes text-to-speech
 * happen and that it reads out from the text box with the selected voice/accent
 * 
 * 3. Image functionality - needs to change when the text-to-speech is talking
 */