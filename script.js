
const targetDate = new Date('2024-03-12T00:00:59');

setInterval(() => {
  const now = new Date();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.documentElement.style.setProperty("--seconds", seconds);
  document.documentElement.style.setProperty("--minutes", minutes);
  document.documentElement.style.setProperty("--hours", hours);
  document.documentElement.style.setProperty("--days", days);
}, 500);
