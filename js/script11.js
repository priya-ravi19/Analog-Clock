const hours=document.querySelector(".hrs");
const minutes=document.querySelector(".mins");
const seconds=document.querySelector(".secs");

setInterval(getTimer,1000);

function getTimer () {
    const time = new Date();
    const secs = time.getSeconds()/60;
    const mins = (secs+time.getMinutes())/60;
    const hrs  = (mins+time.getHours())/12;

    hours.style.setProperty('--rotation',hrs*360);
    minutes.style.setProperty('--rotation',mins*360);
    seconds.style.setProperty('--rotation',secs*360);
};
getTimer();