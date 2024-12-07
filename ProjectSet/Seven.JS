const game = {
    team1: "India",
    team2: "Australia",
    players: [
        [
        "Dhoni",
        "Sharma",
        "Kohli",
        "Rahul",
        "jadeja",
        "Pandey",
        "Ashwin",
        "Chahal",
        "Khan",
        "Bhumra",
        "Shami",
        ],
    [
        "wade",
        "cummins",
        "Green",
        "maxwell",
        "finch",
        "Hazelwood",
        "Marth",
        "stoinis",
        "Richardson",
        "starc",
        "warner",
    ],
    ],
Century: ["Kohli","Sharma","warner","maxwell"],
odds: {
    team1 : 1.33,
    x : 3.25,
    team2: 4.5,    
},
};

/////This is assignment practice so understand well/////
// Create one player array for each team (variables player1 and player2)
console.log(game.players);
let [players1, players2] = game.players;
console.log(players1);
console.log(players2);
// the first player is any player array is the wicketkeeper and the other are field players.
// for india (team1) create one vairable('IND') with the wicketkeeper name.
let [captain,...restFieldPlayers] = players1;
console.log("He is a captain",captain);
console.log("All others are field players ",restFieldPlayers)
let allPlayers = [...players1,...players2];
console.log(allPlayers);
let players1Final = [...players1,"Sandeep","John","sunil"];
console.log(players1Final);
let {team1,x:draw, team2} = game.odds;
console.log(team1);
console.log(team2);
console.log(draw);
if(team1<team2){
    console.log("Team1 is going to win");
}else {
    console.log("Team2 is going to win");
}
team1<team2?console.log("Team 1 will win"):console.log("team2 will win");
team1<team2 && console.log("team1 will win");
console.log(team1<team2)||console.log("teamone will win here");
for(let [ga, valva] of game.Century.entries()){
    //console.log(ga);
    console.log(`Century ${ga+1}. ${game.Century[ga]}`);
}
let yu = game.odds;
let sum =0;
let count = 0;
for(let a of Object.values(yu)){
    sum = sum + a;
    count = count + 1;    
}
console.log(sum);
console.log(count);
console.log(Math.round(sum/count));
let realMe = 0;
let oppo = 0;
for(let rera in game.odds){
    console.log(rera);
    console.log(game.odds[rera]);
    realMe = realMe+game.odds[rera];
    oppo = oppo+1;
}
console.log(realMe);
console.log(oppo);
console.log((realMe/oppo));
