console.log('Practicing functions');
// fuction declaration
function addition(a,b){    
    let sum = a+b;
    return sum;
}
// function expression 
let addad = function xyz(a,b){ 
    if(b){  
    let sum = a+b;
    return sum;
    }else{
        return a;
    }
}
let c = addition(40,30);
console.log(c);
let z = addad(50);
console.log(z);

let direct = function mgm (Username){
    let message = `${Username}, Welcome to the Javascript world`;
    return message;
}
let msg = direct("Prashanth");
console.log(msg);

let indirect = (modem) => {
    let msg = ` Keep it yourself`;
    return msg;
}
function mash(name, markup){
    console.log(`${name}, If you give permission then only i will take`);
    markup();
    
}
function jigar(){
    console.log("I love you");
}
let ruin = mash("padmaja", jigar);

