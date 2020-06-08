// use userRecord array
// playback based on keyPressed and time between each timeStamp

// reproduce array with keyCode and difference in timeStamp
// maybe use a namespace to complete this

const playBack = {};
// playBack.playSaved = [];


// global variables
const userRecord = [];
const pads = $('.pad');
const getTimeStamp = ((keyCode, timeStamp) => {
  userRecord.push({
    keyCode,
    timeStamp
  });
  
});


// sound array 
// const soundObject = {
//   keyCode: {
//     69: ['src="./assets/sounds/808/808-crash-1.wav"',]
//     },
//     82: ['src="./assets/sounds/808/808-hi-hat-13.wav"']
//   }




// const audioKeyCodes = [69,82,85,73,68,70,74,75]


// const playSaved = $.map(userRecord, function(timeStamp, index) {
//    console.log(`${timeStamp}${index}`);
   
//  })

  // function playSaved(object, index) {
  //   userRecord.map((object, index) => {
  //     console.log(`${object}${index}`);
      
  //   });
    
  // }


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
};

function playAudio(audio) {
  // to do: create "if pressed keys are data-keys from this array", playAudio(), else
  // ... to allow other keys to be bound (record, bpm, sound, help)
  if (!audio) return;
  audio.get(0).currentTime = 0;
  audio.get(0).play(); // thanks to this blog on why "play()" in jQuery requires the use of a (0) (https://exceptionshub.com/play-an-audio-file-using-jquery-when-a-button-is-clicked-2.html)
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

// lights on
function powerOn() {
  $('.switch').toggleClass('switchOn');
  $('.pad').toggleClass('padOn');
  $('h1').toggleClass('titleOn');
}


// INITIALIZE
function init() {

  // power button only visible object to signify it needs to be turned pushed
  $('#power').on('click', function () {
    powerOn();
  });

  // functionality for click (mobile or mouse experience)
  $('.pad').on('click', function (e) {
    clickFunction(e);
  });

  // functionality for keyboard interaction
  $('body').on('keydown', function (e) {
    keyFunction(e);
  });
}

// credit to sources
// ** some functionality designed around a javascript drum machine created by Wes Bos: https://www.youtube.com/watch?v=VuN8qwZoego

$(function () {
  init();
})