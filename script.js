let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStat = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealtsText = document.querySelector("#monsterHealth");
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button function": [goStore, goCave, fightDragon],
        text: "You are in the town square.You see a sign tha says \"store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health for 10 gold", "Buy a sword for 30 gold", "Leave the store"],
        "button function": [buyHealth, buyWeapon, goTown],
        text: "Welcome to the store"
    },
    {}
]


//initilize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(locations) {
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button function"][0];
    button2.onclick = locations["button function"][1];
    button3.onclick = locations["button function"][2];
    text.innerText = locations.text;
    console.log("Updated");
}
/*comment*/
function goTown() {
update(locations[0]);
}

function goStore() {
    update(locations[1]);
}
function goCave() {
    console.log("Going Cave");

}
function fightDragon() {
    console.log("Fighting Dragon");
}
function buyHealth() {

}
function buyWeapon() {

}
