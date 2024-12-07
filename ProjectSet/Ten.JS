console.log("Today I am working with string");
let fruits = "Mango, Ginger, Pineapple, Mango, Supporta, Banana, Mango";
let malik = "How are you you";
let myFruits = malik.split(" ");
let finalFruits = [];
myFruits.map((jet) =>{
    if(!finalFruits.includes(jet)){
        finalFruits = [...finalFruits, jet];
    }
});
console.log(finalFruits);
// slice
console.log(fruits.length);
console.log(fruits.slice());
console.log(fruits.slice(fruits.indexOf("Pineapple"), fruits.indexOf("Pineapple")+9));
console.log(fruits.slice(7));
console.log(fruits.slice(-20,-9));
//substring
console.log(fruits.substring(20));
console.log(...fruits);
console.log(fruits.substr(-9, 9));
console.log(fruits.replace("Pineapple", "Oranges"));
console.log(fruits.toLocaleLowerCase());
console.log(fruits.toLocaleUpperCase());
console.log(fruits.toLowerCase());
console.log(fruits.toUpperCase());
let st1 = "Hello";
let st2 = "World";
console.log(fruits.concat(" ","Milk"));
console.log(fruits.trim());
console.log(fruits.trimStart());
console.log(fruits.trimEnd());
let rera = "5";
console.log(rera.padEnd(5,"*"));
console.log(rera.padStart(5,"0"));
let abc = fruits.split("*");
console.log(abc);
console.log(typeof abc);
let xzy = fruits.toString();
console.log(xzy);
let weekDays = "Monday Tuesday Wednesday Thursday Friday Saturday Sunday";
let seeyou = weekDays.split(" ");
console.log(seeyou);
let joinStr = seeyou.join("*");
console.log(joinStr);
console.log(fruits.indexOf("Ginger"));
console.log(fruits.includes("Banana"));
console.log(fruits.startsWith("Mango"));
console.log(fruits.endsWith("kiwi"));
console.log(fruits.includes("kiwi"));
let str1 = fruits.split(" ");
let str2 = [];
str1.map ((current) => {
    if(!str2.includes(current)){
        str2 = [...str2, current];
    }
});
console.log(str2.join(" "));
let months = "January, February, May, March, April, May";
let strMonth = months.split(" ");
console.log(strMonth);
let finalStr = [];
strMonth.map((currentItem) => {
    if(!strMonth.includes(currentItem)){
        finalStr = [...finalStr, currentItem];
    }
});
console.log(finalStr.join(" "));
