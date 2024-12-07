str1 = 'my name is';
str2 = 'Prashanth';
str3 = 'I stay in';
str4 = 'Hyderabad';
str5 = 456-99;
str6 = 'is my age';
let finalStrList = `so let me give introduction ${str1} gatadi ${str2} and coming to my residence ${str3} ${str4}
now if you want to know my staff then its ${str5} ${str6} I will meet you in ${10-4} months`;
console.log(finalStrList);



let AnimalName = {
    Name : "Elephant",
    Color : "Black",
    Size : "Huge",
    Weight : "50000 kg"    
}
console.log(AnimalName);
let {Name : FirstName, Weight} = AnimalName;
console.log(FirstName);
console.log(Weight);
console.log(AnimalName.Size);
console.log("Destructuring Assignment");
let fruitKey = ["Telugu","Hindi","English","Mathematics","Science","Social"];
console.log(fruitKey);
let [f1, f2,,,f4] = fruitKey;
console.log(f1);
console.log(f2);
console.log(f4);
let [One, Two, Three,,,Six] = ["Telugu","Hindi","English","Mathematics","Science","Social"];
console.log(Six);
fruitKey.push("biology");
console.log(fruitKey);
let [p1, p2, p3, ...otherList] = fruitKey;
console.log(p1);
console.log(p2);
console.log(p3);
console.log(otherList);
