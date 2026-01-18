    let start=document.getElementById("startbtn");
    let lap=document.getElementById("lapbtn");


let ms=0,sec=0,min=0;

let timer=null;
let running=false;

function formattime(){
return(
    (min<10?"0"+min:min)+":"+
    (sec<10?"0"+sec:sec)+":"+
    (ms<10?"0"+ms:ms)

);
}

function starttimer(){

    let display=document.getElementById("display");

    timer=setInterval(()=>{
        ms++;

        if(ms===100){
            ms=0;
            sec++;
        }

         if(sec===60){
        sec=0;
        min++;
        }

display.innerText=formattime();

    },10);
}

start.addEventListener("click",()=>{

if(!running){
    starttimer();
    running=true;

    start.innerText="Stop";
    lap.innerText="Lap";
}
else{
    clearInterval(timer);
    running=false;
    start.innerText="Start";
    lap.innerText="Reset";
}

});

lap.addEventListener("click",()=>{

if(running){
let ul=document.getElementById("laps");
let li=document.createElement("li");

li.innerText=formattime();
ul.prepend(li);
}
else{
min=sec=ms=0;
    let display=document.getElementById("display");
    let laps=document.getElementById("laps");

    display.innerText="00:00:00";
    laps.innerHTML="";
    lap.innerText="Lap";
}

});