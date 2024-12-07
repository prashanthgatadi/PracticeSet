console.log("Working on number times each letter occured in string");
const countChar = (inputString) =>{
    debugger;
    let output = [];
    let inputArray = inputString.split("");
    console.log(inputArray);
    for(let cur of inputArray){
        console.log(cur);
        if(output.hasOwnProperty(cur)){
            output[cur] = output[cur] + 1;
        }else {
            output[cur] = 1;
        }
    }
    console.log(output);
};
countChar("Hye BaBy");

// get user name method 1
const uName = (gyan) =>{
    let one = gyan.toUpperCase();
    let two = one.split(" ");
    let three = two.map((myItem) => myItem[0]);
    console.log(three);
    let four = three.join("");
    console.log(four);
}
uName("prashanth gatadi t1355");
// method 2
const rName = (myan) => {
    let initials = myan
    .toUpperCase()
    .split("")
    .map((myGel) => myGel[0])
    .join("");
    console.log(initials);
}
rName("Mounika Divya Sandhya");
// method 3
const qName = (Jhan) => {
    let zplus = Jhan.toUpperCase().split(" ").map((myJob)=>myJob[0]).join("");
    console.log(zplus);
}
qName("Priyanka Sindhuja Priya");