let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
/* String
        let inventory = "stick"; 
    Array de string
        let inventory = ["stick", "dagger", "sword"];*/
let inventory = ["stick"];
/*  Para dar match em um elemento css/html com uma variável js
    let button1 = document.querySelector("#button1")*/

//Valor não variável (Const)
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth"); //Changed name because of ive already declared a variable named monsterHealth up above
const locations = [{ //An object IN an array
    name: "town square" //key/pairs. name of the property and it values
    "button text": ["Ir para loja", "Ir para caverna", "Enfrentar dragão"] // Property of an empty array. Doble quoted because it has two words for the property name.


}]; 
/*  Initialize buttons
    One way to access properties in javascript is by dot notation
    When this button is clicked, this function will be activated*/
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;

function update(location) {

}

function goTown() {
  button1.innerText = "Ir para loja" // It will changes the innerText of the button
  button2.innerText = "Ir para caverna";
  button3.innerText = "Enfrentar dragão";

  // Updating buttons functions
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;

  //uptadint the main text
  text.innerText = "Você está no centro da cidade. Você vê uma placa que diz \"Loja\"."
}
// Declarando funções
function goStore() {
  button1.innerText = "Comprar 10 de vida (10 ouros)" // It will changes the innerText of the button
  button2.innerText = "Comprar arma (30 ouro)";
  button3.innerText = "Ir para o Centro da Cidade";

  // Updating buttons functions
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;

  //uptadint the main text
  text.innerText = "Você entra na loja."
}

  function goCave() {
    console.log("Indo para a caverna.");
  }
  function fightDragon() {
    console.log("Lutando com dragão.");
  }
  function buyHealth() {

  }
  function buyWeapon() {
  
  }