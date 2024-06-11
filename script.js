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
const monsters = [
  {name: "slime", level: 2, health: 15},
  {name: "besta com presas", level: 8, health: 60},
  {name: "dragão", level: 20, health: 300}
]
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
  name: "caverna",
    "button text": ["Enfrentar Slime", "Enfrentar Besta com Presas", "Ir para o centro da cidade"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "Você entra na caverna. Você vê alguns monstros."
},
{
  name: "lutar",
  "button text": ["Atacar", "Desviar", "Correr"],
  "button functions": [attack, dodge, goTown],
  text: "Você está luntando contra um monstro."
},
{
  name: "matar monstro",
  "button text": ["Ir para o centro da cidade", "Ir para o centro da cidade", "Ir para o centro da cidade"],
  "button functions": [goTown, goTown, goTown],
  text: 'O monstro grita "Arg!" enquanto morre.Você ganha pontos de experiência e encontra ouro.' // That's how you put double quotes on a dialogue
},
{
  name: "perder",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
},
{
  name: "ganhar",
  "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
  "button functions": [restart, restart, restart],
  text: "Você derrotou o dragão! VOCÊ GANHOU O JOGO! &#x1F389;"
}]; 
/*  Initialize buttons
    One way to access properties in javascript is by dot notation
    When this button is clicked, this function will be activated*/
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none"; //this will hide the monster status after its defeated
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
  //text.innerText = location.text;
  text.innerHTML = location.text; //Adaptando para poder usar emoticon
}

function goTown() {
  update(locations[0]); //passing only the object of index 0 (called bracket notation)
}
// Declarando funções
function goStore() {
  update(locations[1]);
}

  function goCave() {
    //console.log("Indo para a caverna.");
    update(locations[2]);
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
    if(currentWeapon< weapons.length - 1){ //array indexes starts at 0
      if (gold >= 30) {
        gold -= 30; //compound assignment
        currentWeapon ++; //increment operator
        let newWeapon = weapons[currentWeapon].name; // Making the player knows what weapons he has
        goldText.innerText = gold;  //changing innerText
        text.innerText = "Você agora têm um(a) " + newWeapon + ".";
        inventory.push(newWeapon); // moves variable newWeapon to the end of the array.
        text.innerText += " In your inventory you have: " + inventory; //show at the end of the innerText
      } else{
        text.innerText = "Você não têm ouro o suficiente para comprar a arma.";
      }
    }
    else{
      text.innerText = "Você já têm a arma mais forte!";
      button2.innerText = "Vender arma por 15 ouros";
      button2.onclick = sellWeapon;
    }
  }

  function sellWeapon() {
    if(inventory.length > 1){
      gold += 15;
      goldText.innerText = gold;
      //let currentWeapon; // block scope. the variable only has this value inside this block code.
      let currentWeapon = inventory.shift(); // gives this variable the first value of the array
      text.innerText = "You sold a " + currentWeapon + ".";
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "Don't sell your only weapon!";
    }
  }

  function fightSlime() {
    fighting = 0;
    goFight();  //Calling a function on javascript
  }
  function fightBeast() {
    fighting = 1;
    goFight();
  }
  
  function fightDragon() {
    fighting = 2;
    goFight();
  }
  
  function goFight() {
    update(locations[3]); //This calls the object fight, inside the function locations
    monsterHealth = monsters[fighting].health;  //This will make the monster health appear
    monsterStats.style.display = 'block'; //This will make the monster status appear when you click to fight it
    monsterName.innerText = monsters[fighting].name;  //Giving the monster a name
    monsterHealthText.innerText = monsterHealth;  //Giving it a health
  }
  
  function attack() {
    text.innerText = "The "+ monsters[fighting].name +" attacks."; //concatenation operator
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    //health -= monsters[fighting].level;
    health -= getMonsterAttackValue(monsters[fighting].level);
    if(isMonsterHit()){
      monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1; 
    } else{
      text.innerText += " You miss.";
    }
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1; // Math.floor makes a number goes down to the nearest integer. Math.random generates a random number from 0 to 1
    healthText.innerText =  health;
    monsterHealthText.innerText = monsterHealth;
    if(health<=0){
      lose();
    } else if (monsterHealth <= 0) {
      defeatMonster();
      if(fighting === 2){
        winGame();
      } else {
        defeatMonster();
      }
    }
    if(Math.random() <= .1 && inventory.length !== 1){
      text.innerText += " Your " + inventory.pop() + " breaks."; //making the possibility of your weapon to break
      currentWeaponIndex--;
    }
  }

  function getMonsterAttackValue(level){
    const hit = (level * 5) - (Math.floor(Math.random() * xp)); //This will set the monster's attack to five times their level minus a random number between 0 and the player's xp.
    console.log(hit); //debbugging
    return hit > 0 ? hit : 0; //Ternary operator
  }                                       
  
  function isMonsterHit() {
    return Math.random() > .2 || health < 20;
  }

  function dodge() {
    text.innerText = "Você desvia do ataque de " + monsters[fighting].name;
  }

  function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
  }
  
  function lose(){
    update(locations[5]);
  }

  function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
  }

  function easterEgg() {
    update(locations[7]);
  }

  function pickTwo() {
    pick(2);
  }
  
  function pickEight() {
    pick(8);
  }
  
  function pick(guess) {
  
  }

  function winGame(){
    update(locations[6]);
  }