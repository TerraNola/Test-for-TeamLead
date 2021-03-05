function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}


window.onload = function () {
  const Minutes = 60 * 30,
      display = document.querySelector('#time');
  startTimer(Minutes, display);
};

let currentNumber = $('.number').text();

$({numberValue: currentNumber}).animate({numberValue: 999}, {
    duration: 8000,
    easing: 'linear',
    step: function() {
        $('.number').text(Math.ceil(this.numberValue));
    }
});