"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MonsterCard_1 = require("./typescripts/MonsterCard");
var Deck_1 = require("./typescripts/Deck");
var besartTheCreator = new MonsterCard_1.MonsterCard("Besart The Creator", "/images/shrek.png", "The Creator of this cruel, cruel game.", false, 6900, 4200, false, false, 4);
console.log(besartTheCreator);
var becodeDeck = new Deck_1.Deck();
becodeDeck.getDeck();
console.log(becodeDeck);
//For now, the main.js will be used for testing
//Eventually, create a class function that will be used to start the game, and end the game.
//to run the localhost, do npm run dev
