import {MonsterCard} from "./typescripts/MonsterCard";
import {Card} from "./typescripts/Card";
import {Deck} from "./typescripts/Deck";

let besartTheCreator = new MonsterCard("Besart The Creator",
    "/images/shrek.png",
    "The Creator of this cruel, cruel game.",
    false,
    6900, 4200,
    false, false,
    4)

console.log(besartTheCreator);

let becodeDeck = new Deck();
becodeDeck.getDeck();
console.log(becodeDeck)


//For now, the main.js will be used for testing
//Eventually, create a class function that will be used to start the game, and end the game.
//to run the localhost, do npm run dev