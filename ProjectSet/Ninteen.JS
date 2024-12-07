function resolveTimeOut(value, delay){
    return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}
function rejectTimeOut(reason, delay){
    return new Promise((resolve, reject) =>
        setTimeout(() => reject(value), delay)
    );
}
async function load() {
    let promise1 = resolveTimeOut("Welcome to the Javascript world", 500);
    let promise2 = resolveTimeOut("wait for a while", 7000);
    //let promise2 = rejectTimeOut("Loading failed", 1000);
    const allPromise = Promise.all([promise1, promise2]);
    try{
        const lists = await allPromise;
        console.log("lists", lists);
    }    catch(error){
            console.log(error);
    }    
}
load();