// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornImage = document.body.querySelector("img");
  const hornSelect = document.getElementById("horn-select");
  const hornAudio = document.querySelector("audio");
  
  selectHorn(hornSelect, hornImage, hornAudio);
  playSound(hornSelect, hornAudio);
  volumeSlider(hornAudio);
}

// DONE:
function selectHorn(hornSelect, hornImage, hornAudio) {
  hornSelect.addEventListener("change", function() {
    let newImage = this.value + ".svg";
    hornImage.src = "/assets/images/" + newImage;

    let newAudio = this.value + ".mp3";
    hornAudio.src = "/assets/audio/" + newAudio;
  });
}

// DONE:
function playSound (hornSelect, hornAudio) {
  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  
  playButton.addEventListener("click", function() {
    hornAudio.play();

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}

// DONE:
function volumeSlider (hornAudio) {
  const volumeControl = document.querySelector("input[type='range']");
  const volumeIcon = document.querySelector("div img");
  hornAudio.volume = volumeControl.value / 100;

  volumeControl.addEventListener("input", function() {
    hornAudio.volume = this.value / 100;
    
    if (this.value == 0) {
      volumeIcon.src = "/assets/icons/volume-level-0.svg";
    }
    else if ((this.value >= 1) && (this.value < 33)) {
      volumeIcon.src = "/assets/icons/volume-level-1.svg";
    }
    else if ((this.value >= 33) && (this.value < 67) ) {
      volumeIcon.src = "/assets/icons/volume-level-2.svg";
    }
    else {
      volumeIcon.src = "/assets/icons/volume-level-3.svg";
    }
  });
}