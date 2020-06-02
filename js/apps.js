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

$(function () {
  // console.log("load me up");
  $('.pad').on('click', function (e) {

    console.log( "Handler for .keydown() called." );
    // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const audio = (`audio[data-key="${e.keyCode}"]`);
    // console.log(audio)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  });

})