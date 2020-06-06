// beatMaker

// playable on keyboard using data-key keybindings: LeftHand [E,R,D,F] and RightHand [U,I,J,K].
// or on mobile using thumbs 

// jQuery will use on clicks, or keydown, event listeners for user interaction.

// sounds will be provided either in an assets folder and initiated using the <audio> tag and JQuery .keydown(Handler)
// or be integrated using a library such as Howler API.

// each pad will (for MVP) be linked to a single sound.


// ** STRETCH TARGET ** //

// Stretch target will allow users to record for a period of time and layer their sounds via a loop
// the MediaRecorder API may be used in this feature and information stored in an object array using separate variables. 
// Set Timeout, Set Interval API's may be used to store timing information.



//// my code

// global variables

const userRecord = [];
const pads = $('.pad');

///////////// do not delete

// record each keydown and put the keyCode into userRecord Array
// record time of each keydown with event.timeStamp

// const timeStamp = event.timeStamp;
// userRecord.push({
//   keyCode,
//   timeStamp
// });

// find the time difference between

////////////////// do not delete


// FUNCTIONS
function clickFunction(e) {
  const dataKey = e.currentTarget.attributes["data-key"];
  const clickAudio = $(`audio[data-key="${dataKey.nodeValue}"]`);
  const clickPad = $(`.pad[data-key="${dataKey.nodeValue}"]`);
  playAudio(clickAudio);
  addClass(clickPad);
  removeClass(clickPad);
};

function keyFunction(e) {
  //which key has been hit
  const keyCode = e.which;
  //find the corresponding audio file linked to the keydown 
  const audio = $(`audio[data-key="${keyCode}"]`);
  //pad also labeled with keyCode, find the correct pad and activate
  const pad = $(`.pad[data-key="${keyCode}"]`);

  // create if keys are data-keys from this array, playAudio(), else
  playAudio(audio);
  addClass(pad);
  removeClass(pad); 
}

function playAudio(audio) {
  if (!audio) return;
  audio.get(0).currentTime = 0;
  audio.get(0).play();
};

function addClass(onPad) {
  onPad.addClass('padActive');
};

function removeClass() {
  $.each(pads, (index, offPad) => {
    $(offPad).on('transitionend', function () {
      $(offPad).removeClass('padActive');
    });
  });
};

function openHelp() {
  $('#openHelpBtn').on('click', function() {
    $('.help').addClass('openHelp');
  });
};

function closeHelp() {
  $('#closeHelpBtn').on('click', function() {
    $('.help').removeClass('openHelp');
  });
};




// INITIALIZE
function init() {

  // flash the border of the power button to signify it needs to be turned on
  $('#power').on('click', function () {
    $('.switch').toggleClass('switchOn');
    $('.pad').toggleClass('padOn');

  })
  // once pressed, state of machine (pads, other buttons) will light up

  // instructions pop up



  // on click (mobile or mouse experience)
  $('.pad').on('click', function (e) {
    clickFunction(e);
    console.log();

  })

  $('body').on('keydown', function (e) {
    keyFunction(e);
  })

}


$(function () {
  init();
})