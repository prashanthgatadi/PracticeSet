let fruitList = ["Apple", "Banana", "cherry", "darkchocalate", "grapes"];
let sweetList = [...fruitList];
console.log(...sweetList, "Orange");
sweetList.push("Laddu")
console.log(sweetList);
console.log(fruitList);

let num1 = [1,2,3,4,5]
let num2 = [6,7,8,9,10]
console.log(...num1, ...num2)
let abc = 'how are you';
console.log(...abc);
num1 = [...num1,11,12,13,14,15]
console.log(num1)
let stuDetails = {
    FName : "Mahesh",
    LName : "Jagur",
    DOY : 2000,
    Skills : ["LWC", "APEX", "AURA", "Triggers"]
}
let mDet = {
    Age : 23,
    Education : "Masters"
}
let stuPersonal = {...stuDetails, ...mDet};
console.log(stuPersonal);
