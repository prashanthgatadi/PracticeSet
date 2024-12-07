function loadme(){
    fetch("https://reqres.in/api/users",{
        method: "Get",
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
loadme();

async function loadImg(){
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let data = await response.json();
    console.log(data);
    let imageUrl = data[0].url;
    let element = document.querySelector(".catImg");
    element.src = imageUrl;

}
loadImg();

// async function loadexchangerates() {
//     try {
//         const exchangeResponse = await fetch("https://rest.coinapi.io/v1/exchangerate/BTC/INR", {
//             method: "GET",
//             headers: {
//                 "X-CoinAPI-Key": "35A03713-3B0D-4D7E-AEDD-047BB4163FC8",
//             },
//         });

//         if (!exchangeResponse.ok) {
//             throw new Error(`Error: ${exchangeResponse.status} ${exchangeResponse.statusText}`);
//         }

//         const data = await exchangeResponse.json();
//         console.log("data", data);
//     } catch (error) {
//         console.error("Failed to fetch exchange rates:", error);
//     }
// }

// loadexchangerates();



async function loadexchangerates() {
    let exchangeResponse = await fetch("https://rest.coinapi.io/v1/exchangerate/USD/INR",{
        method: "GET",
        headers : {
            "X-CoinAPI-Key": "35A03713-3B0D-4D7E-AEDD-047BB4163FC8"
        },
    });
    let data = await exchangeResponse.json();
    console.log("Prashanth", data);
}
loadexchangerates();

// async function loadImg() {
//     let response = await fetch("https://api.thecatapi.com/v1/images/search");
//     let data = await response.json(); // Ensure data is parsed as JSON
//     console.log(data);
//     // let imageUrl = data[0].url; // Correct URL reference
//     // let element = document.querySelector(".catImg"); // Correct the selector
//     // element.src = imageUrl; // Set the image source
// }

// loadImg();
