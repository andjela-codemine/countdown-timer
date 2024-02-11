const flipCards = document.querySelectorAll('.flip-card');
const styles = getComputedStyle(flipCards[0]);
let days = parseInt(styles.getPropertyValue('--days'));
let hours = parseInt(styles.getPropertyValue('--hours'));
let minutes = parseInt(styles.getPropertyValue('--minutes'));
let seconds = parseInt(styles.getPropertyValue('--seconds'));

const updateDisplay = () => {
  flipCards[0].style.setProperty('--days', days);
  flipCards[1].style.setProperty('--hours', hours);
  flipCards[2].style.setProperty('--minutes', minutes);
  flipCards[3].style.setProperty('--seconds', seconds);
}

const countdown = () => {
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0){
    return;
  }
  
  if (seconds === 0) {
    seconds = 59;

    if (minutes === 0) {
      minutes = 59;

      if (hours === 0) {
        hours = 23;

        if (days > 0) {
          setTimeout(() => {
            startAnimation(0);
          }, 500);
          days--;
        }
      } else {
        setTimeout(() => {
          startAnimation(1);
        }, 500)
        hours--;
      }
    } else {
      setTimeout(() => {
        startAnimation(2);
      }, 500);
      minutes--;
    }
  } else {
    setTimeout(() => {
      startAnimation(3);
    }, 500);
    seconds--;
  }
  
  updateDisplay();
}

const startAnimation = (n) => {
  const flip = flipCards[n].querySelectorAll('[data-flip]');
  const top = flip[0];
  const bottom = flip[1];

  top.dataset.flip = 'true';
  bottom.dataset.flip = 'true';

  top.addEventListener("animationend", () => {
    bottom.addEventListener("animationend", () => {
      top.dataset.flip = 'false';
      bottom.dataset.flip = 'false';
    }, { once: true });//remove event listener after once triggered
  }, { once: true });
}


const startCountdown = () => {
  countdown();
  setInterval(countdown, 1000);
}

startCountdown();