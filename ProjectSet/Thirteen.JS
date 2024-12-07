console.log("Working on reversal of string");
//Method one
const January = (inputString) =>{
    let February = inputString.split("");
    console.log(February);
    let March = February.reverse();
    console.log(March);
    let April = March.join("");
    console.log(April);
}
January("I Love you");
//Method two
const one = (two) => 
    two
    .split("")
    .reverse()
    .join("")
    console.log(one("Honey do you love me ?"));
//Method three
let mango = ("How dare you to say ?");
const leaf = (mango) => {
let result = mango.split("").reverse().join("");
console.log(result);
}
leaf(mango)
//Method four
let Sunday = ("May I help you ?");
const Friday = (Sunday) =>
    Sunday.split("").reverse().join("");  
console.log(Friday(Sunday));


