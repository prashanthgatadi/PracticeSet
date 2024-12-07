function clickme(){
    alert("Who are you?")
}
function onhover(){
    console.log("this many time mousehover is executed");
    let element = document.querySelector(".game");
    element.style.display = "none";
}
function outhover(){
    //console.log("this many time mousehover is executed");
    let element = document.querySelector(".game");
    element.style.display = "";
}
function myjava(event){
    console.log(event.target.value);
}