setInterval(time, 1000);
function time()
{
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  if(hours<10){
    hours=`0${hours}`;
  }
  if(minutes<10){
    minutes=`0${minutes}`;
    }
  document.getElementById('time').innerText = hours+":"+minutes;
}
// timer

let hours = 0;
let minutes = 0;
let seconds = 0;
let play;
let mainTimer = document.getElementById('t-main');
let secTimer = document.getElementById('t-sec');
let playPause = document.getElementById('play-pause');
let stops = document.getElementById('stops');
let reset = document.getElementById('reset');


playPause.addEventListener('click', ()=>{
    playPause.classList.toggle("play");
    playPause.classList.toggle("pause");
    if(playPause.classList.contains("play")) {
        clearInterval(play);
    }      
    else {
        play = setInterval(run, 10);
    }      
})

function run()
{
    seconds=Number(seconds)+1;
    if(seconds<10){
        seconds=`0${seconds}`;
    }
    if(seconds==60){
        minutes=Number(minutes)+1;
        if(minutes<10){
            minutes=`0${minutes}`;
        }
        seconds='00';
    }
    if(minutes==60){
        hours=Number(hours)+1;
        if(hours<10){
            hours=`0${hours}`;
        }
        minutes='00';
    }
    document.getElementById('t-main').innerText = hours+":"+minutes+":"+seconds;
}

stops.addEventListener('click', ()=>{
    document.getElementById('t-sec').innerText = hours+":"+minutes+":"+seconds;
})

reset.addEventListener('click', ()=>{
    hours = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(play);
    playPause.classList.add("play");
    playPause.classList.remove("pause");
    document.getElementById('t-main').innerText = `0${hours}`+":"+`0${minutes}`+":"+`0${seconds}`;
    document.getElementById('t-sec').innerText = `0${hours}`+":"+`0${minutes}`+":"+`0${seconds}`;
})