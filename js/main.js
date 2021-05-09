const countDown = () => {
  const futureTime = new Date("May 25, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = futureTime - now;

  // basic timing math
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculating difference
  const dayDifference = Math.floor(difference / day);
  const hourDifference = Math.floor((difference % day) / hour);
  const minuteDifference = Math.floor((difference % hour) / minute);
  const secondDifference = Math.floor((difference % minute) / second);
  
  // updating dom
  document.querySelector(".day-container__day").innerText = dayDifference;
  document.querySelector(".hour-container__hour").innerText = hourDifference;
  document.querySelector(".minute-container__minute").innerText = minuteDifference;
  document.querySelector(".second-container__second").innerText = secondDifference;
};

setInterval(countDown, 1000);
