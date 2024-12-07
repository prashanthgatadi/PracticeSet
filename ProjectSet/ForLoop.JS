let timings = {
    sun : {startTime : "01 AM", endTime : "09 PM"},
    Mon : {startTime : "02 AM", endTime : "08 PM"},
    Tue : {startTime : "03 AM", endTime : "07 PM"}
}
for(let objTime in timings){
    console.log(objTime)
    console.log(timings[objTime])
    let {startTime, endTime} = timings[objTime];
    console.log(startTime, endTime);
    console.log(`On ${objTime} Our shop opens at ${startTime} and closes at ${endTime}`);
}
let schoolDetails = {
    schoolName: "Jayramiah High School",
    noOfStudent : 55,
    noOfTeacher : 650,
    principalName : "Shantaram"
}
console.log(schoolDetails);
for(let crosser in schoolDetails){
    console.log(crosser, schoolDetails[crosser]);
}
for(let [keys, value] of Object.entries(schoolDetails)){
    console.log(`${keys}:${value}`);
}
for(let kcr of Object.values(schoolDetails)){
    console.log(kcr);
}
for(let sch of Object.keys(schoolDetails)){
    console.log('keys : ' +sch);
    console.log(`${schoolDetails[sch]}`);
}
let city = ["Bellary","kopargoan","Hampi","Bengalurur","Mysuru","yehlanka"];
for(let gam in city){
    //console.log(gam);
    console.log(gam, city[gam]);
}
for(let cityItems of city){
    console.log(`${cityItems}`);
}
let mandal = ["Armoor","Argual","Jakaranpally"];
for(let[pk, oka] of mandal.entries()){
    console.log(`${pk + 1}. ${oka}`)
}
console.log('Working with For loop');
let subject = ["Telugu","Hindi","English","Mathematics","Science","Social"];
for(let currentIndex=0;currentIndex<subject.length;currentIndex++){
    console.log(`${currentIndex+1}.${subject[currentIndex]}`);
}
let khestra = ["Kashi","Mathura","Adyodya","Dwaraka","Kanchi","goumathi","pushkar","Prayag","gaya","namishvarayan"];
let i=0;
while(i<khestra.length){
    console.log(`${i+1}.${khestra[i]}`)
    i++;
}
let nameing = ["Mahesh","Suresh","Ganesh","Jayesh","Ramesh","Gyanesh","Umesh"];
let num = 0;
do{
    console.log(`${num+1}.${nameing[num]}`);
    num++;
}while(num<nameing.length)
