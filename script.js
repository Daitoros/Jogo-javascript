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
const weapons = [
  { name: 'graveto', power: 5 },
  { name: 'adaga', power: 30 },
  { name: 'martelo dentado', power: 50 },
  { name: 'espada', power: 100 }
];
const locations = [{ //An object IN an array
    name: "centro da cidade" //key/pairs. name of the property and it values
    "button text": ["Ir para loja", "Ir para caverna", "Enfrentar dragão"] // Property of an empty array. Doble quoted because it has two words for the property name.
    "button functions": [goStore, goCave, fightDragon],
    text: "Você está no centro da cidade. Você vê uma placa que diz \"Loja\"."

},
{
  name: "loja",
  "button text": ["Comprar 10 de vida (10 ouros)", "Comprar arma (30 ouros)", "Ir para o centro da cidade"],
  "button functions": [buyHealth, buyWeapon, goTown],
  text: "Você entra na loja."
},
{
  name: "cave",
    "button text": ["Enfrentar Slime", "Enfrentar dentes de sabre", "Ir para o centro da cidade"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "Você entra na caverna. Você vê alguns monstros."
}]; 
/*  Initialize buttons
    One way to access properties in javascript is by dot notation
    When this button is clicked, this function will be activated*/
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  /*button1.innerText = "Ir para loja" // It will changes the innerText of the button
  button1.innerText = location["button text"][0]; // it will get the first index location of the "button text" array inside location
  button2.innerText = "Ir para caverna";
  button3.innerText = "Enfrentar dragão";*/

  /* Updating buttons functions
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;*/
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];

  //uptadint the main text
  // text.innerText = "Você está no centro da cidade. Você vê uma placa que diz \"Loja\"."
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]); //passing only the object of index 0 (called bracket notation)
}
}
// Declarando funções
function goStore() {
  update(locations[1]);
}

  function goCave() {
    //console.log("Indo para a caverna.");
    update(locations[2]);
  }
  function fightDragon() {
    console.log("Lutando com dragão.");
  }
  function buyHealth() {
    if (gold>=10){ //First if declaration
    gold -= 10;
    health += 10;
    goldText.innerText = gold;  //Updating the values
    healthText.innerText = health;
  } else{
    text.innerText = "Você não tem ouro o suficiente para comprar vida."
  }
  }
  function buyWeapon() {
    if (gold >= 30) {
      gold -= 30; //compound assignment
      currentWeapon ++; //increment operator
      let newWeapon = weapons[currentWeapon].name; // Making the player knows what weapons he has
      goldText.innerText = gold;  //changing innerText
      text.innerText = "Você agora têm um(a) " + newWeapon + ".";
      inventory.push(newWeapon); // moves variable newWeapon to the end of the array.
      text.innerText += " In your inventory you have: " + inventory; //show at the end of the innerText
    }
  }
  function fightSlime() {

  }
  function fightBeast() {
    
  }