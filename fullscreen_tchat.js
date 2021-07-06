var goFullScreen = null;
 var exitFullScreen = null;
  if ('requestFullscreen' in document.documentElement) {
    goFullScreen = 'requestFullscreen';
    exitFullScreen = 'exitFullscreen';
  } else if ('mozRequestFullScreen' in document.documentElement) {
    goFullScreen = 'mozRequestFullScreen';
    exitFullScreen = 'mozCancelFullScreen';
  } else if ('webkitRequestFullscreen' in document.documentElement) {
    goFullScreen = 'webkitRequestFullscreen';
    exitFullScreen = 'webkitExitFullscreen';
  } else if ('msRequestFullscreen') {
    goFullScreen = 'msRequestFullscreen';
    exitFullScreen = 'msExitFullscreen';
  }

  var goFullscreenHandler = function (element) {
    return function () {
        //if(fullScreenMode == -1) {
            var maybePromise = element[goFullScreen]();
        /*    fullScreenMode *= -1;
        }
        else {
            var maybePromise = element[exitFullScreen]();
            fullScreenMode *= -1;
        }*/
      if (maybePromise && maybePromise.catch) {
        maybePromise.catch(function (err) {
          logChange('Cannot acquire fullscreen mode: ' + err);
        });
      }
    };
  };
      window.onload = function (){
          var video = document.getElementById('conteneur_remoteVideo');
          var conteneurVideo = document.getElementById('conteneurVideo');
          video.addEventListener('click', goFullscreenHandler(conteneurVideo));
      }
