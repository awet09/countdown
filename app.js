const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2020, 6, 28, 13, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];



giveaway.textContent = `give away ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes} AM`;

//future time in millisecond
const futureTime = futureDate.getTime();
console.log(futureDate)

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t)
  //1s = 1000ms
  //1m= 60s
  //1hr=60m
  //1day=24h

  //find value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  })
  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway has expired`
  }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();