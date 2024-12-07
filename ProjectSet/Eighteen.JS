// create promise
function generatePromise(message){
    return new Promise((resolve, reject) =>{
        if(!message){
            reject("Message is empty");
        }else{
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 15000);
    }
    });
}
async function generateAsyncPromise() {
    try{
        await generatePromise("First time async completed");
        await generatePromise("Second Time Analysis");
    }catch(error){
        console.log(error);
    }
}
generateAsyncPromise();

// call promise
// generatePromise("I Love You").then(() =>{
//     console.log("Promise resolved successfully");
//     generatePromise("will you marry me? ");
// })
// .then(()=>{
//     console.log("Second Time promise got resolved");
//     generatePromise("Can we get inter?");
// })
// .then(()=>{
//     console.log("Third time got executed");
//     generatePromise("Will you be mom to my child?")
// })
// .then(() => {
//     console.log("Again fourth time executed try to understand");
//     generatePromise("");
// })
// .then(()=>{
//     console.log("this is fifth time");
// }).catch((error) => {
//     console.log("Show errors : ", error);
// })
