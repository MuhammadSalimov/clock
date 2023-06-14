const soat = document.querySelector(".hours");
const daqiqa = document.querySelector(".minutes");
const kun = document.querySelector(".day");
const oy = document.querySelector(".month");
const yil = document.querySelector(".year");
const soniya = document.querySelector(".seconds");

const arrayMonth = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

function remainingTime() {
  let nowTime = new Date();
  let seconds = nowTime.getSeconds();
  let hours = nowTime.getHours();
  let minutes = nowTime.getMinutes();
  let date = nowTime.getDate();
  let month = nowTime.getMonth();
  let year = nowTime.getFullYear();

  soat.innerHTML = hours
  daqiqa.innerHTML =minutes
  soniya.innerHTML = seconds>9?seconds:`0${seconds}`
  kun.innerHTML = date
  oy.innerHTML =arrayMonth[month];
  yil.innerHTML = year
}

const setClock = setInterval(remainingTime,1000)