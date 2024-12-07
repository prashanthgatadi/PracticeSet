let intervalCount = 0;
let timeoutcount = 0;
function intervalFunction(){
    intervalCount++;
    console.log(`Interval tick: ${intervalCount}`);
    if(intervalCount === 5 ){
        clearInterval(intervalId);
    }
}

function timeoutFunction(){
    timeoutcount++;
    console.log(`timeout tick : ${timeoutcount}`);
    if(timeoutcount === 3 ){
        clearTimeout(timeoutId);
    }
}

const intervalId = setInterval(intervalFunction, 1000);
const timeoutId = setTimeout(timeoutFunction, 500);
console.log("Start");