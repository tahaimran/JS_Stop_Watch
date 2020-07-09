var min = 0;
var sec = 0;
var msec = 0;

var minh = document.getElementById("min")
var sech = document.getElementById("sec")
var msech = document.getElementById("msec")
var interval;

function timer() {
    msec++
    msech.innerHTML = msec;
    if (msec >= 100) {
        sec++
        sech.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++
        minh.innerHTML = min;
        sec = 0;

    }
}

function start() {
    interval = setInterval(timer, 10)

}


function paused() {
    clearInterval(interval)
    document.getElementById("start").disabled = false
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minh.innerHTML = min
    sech.innerHTML = sec
    msech.innerHTML = msec
    paused()
}