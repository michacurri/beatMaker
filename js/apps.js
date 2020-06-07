// global variables
const userRecord = [];
const pads = $('.pad');
// const audioKeyCodes = [69,82,85,73,68,70,74,75]

const getTimeStamp = ((keyCode, timeStamp) => {
  console.log(`${keyCode} and ${timeStamp}`)
  userRecord.push({
    keyCode,
    timeStamp
  });
});

// FUNCTIONS
function clickFunction(e) {
  const timeStamp = e.timeStamp;
  const keyCode = e.currentTarget.attributes["data-key"].value;
  const audio = $(`audio[data-key="${keyCode}"]`);
  const pad = $(`.pad[data-key="${keyCode}"]`);
  playAudio(audio);
  addClass(pad);
  removeClass(pad);
  getTimeStamp(keyCode, timeStamp);
};

function keyFunction(e) {
  const timeStamp = e.timeStamp;
  //which key has been hit
  const keyCode = e.which;
  //find the corresponding audio file linked to the keydown 
  const audio = $(`audio[data-key="${keyCode}"]`);
  //pad also labeled with keyCode, find the correct pad and activate
  const pad = $(`.pad[data-key="${keyCode}"]`);
  playAudio(audio);
  addClass(pad);
  removeClass(pad);
  getTimeStamp(keyCode, timeStamp)
}


// to play audio files and to allow repeated key presses at user discretion
function playAudio(audio) {
  // to do: create "if pressed keys are data-keys from this array", playAudio(), else
  // ... to allow other keys to be bound (record, bpm, sound, help)
  if (!audio) return;
  audio.get(0).currentTime = 0;
  audio.get(0).play();
};

// change styling effects for pad interaction
function addClass(onPad) {
  onPad.addClass('padActive');
};

// to remove the above mentioned styling after the CSS transition has ended
// thank you to Talia for the help with my $.each loop on transitionend
function removeClass() {
  $.each(pads, (index, offPad) => {
    $(offPad).on('transitionend', function () {
      $(offPad).removeClass('padActive');
    });
  });
};

// instructions: open and close window
function openHelp() {
  $('#openHelpBtn').on('click', function () {
    $('.help').addClass('openHelp');
  });
};

function closeHelp() {
  $('#closeHelpBtn').on('click', function () {
    $('.help').removeClass('openHelp');
  });
};


// INITIALIZE
function init() {

  // power button only visible object to signify it needs to be turned pushed
  $('#power').on('click', function () {
    $('.switch').toggleClass('switchOn');
    $('.pad').toggleClass('padOn');
  })

  // functionality for click (mobile or mouse experience)

  $('.pad').on('click', function (e) {
    clickFunction(e);
  })


  // functionality for keyboard interaction
  $('body').on('keydown', function (e) {
    keyFunction(e);
  })
}

// ** some functionality designed around a javascript drum machine created by Wes Bos: https://www.youtube.com/watch?v=VuN8qwZoego

$(function () {
  init();
})