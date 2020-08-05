// Variables
let userName = '';
let userHealth = 40;
let friezaHealth = 10;
let friezaLives = 3;
let userQuit = false;

// Attack Damage Function
const getDamage = () => Math.floor(Math.random() * 5) + 1;

// Battle Function
const startCombat = () => {
    while (friezaHealth > 0) {
        let attackQuit = prompt('Attack or Quit?');
        if (attackQuit.toLowerCase() === 'attack'){
            friezaHealth = friezaHealth - getDamage();
            if (friezaHealth > 0){
                userHealth = userHealth - getDamage();
            }
            // Don't want negative health, so setting to 0
            if (friezaHealth < 0){friezaHealth = 0;}
            if (userHealth < 0){userHealth = 0;}

            console.log(`Frieza has ${friezaHealth} health left.`);
            console.log(`${userName} has ${userHealth} health left.`);
            
            if (friezaHealth <= 0){
                friezaLives--;
                console.log('Frieza has been defeated!')
                console.log(`Frieza has ${friezaLives} forms left.`);
            }
            if (userHealth <= 0){
                console.log(`${userName} has lost. Better luck next time!`)
                break;
            }
        } else if (attackQuit.toLowerCase() === 'quit'){
            console.log(`${userName} has quit. Later.`);
            userQuit = true;
            break;
        }
    }
}


// Start Game Function
const startGame = () => {
    let start = prompt('Would you like to play a game? Yes or No?');
    if (start.toLowerCase() === 'yes') {
        userName = prompt(`What is your character's name?`);
        console.log(`${userName} has challenged Frieza. Begin!`);
        while (friezaLives > 0 && userHealth > 0 && !userQuit){
            startCombat();
            friezaHealth = 10;
        }
        console.log('Game over!');
    } else {
        console.log('Maybe next time.');
    }
}


startGame();