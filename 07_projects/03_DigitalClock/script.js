const clockElement = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString);
    clockElement.textContent = date.toLocaleTimeString();
}, 1000);