let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("I Love you ", ...weekdays);
console.log('Working on for loop with traditional methods');
for(let i=0;i<weekdays.length;i++){
    console.log(`${i+1}.${weekdays[i]}`);
}
let curry = 0;
console.log("Working with while loop")
while(curry<weekdays.length){
    console.log(`${curry+1}.${weekdays[curry]}`);
    curry++;
}
console.log("Working with do while loop");
let law = 0;
do{
    console.log(`${law+1}.${weekdays[law]}`);
    law++;
}while(law<weekdays.length)
console.log("Working with for in Loop");
let sthotram = ["manojavam","marutha","thulya","vegam","jethendriyam"];
for(let mark of sthotram){
    console.log(`${mark}`);
}
console.log("for in loop with numbering");
for(let math of weekdays){
    console.log(math);
}
console.log("for in loop with entries");
for(let[me,you] in weekdays.entries()){
    console.log(`${me+1}.${you}`);
}
console.log("for of loop with numbering");
for(let[me,you] of weekdays.entries()){
    console.log(`${me+1}.${you}`);
}
console.log("for of loop with only keys");
for(let uday of Object.keys(weekdays)){
    console.log(`${uday}`);
}
console.log("for of loop with only values");
for(let kisar of Object.values(weekdays)){
    console.log(`${kisar}`);
}
let allMap = new Map([
    ["School","students"],
    ["Hospital","patients"],
    ["college","collegue"],
    ["men","women"]
]);
console.log(allMap);
for(let kajal of allMap.values()){
    console.log(kajal);
}
let [a , b]=kajal;
console.log(a, b);
