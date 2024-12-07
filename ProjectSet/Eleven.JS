console.log("Try to understand Array");
let months = ["January","February","March","April","May","June","July"];
console.log(months);
console.log(months.length);
console.log(months.toString());
let strMon = months.push("August","September");
console.log(months);
stkach = months.unshift("December");
console.log(months);
let akMonth = months.pop();
console.log(months);
let strMonth = months.shift();
console.log(strMonth);
console.log(months);
let bjMont = months.push("October");
console.log(months);
months[months.indexOf("June")] = "November";
console.log(months);
let oneMore = ["Milk"];
let ajm = months.concat(oneMore);
console.log(ajm);
console.log(months.includes("Oranges"));
let abc = months.indexOf("jammu");
console.log(typeof abc);
let zb = abc + 3;
console.log(zb);
let time = ["Morning","Evening","Afternoon","Night","Sleep","Activity"];
time.splice(3,0,"Love");
console.log(time);
let stem = time.splice(0,6);
console.log(stem);
console.log(time);
let lily = months.slice(0,1);
console.log(lily);
let hill = ["Cocunut","Bengal Gram","Papaya","Green Gram"];
hill.forEach((value1,num1,list)=>{
    console.log(value1);
})
hill.map((item)=>{
    console.log(item);
})
let gyan = hill.filter((myCurrent) => myCurrent.length>10)
    console.log(gyan);
let gyajn = [3000, 5000, -67800, 4567000, -85000];
let gh = gyajn.find(epson => epson === 5000);
console.log(gh);
let gazni = hill.find(sons => sons = "Papaya");
console.log(gazni);

