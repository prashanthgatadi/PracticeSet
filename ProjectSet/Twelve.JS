console.log("Doing Assignment");
//Method One
let two = "hello world greetings of the day!";
let January = (two) =>{
    three = two.split(" ");
    let february = three.map(
        (march) => march[0].toUpperCase() + march.slice(1)
    )
    console.log(three);
    console.log(february);
    let april = february.join(" ");
    console.log(april);
}
January(two);
//Method Two
let alpha = "aditya birla pvt ltd";
const beta = (alpha) => {
    let output = alpha
    .split(" ")
    .map((march) => march[0].toUpperCase() + march.slice(1))
    .join(" ");
    console.log(output);
}
beta(alpha);
//Method Three
//let Sunday = "axis bank pvt ltd";
const Monday = (Sunday) =>
    Sunday
    .split(" ")
    .map((march) => march[0].toUpperCase() + march.slice(1))
    .join(" ");
    console.log(Monday("axis bank pvt ltd"));