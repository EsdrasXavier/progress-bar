var width = 0;
var timer;

var progressBarLib = (function () {
  
  function move() {
    timer = setTimeout(move, 50);
    
    var bar = document.getElementsByClassName("progress-bar")[0];
    var value = document.getElementsByClassName("value")[0];
    
    if(width < 100) {
      width++; 
      bar.style.width = width + '%';
      value.innerHTML = width + "%";
    }else {
      clearInterval(timer);
    }
  }
  
  function reset() {
    var bar = document.getElementsByClassName("progress-bar")[0];
    var value = document.getElementsByClassName("value")[0];
    
    window.clearTimeout(timer);
    
    bar.style.width = "0%";
    width = 0;
    value.innerHTML = "0%";
  }
  
  return {
    move: move,
    reset: reset
  }
})();