let day = document.getElementById("day"),
    hours = document.getElementById("hours"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds");

let currentYear = new Date().getFullYear();
let newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`);

function countDownTimer() {
    let todayDate = Date.now();
    let gap = newYear - todayDate;

    let d = Math.floor(gap / 1000 / 60 / 60 / 24);
    let h = Math.floor((gap / 1000 / 60 / 60) % 24);
    let m = Math.floor((gap / 1000 / 60) % 60);
    let s = Math.floor((gap / 1000) % 60);

    day.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;

} setInterval(countDownTimer, 1000);