
let IntervalDetails = "";
IntervalDetails = setInterval(()=>{
    console.log("I am waiting for you");
}, 5000);
setTimeout(()=>{
    clearInterval(IntervalDetails);
    console.log("I love you");
}, 15000);



// step 3 :- Handle event
document.addEventListener("valueten",(event) => {
    console.log("Access Event Data ", event.detail.message)
})
function changeingHandler(event){
    console.log(event.target.value);
    let value = event.target.value;
    //whenever user enter value as 10 then fire the custom event
    if(value == 10){
        //step 1: - create custom event
        const myevent = new CustomEvent("valueten", {
            detail: {
                message : "User have entered value 10. Now take necessary steps",
            },
        });
        //step 2 :- dispatch the event
        document.dispatchEvent(myevent);
    }

}
document.addEventListener("ben10",(event) => {
    console.log(event.detail.message);
})
function changeing(event){
    let wall = event.target.value;
    if(wall >= 18){
        const yaxis = new CustomEvent("ben10", {
          detail: {
            message : "you are eligible to vote"
          },
        });
        document.dispatchEvent(yaxis);
    }
}