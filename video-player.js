
var player = videojs('movie', {
    aspectRatio: '16:9',
    fluid: true,
    controls: true,

    sources: [{
        src: 'REWIND[2021] tittle.mp4',
        type: 'video/mp4',
    }],
    playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5],
    fullscreen: {
        enterOnRotate: true,         // Enter fullscreen mode on rotating the device in landscape
        alwaysInLandscapeMode: true, // Always enter fullscreen in landscape mode even when device is in portrait mode (works on chromium, firefox, and ie >= 11)
        iOS: true //Whether to use fake fullscreen on iOS (needed for displaying player controls instead of system controls)
    }




})


// videojs('movie').ready(function () {

//     this.overlay({

//         overlays: [{
//             attachToControlBar: true,


//             content: ' <strong> This event-triggered overlay message appears when the video is playing </strong>  ',



//             class: 'customOverlay',
//             align: 'top',
//             // This overlay appears at 3 seconds and disappears at 15 seconds.
//             start: 3,
//             end: 15
//         },

//             // This overlay appears at 7 seconds and disappears at 22 seconds.
//             // start: 7,
//             // end: 22,
//             // align: 'center'
//         ]



//     });



// })






videojs('movie').ready(function () {
    this.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        enableModifiersForNumbers: false

    });
});


videojs('movie').ready(function () {
    this.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        enableModifiersForNumbers: false

    });
});





// videojs('movie').ready(function () {
//     this.socialShareOverlay();

// });



