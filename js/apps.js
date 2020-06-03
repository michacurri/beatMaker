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


const pads = $('.pad');


$(function () {

  // on click (mobile or mouse experience)
  $('.pad').on('click', function (e) {
    const dataKey = e.currentTarget.attributes["data-key"]
    const audio = $(`audio[data-key="${dataKey.nodeValue}"]`);
    const pad = $(`.pad[data-key="${dataKey.nodeValue}"]`);
    if (!audio) return;
    audio.get(0).currentTime = 0;
    audio.get(0).play();
    pad.addClass('padActive');

  })

  // on keydown (desktop with keyboard experience)
  $('body').on('keydown', function (e) {
    const keyCode = e.which;
    const audio = $(`audio[data-key="${keyCode}"]`);
    const pad = $(`.pad[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.get(0).currentTime = 0;
    audio.get(0).play();
    pad.addClass('padActive');
  })

$.each(pads, (index, pad) => {
    $(pad).on('transitionend', function(){
      $(pad).removeClass('padActive');
    } )
  })
})