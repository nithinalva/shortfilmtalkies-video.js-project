// So if I'm understanding you correctly:

// var player = videojs('my-video');
// var options = {
// id: 'my-video',
// adTagUrl: 'http://pubads.g.doubleclick.net/'
// };

// if (firstTimeAds == "yes") {
// // The first time
// player.ima(options);
// firstTimeAds = "no";
// } else {
// // alert ("not first time");
// player.ima.changeAdTag(player.currentClip.ads.adCall);
// player.ima.requestAds();
// }


// videojs('video', {
//  controls: true,
//  techOrder:  ["youtube"],
//  sources: [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=iD_MyDbP_ZE"}],
//  plugins: {
//   videoJsResolutionSwitcher: {
//    default: 'low',
//    dynamicLabel: true
//   }
//  }
// }, function(){
//  var player = this;
//  player.on('resolutionchange', function(){
//   console.info('Source changed')
//  })
// });
