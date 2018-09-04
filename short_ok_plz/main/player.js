document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

var mediaPlayer, playPauseBtn, seekSlider, curTime, durTime, muteBtn;
var volumeSlider, stopBtn, seekValue, toggleCrisps, fullScreenBtn;
var colorFlag = false;
var volumeValue;
var crispFlag = false;

function initialiseMediaPlayer() {
   /*mediaPlayer.controls = false;*/
   /*either don't type "controls" in video tag or uncomment the above line, so that default controls are disabled*/

   /*set all object references*/
   mediaPlayer = document.getElementById('mediaVideo');
   playPauseBtn = document.getElementById('playPauseButton');
   seekSlider = document.getElementById('seekSlider');
   curTime = document.getElementById('curTime');
   durTime = document.getElementById('durTime');
   muteBtn = document.getElementById('muteButton');
   volumeSlider = document.getElementById('volumeSlider');
   stopBtn = document.getElementById('stopButton');
   toggleCrisps = document.getElementById('toggleCrisps');
   fullScreenBtn = document.getElementById('fullScreenBtn');

   /*add event listeners*/
   mediaPlayer.addEventListener("click", togglePlayPause, false);
   playPauseBtn.addEventListener("click", togglePlayPause, false);
   seekSlider.addEventListener("change", videoSeek, false);
   mediaPlayer.addEventListener("timeupdate", videoSeekUpdate, false);
   muteBtn.addEventListener("click", toggleMute, false);
   volumeSlider.addEventListener("change", setVolume, false);
   stopBtn.addEventListener("click", stopPlayer, false);
   toggleCrisps.addEventListener("click", toggleCrispsFunction, false);
   fullScreenBtn.addEventListener("click", toggleFullScreen, false);
   mediaPlayer.addEventListener("ended", videoTracker, false);

   /*additional value properties*/
   mediaPlayer.volume = 0.7;
}

function toggleCrispsFunction(){
   if( crispFlag ){
      /*end crisp*/
      toggleCrisps.innerHTML = "+";
      crispFlag = false;
   }else{
      /*start crisp*/
      toggleCrisps.innerHTML = "&#10004;";
      crispFlag = true;
   }
   startColoring();
}

function startColoring(){
   if( colorFlag ){
      /*stop coloring*/
      colorFlag = false;
      seekSlider.style.background = "yellow";
      seekValue = document.getElementById("seekSlider").getAttribute("value");
      console.log('stop coloring at ' + seekValue);
   }else{
      /*start coloring*/
      colorFlag = true;
      seekSlider.style.background = "red";
      seekValue = document.getElementById("seekSlider").getAttribute("value");
      console.log('start coloring at ' + seekValue);
   }
}

function togglePlayPause() {
   if (mediaPlayer.paused) {
      playPauseBtn.innerHTML = "pause";
      mediaPlayer.play();
   }else {
      playPauseBtn.innerHTML = "play";
      mediaPlayer.pause();
   }
}

function stopPlayer() {
   playPauseBtn.innerHTML = "play";
   mediaPlayer.pause();
   mediaPlayer.currentTime = 0;
}

function setVolume(){
   mediaPlayer.volume = volumeSlider.value / 100;
}

function toggleMute() {
   if (mediaPlayer.muted) {
      mediaPlayer.muted = false;
      mediaPlayer.volume = volumeValue/100;
      volumeSlider.value = volumeValue;
      muteBtn.innerHTML = "mute";
   }else {
      volumeValue = volumeSlider.value;
      mediaPlayer.muted = true;
      mediaPlayer.volume = 0;
      volumeSlider.value = 0;
      muteBtn.innerHTML = "unmute";
   }
}

function colorGenerator() {
  var rangeSize = 100; // adapt as needed
  var color = [
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * rangeSize),
          Math.floor(Math.random() * rangeSize) + 256 - rangeSize
      ]
      .sort(function(a, b) {
          return Math.random() < 0.5;
      })
      .map(function(p) {
          return ('0' + p.toString(16)).substr(-2);
      })
      .join('');

  return color;
}

function videoSeek(){
   var duration = mediaPlayer.duration * ( seekSlider.value / 100 );
   mediaPlayer.currentTime = duration;
}

function videoSeekUpdate () {
   var newTime = (100 / mediaPlayer.duration) * mediaPlayer.currentTime;
   seekSlider.value = newTime;
   var curmins = Math.floor(mediaPlayer.currentTime / 60);
   var cursecs = Math.floor(mediaPlayer.currentTime - curmins * 60);
   var durmins = Math.floor(mediaPlayer.duration / 60);
   var dursecs = Math.floor(mediaPlayer.duration - durmins * 60);
   if( curmins < 10 ){ curmins = "0" + curmins}
   if( cursecs < 10 ){ cursecs = "0" + cursecs}
   if( durmins < 10 ){ durmins = "0" + durmins}
   if( dursecs < 10 ){ dursecs = "0" + dursecs}
   curTime.innerHTML = curmins + ":" + cursecs;
   durTime.innerHTML = durmins + ":" + dursecs;

   var x = colorGenerator();
   seekSlider.style.background = "#" + x;
}

function toggleFullScreen(){
}

function videoTracker(){
   /*stopPlayer();*/
   playPauseBtn.innerHTML = "play";
   if( crispFlag ){
      /*close crisp at video end, if any*/
      toggleCrispsFunction();
   }
}