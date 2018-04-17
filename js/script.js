var width = 0;
var timer = 0;

var progressBarLib = (function () {
  
  function move() {
    if(timer == 0) chargerBar();
    else return false;
  }
  
  function chargerBar() {
    timer = setTimeout(chargerBar, 50);
    
    var bar = document.getElementsByClassName("progress-bar")[0];
    var value = document.getElementsByClassName("value")[0];
    
    if(width < 100) {
      width++; 
      bar.style.width = width + '%';
      value.innerHTML = width + "%";
    }
  }
  
  function reset() {
    var bar = document.getElementsByClassName("progress-bar")[0];
    var value = document.getElementsByClassName("value")[0];
    
    window.clearTimeout(timer);
    timer = 0;
        
    bar.style.width = "0%";
    width = 0;
    value.innerHTML = "0%";
  }
  
  return {
    move: move,
    reset: reset,
    chargerBar: chargerBar
  }
})();