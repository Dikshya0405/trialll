const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const amElement = document.getElementById("am");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";


    if (h > 12) {
        h = h - 12
        am = "PM";

    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    amElement.innerText = am;
    setTimeout(() => {
        updateClock()
    }, 1000)


}

updateClock()
