// botoes
const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");

// display
let displayTimer = document.querySelector("#timer");

// variaveis de tempo
let seconds = 0;
let minutes = 0;
let hours = 0;

// variaveis de 0
let zeroSeconds = 0;
let zeroMinutes = 0;
let zeroHours = 0;

// variaveis de intervalo
let timeInterval = null;
let timerStatus = "parado"

function stopWatch(){
    seconds++

    if (seconds / 60 == 1){
        seconds = 0;
        minutes++;
        
        if (minutes / 60 == 1){
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10){
        zeroSeconds = "0" + seconds.toString();
    }
    else{
        zeroSeconds = seconds;
    }

    if (minutes < 10){
        zeroMinutes = "0" + minutes.toString();
    }
    else{
        zeroMinutes = minutes;
    }
    
    if(hours < 10){
        zeroHours = "0" + hours.toString();
    }
    else{
        zeroHours = hours;
    }
    displayTimer.innerText = `${zeroHours}:${zeroMinutes}:${zeroSeconds}`;
}

startBtn.addEventListener('click', function(){
    if(timerStatus == "parado"){
        timeInterval = window.setInterval(stopWatch, 1000);
        startBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause-btn"></i>`
        timerStatus = "começou"
    }
    else{
        window.clearInterval(timeInterval);
        startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`  
        timerStatus = "parado" ;
    }
});

resetBtn.addEventListener('click', function(){
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    displayTimer.innerHTML = "00:00:00"
});