timer = 0;
width = 0;
bar = $(".progress-bar")[0];
value = $(".value")[0];

function fazTudo() {

  if (timer == 0) chargerBar();
  else return false;

  function chargerBar() {
    timer = setTimeout(chargerBar, 50);

    if (width < 100) {
      width++;
      bar.style.width = width + '%';
      value.innerHTML = width + "%";
    }
  }
}

function reset() {  
  window.clearTimeout(timer);
  timer = 0;

  bar.style.width = "0%";
  width = 0;
  value.innerHTML = "0%";
}



