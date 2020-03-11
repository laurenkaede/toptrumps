//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                                          Top Trumps - Harry Potter - Challenge                                             //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//* Function created called 'Card' which will hold the name of the character and the accompanying five statistics.

function card(name, magicalAbility, wandLength, familyTree, fearFactor, ttRating) {
    this._name = name;
    this._magicalAbility = magicalAbility; // Scale: 0 - 10 with 10 being the winning value.
    this._wandLength = wandLength; // Scale: 0 - 20 with 20 being the winning value.
    this._familyTree = familyTree; // Scale: 0 - 30 with 30 being the winning value.
    this._fearFactor = fearFactor; // Scale: 0 - 10 with 0 being the winning value.
    this._ttRating = ttRating; // Scale: 0 - 30 with 30 being the winning value.
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//* Full card deck. Each card is a variable.

let harryCard = new card("Harry Potter", 5, 11, 7, 4, 30);
let albusCard = new card("Albus Dumbledore", 10, 15, 4, 7, 27);
let snapeCard = new card("Severus Snape", 9, 14, 2, 9, 26);
let siriusCard = new card("Sirius Black", 8, 15, 6, 5, 22);
let ronCard = new card("Ron Weasley", 2, 14, 11, 4, 29);
let hermioneCard = new card("Hermione Granger", 5, 11, 5, 3, 29);
let voldemortCard = new card("Lord Voldemort", 10, 14, 0, 10, 25);
let cedricCard = new card("Cedric Diggory", 7, 12, 2, 4, 21);
let bellatrixCard = new card("Bellatrix Lestrange", 8, 13, 7, 8, 23);
let hagridCard = new card("Rubeus Hagrid", 1, 16, 1, 3, 24);
let fleurCard = new card("Fleur Delacour", 7, 10, 7, 2, 12);
let fenrirCard = new card("Fenrir Greyback", 0, 0, 1, 10, 1);
let ginnyCard = new card("Ginny Weasley", 3, 9, 12, 2, 20);
let finchCard = new card("Argus Finch", 0, 0, 0, 5, 1);
let lupinCard = new card("Remus Lupin", 9, 15, 4, 8, 19);

let lunaCard = new card("Luna Lovegood", 4, 11, 2, 1, 11);
let dracoCard = new card("Draco Malfoy", 4, 10, 4, 4, 18);
let mollyCard = new card("Molly Weasley", 8, 13, 24, 1, 17);
let nevilleCard = new card("Neville Longbottom", 1, 13, 4, 1, 10);
let minervaCard = new card("Minerva McGonagall", 9, 10, 1, 6, 16);
let sybillCard = new card("Sybill Trelawney", 5, 8, 3, 1, 3);
let tonksCard = new card("Nymphadora Tonks", 8, 12, 4, 2, 4);
let horaceCard = new card("Horace Slughorn", 8, 10, 2, 2, 9);
let krumCard = new card("Victor Krum", 7, 10, 2, 5, 7);
let quirrellCard = new card("Quirinus Quirrell", 7, 9, 0, 7, 8);
let lockhartCard = new card("Gilderoy Lockhart", 6, 9, 2, 2, 6);
let arthurCard = new card("Arthur Weasley", 8, 11, 22, 2, 15);
let luciusCard = new card("Lucius Malfoy", 9, 18, 4, 7, 14);
let choCard = new card("Cho Chang", 6, 11, 2, 2, 5);
let peterCard = new card("Peter Pettigrew", 1, 9, 3, 6, 13);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//* Two decks of cards created as variables and corresponding cards placed in an array.

let deck1 = [harryCard, albusCard, snapeCard, siriusCard, ronCard, hermioneCard, voldemortCard, cedricCard, bellatrixCard, hagridCard, fleurCard, fenrirCard, ginnyCard, finchCard, lupinCard];

let deck2 = [lunaCard, dracoCard, mollyCard, nevilleCard, minervaCard, sybillCard, tonksCard, horaceCard, krumCard, quirrellCard, lockhartCard, arthurCard, luciusCard, choCard, peterCard];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//* Variables created for use within the Top Trumps game.

let welcomeMessage = ("Welcome to Top Trumps Harry Potter! Would you like to play? Please type 'yes' or 'no'.");
let goodbyeMessage = ("Would you like to end the game? Please type 'yes' or 'no'.");
let endMessage = ("Thank you for playing Top Trumps Harry Potter, please play again soon!");
let cardPlayCheck = ("Are you sure you don't want to see your card? Please type 'yes' or 'no'.");

let playerName1 = ("Player 1, what is your name?");
let playerName2 = ("Player 2, what is your name?");
let chooseCard1 = (`${playerName1} would you like to see your card? Please type 'yes' or 'no'.`);
let chooseCard2 = (`${playerName2} would you like to see your card? Please type 'yes' or 'no'.`);

let compareAttribute1 = (`${playerName1} would you like to choose and compare - 1 magical ability - 2 wand length - 3 family tree - 4 fear factor or 5 top trumps rating? Please type '1', '2', '3', '4' or '5'`);
let compareAttribute2 = (`${playerName2} would you like to choose and compare - 1 magical ability - 2 wand length - 3 family tree - 4 fear factor or 5 top trumps rating? Please type '1', '2', '3', '4' or '5'`);

let chosenCard1 = [];
let chosenCard2 = [];
let chosenCardDraw = [];
chosenCardDraw.push(chosenCard1, chosenCard2);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//* Start and end game function.

welcomeToGame();

function welcomeToGame() {
    welcomeMessage = prompt("Welcome to Top Trumps Harry Potter! Would you like to play? Please type 'yes' or 'no'.");
    if (welcomeMessage == "yes") {
        playerName1 = prompt("Player 1, what is your name?");
        playerName2 = prompt("Player 2, what is your name?");
        alert(`Welcome to Top Trumps Harry Potter ${playerName1} and ${playerName2}!`);
        playGame1();
    } else {
        endGame();
    }
}

function endGame() {
    goodbyeMessage = prompt("Would you like to end the game? Please type 'yes' or 'no'.");
    if (goodbyeMessage == "yes") {
        endMessage = ("Thank you for playing Top Trumps Harry Potter, please play again soon!");
    } else {
        welcomeMessage = prompt("Welcome to Top Trumps Harry Potter! Would you like to play? Please type 'yes' or 'no'.");
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//* Shuffle Deck

// function shuffleCards() {
//     let currentIndex = cards.length;
//     let temporaryValue;
//     let randomIndex;

//     while (0 !== currentIndex) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = cards[currentIndex];
//         cards[currentIndex] = cards[randomIndex];
//         cards[randomIndex] = temporaryValue;
//     }

// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//* Chosen Player Card functions.

function playGame1() {
    if (chosenCardDraw > 0) {
        deck1.push(chosenCard1, chosenCard2)
    } else {
        console.log(chosenCardDraw);
    };
    chosenCard1 = deck1.shift();
    alert(`${playerName1} your card is ${chosenCard1._name}! ${chosenCard1._name}'s Magical Abilities are rated ${chosenCard1._magicalAbility}, their Wand Length is ${chosenCard1._wandLength}, their Family Tree consists of ${chosenCard1._familyTree} members of family, their Fear Factor is ${chosenCard1._fearFactor} and their Top Trumps rating is ${chosenCard1._ttRating}.`);
    chosenCard2 = deck2.shift();
    alert(`${playerName2} your card is ${chosenCard2._name}! ${chosenCard2._name}'s Magical Abilities are rated ${chosenCard2._magicalAbility}, their Wand Length is ${chosenCard2._wandLength}, their Family Tree consists of ${chosenCard2._familyTree} members of family, their Fear Factor is ${chosenCard2._fearFactor} and their Top Trumps rating is ${chosenCard2._ttRating}.`);
    compareAttributeP1();
}

function playGame2() {
    if (chosenCardDraw > 0) {
        deck2.push(chosenCard1, chosenCard2)
    } else {
        console.log(chosenCardDraw);
    };
    chosenCard2 = deck2.shift();
    alert(`${playerName2} your card is ${chosenCard2._name}! ${chosenCard2._name}'s Magical Abilities are rated ${chosenCard2._magicalAbility}, their Wand Length is ${chosenCard2._wandLength}, their Family Tree consists of ${chosenCard2._familyTree} members of family, their Fear Factor is ${chosenCard2._fearFactor} and their Top Trumps rating is ${chosenCard2._ttRating}.`);
    chosenCard1 = deck1.shift();
    alert(`${playerName1} your card is ${chosenCard1._name}! ${chosenCard1._name}'s Magical Abilities are rated ${chosenCard1._magicalAbility}, their Wand Length is ${chosenCard1._wandLength}, their Family Tree consists of ${chosenCard1._familyTree} members of family, their Fear Factor is ${chosenCard1._fearFactor} and their Top Trumps rating is ${chosenCard1._ttRating}.`);
    compareAttributeP2();
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//* Attribute comparison functions. 

function compareAttributeP1() {
    compareAttribute1 = prompt(`${playerName1} would you like to choose and compare - 1 magical ability - 2 wand length - 3 family tree - 4 fear factor or 5 top trumps rating? Please type '1', '2', '3', '4' or '5'`);
    if (compareAttribute1 == "1") {
        alert(`${chosenCard1._name}'s Magical Ability is ${chosenCard1._magicalAbility} and  ${chosenCard2._name}'s Magical Ability is ${chosenCard2._magicalAbility}.`);
        compareMagicalAbility();
    } else if (compareAttribute1 == "2") {
        alert(`${chosenCard1._name}'s Wand Length is ${chosenCard1._wandLength} and  ${chosenCard2._name}'s Wand Length is ${chosenCard2._wandLength}.`);
        compareWandLength();
    } else if (compareAttribute1 == "3") {
        alert(`${chosenCard1._name}'s Family Tree is ${chosenCard1._familyTree} and  ${chosenCard2._name}'s Family Tree is ${chosenCard2._familyTree}.`);
        compareFamilyTree();
    } else if (compareAttribute1 == "4") {
        alert(`${chosenCard1._name}'s Fear Factor is ${chosenCard1._fearFactor} and  ${chosenCard2._name}'s Fear Factor is ${chosenCard2._fearFactor}.`);
        compareFearFactor();
    } else if (compareAttribute1 == "5") {
        alert(`${chosenCard1._name}'s Top Trumps Rating is ${chosenCard1._ttRating} and  ${chosenCard2._name}'s Top Trumps Rating is ${chosenCard2._ttRating}.`);
        compareTTRating();
    } else {
        compareAttribute1 = prompt(`${playerName1} would you like to choose and compare - 1 magical ability - 2 wand length - 3 family tree - 4 fear factor or 5 top trumps rating? Please type '1', '2', '3', '4' or '5'`);
    }
}

function compareAttributeP2() {
    compareAttribute2 = prompt(`${playerName2} would you like to choose and compare - 1 magical ability - 2 wand length - 3 family tree - 4 fear factor or 5 top trumps rating? Please type '1', '2', '3', '4' or '5'`);
    if (compareAttribute2 == "1") {
        alert(`${chosenCard2._name}'s Magical Ability is ${chosenCard2._magicalAbility} and  ${chosenCard1._name}'s Magical Ability is ${chosenCard1._magicalAbility}.`);
        compareMagicalAbility();
    } else if (compareAttribute2 == "2") {
        alert(`${chosenCard2._name}'s Wand Length is ${chosenCard2._wandLength} and  ${chosenCard1._name}'s Wand Length is ${chosenCard1._wandLength}.`);
        compareWandLength();
    } else if (compareAttribute2 == "3") {
        alert(`${chosenCard2._name}'s Family Tree is ${chosenCard2._familyTree} and  ${chosenCard1._name}'s Family Tree is ${chosenCard1._familyTree}.`);
        compareFamilyTree();
    } else if (compareAttribute2 == "4") {
        alert(`${chosenCard2._name}'s Fear Factor is ${chosenCard2._fearFactor} and  ${chosenCard1._name}'s Fear Factor is ${chosenCard1._fearFactor}.`);
        compareFearFactor();
    } else if (compareAttribute2 == "5") {
        alert(`${chosenCard2._name}'s Top Trumps Rating is ${chosenCard2._ttRating} and  ${chosenCard1._name}'s Top Trumps Rating is ${chosenCard1._ttRating}.`);
        compareTTRating();
    } else {
        compareAttribute2 = prompt(`${playerName2} would you like to choose and compare - 1 magical ability - 2 wand length - 3 family tree - 4 fear factor or 5 top trumps rating? Please type '1', '2', '3', '4' or '5'`);
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//* Limbo functions.


function limbo1() {
    if (deck1 == 30 || deck2 == 0) {
        alert(`${playerName1} has won the game!`);
        endGame();
    } else if (deck2 == 30 || deck2 == 0) {
        alert(`${playerName2} has won the game!`);
        endGame();
    } else {
        playGame1();
    }
}

function limbo2() {
    if (deck1 == 30 || deck2 == 0) {
        alert(`${playerName1} has won the game!`);
        endGame();
    } else if (deck2 == 30 || deck2 == 0) {
        alert(`${playerName2} has won the game!`);
        endGame();
    } else {
        playGame2();
    }
}

function limboDraw() {
    chosenCardDraw = chosenCardDraw.push(chosenCard1, chosenCard2);
    if (deck1.length > deck2.length) {
        playGame1();
    } else if (deck2.length > deck1.length) {
        playGame2();
    } else playGame1();

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//* Property comparison functions.

function compareMagicalAbility() {
    if (chosenCard1._magicalAbility > chosenCard2._magicalAbility) {
        alert(`${playerName1} wins this round! ${chosenCard2._name} will be added to your deck.`)
        deck1.push(chosenCard2, chosenCard1);
        alert(`${playerName1} you now have ${deck1.length} cards in your hand. ${playerName2} you now have ${deck2.length} cards in your hand.`)
        limbo1();
    } else if (chosenCard1._magicalAbility < chosenCard2._magicalAbility) {
        alert(`${playerName2} wins this round! ${chosenCard1._name} will be added to your deck.`)
        deck2.push(chosenCard2, chosenCard1);
        alert(`${playerName2} you now have ${deck2.length} cards in your hand. ${playerName1} you now have ${deck1.length} cards in your hand.`)
        limbo2();
    } else {
        alert(`It's a draw! Whoever wins the next round will win both cards from this round. Good luck!`)
        limboDraw();
    }
}

function compareWandLength() {
    if (chosenCard1._wandLength > chosenCard2._wandLength) {
        alert(`${playerName1} wins this round! ${chosenCard2._name} will be added to your deck.`)
        deck1.push(chosenCard2, chosenCard1);
        alert(`${playerName1} you now have ${deck1.length} cards in your hand. ${playerName2} you now have ${deck2.length} cards in your hand.`)
        limbo1();
    } else if (chosenCard1._wandLength < chosenCard2._wandLength) {
        alert(`${playerName2} wins this round! ${chosenCard1._name} will be added to your deck.`)
        deck2.push(chosenCard2, chosenCard1);
        alert(`${playerName2} you now have ${deck2.length} cards in your hand. ${playerName1} you now have ${deck1.length} cards in your hand.`)
        limbo2();
    } else {
        alert(`It's a draw! Whoever wins the next round will win both cards from this round. Good luck!`)
        limboDraw();
    }
}

function compareFamilyTree() {
    if (chosenCard1._familyTree > chosenCard2._familyTree) {
        alert(`${playerName1} wins this round! ${chosenCard2._name} will be added to your deck.`)
        deck1.push(chosenCard2, chosenCard1);
        alert(`${playerName1} you now have ${deck1.length} cards in your hand. ${playerName2} you now have ${deck2.length} cards in your hand.`)
        limbo1();
    } else if (chosenCard1._familyTree < chosenCard2._familyTree) {
        alert(`${playerName2} wins this round! ${chosenCard1._name} will be added to your deck.`)
        deck2.push(chosenCard2, chosenCard1);
        alert(`${playerName2} you now have ${deck2.length} cards in your hand. ${playerName1} you now have ${deck1.length} cards in your hand.`)
        limbo2();
    } else {
        alert(`It's a draw! Whoever wins the next round will win both cards from this round. Good luck!`)
        limboDraw();
    }
}

function compareFearFactor() {
    if (chosenCard1._fearFactor > chosenCard2._fearFactor) {
        alert(`${playerName1} wins this round! ${chosenCard2._name} will be added to your deck.`)
        deck1.push(chosenCard2, chosenCard1);
        alert(`${playerName1} you now have ${deck1.length} cards in your hand. ${playerName2} you now have ${deck2.length} cards in your hand.`)
        limbo1();
    } else if (chosenCard1._fearFactor < chosenCard2._fearFactor) {
        alert(`${playerName2} wins this round! ${chosenCard1._name} will be added to your deck.`)
        deck2.push(chosenCard2, chosenCard1);
        alert(`${playerName2} you now have ${deck2.length} cards in your hand. ${playerName1} you now have ${deck1.length} cards in your hand.`)
        limbo2();
    } else {
        alert(`It's a draw! Whoever wins the next round will win both cards from this round. Good luck!`)
        limboDraw();
    }
}

function compareTTRating() {
    if (chosenCard1._ttRating > chosenCard2._ttRating) {
        alert(`${playerName1} wins this round! ${chosenCard2._name} will be added to your deck.`)
        deck1.push(chosenCard2, chosenCard1);
        alert(`${playerName1} you now have ${deck1.length} cards in your hand. ${playerName2} you now have ${deck2.length} cards in your hand.`)
        limbo1();
    } else if (chosenCard1._ttRating < chosenCard2._ttRating) {
        alert(`${playerName2} wins this round! ${chosenCard1._name} will be added to your deck.`)
        deck2.push(chosenCard2, chosenCard1);
        alert(`${playerName2} you now have ${deck2.length} cards in your hand. ${playerName1} you now have ${deck1.length} cards in your hand.`)
        limbo2();
    } else {
        alert(`It's a draw! Whoever wins the next round will win both cards from this round. Good luck!`)
        limboDraw();
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//* Function to start the game.

welcomeToGame();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//