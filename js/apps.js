// GlOBAL VARIABLES
const pads = $('.pad');
  
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
  const keyCode = e.which;
  const audio = $(`audio[data-key="${keyCode}"]`);
  const pad = $(`.pad[data-key="${keyCode}"]`);
  playAudio(audio);
  addClass(pad);
  removeClass(pad);
  getTimeStamp(keyCode, timeStamp)
};

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

function powerOn() {
  $('.switch').toggleClass('switchOn');
  $('.pad').toggleClass('padOn');
  $('h1').toggleClass('titleOn');
  $('.pro').toggleClass('proOn');
}

// INITIALIZE
function init() {

  $('#power').on('click', function () {
    powerOn();
  });

  $('#openHelpBtn').on('click', function () {
    $('.help').addClass('openHelp');
  });

  $('#closeHelpBtn').on('click', function () {
    $('.help').removeClass('openHelp');
  });

  $('.pad').on('click', function (e) {
    clickFunction(e);
  });

  $('body').on('keydown', function (e) {
    keyFunction(e);
  });
}

// credit to sources
// ** some functionality designed around a javascript drum machine created by Wes Bos: https://www.youtube.com/watch?v=VuN8qwZoego
// thank you to Talia for the help with my $.each loop on transitionend
// thanks to this blog on why "play()" in jQuery requires the use of a (0) (https://exceptionshub.com/play-an-audio-file-using-jquery-when-a-button-is-clicked-2.html)

$(function () {
  init();
})