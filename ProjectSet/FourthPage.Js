let myObj = {
    Fname : "JayRam",
    Lname : "SitaRam",
    Age : 25,
    MotherName : ["Kaikai", "Koushalya", "Sumitra"],
    FatherName : "Dasharatha Maharaj"
}
console.log(myObj)
console.log("myObj see the type : " +typeof myObj)

// below method will convert from object to string
let rock = JSON.stringify(myObj)
console.log("Object to String : " +rock)
console.log("myObj see the type : " +typeof rock)
// below method will convert from string to object
let market = JSON.parse(rock);
console.log(market);
console.log("myObj see the type : " +typeof market);
// modify object 1. "." 2. []
myObj.DOY = 1934;
console.log(myObj)
myObj.Age = 2024-myObj.DOY
console.log(myObj)
myCouty = ['Country']
myObj[myCouty] = 'India'
console.log(myObj)
sk = ['Skill']
myObj[sk] = 'Archic'
console.log(myObj)

