let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;
let monsterHealth;
let inventory = ["stick"];

const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2"); 
const button3=document.querySelector("#button3");
const text=document.querySelector("#text");
const xpText=document.querySelector("#xpText");
const healthText=document.querySelector("#healthText");
const goldText=document.querySelector("#goldText");
const monsterStat=document.querySelector("#monsterStats");
const monsterNameText=document.querySelector("#monsterName");
const monsterHealtsText = document.querySelector("#monsterHealth");

//initilize buttons
button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;
/*comment*/
function goStore() {
    button1.innerText="Buy 10 health for 10 gold";
    button2.innerText="Buy a sword for 30 gold";
    button3.innerText="Leave the store";
    button1.onclick=buyHealth;
    button2.onclick=buySword;
    button3.onclick=leaveStore; 
    text.innerText="Welcome to the store";
    console.log("Going Store");
}
function goCave() {
    console.log("Going Cave");
 
}
function fightDragon() {
    console.log("Fighting Dragon");
}   