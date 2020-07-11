// var count = 0;
// var interval;
// function timer(){
//     count ++
//     console.log(count)}

// var interval = setInterval(timer,1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)

var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("miliSec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }else if(sec >=60){
        min++
        minHeading.innerHTML = min;
        sec=0;
    }
}

function start(){
    interval = setInterval(timer,10)
    var startButton = document.getElementById('startButton')
    startButton.disabled = true;

}

function stop(){
    clearInterval(interval)
    startButton.disabled = false;
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
    startButton.disabled = false;
}

