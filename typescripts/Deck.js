"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var MonsterCard_1 = require("./MonsterCard");
var Deck = /** @class */ (function () {
    function Deck(playerDeck) {
        if (playerDeck === void 0) { playerDeck = []; }
        this.playerDeck = playerDeck;
    }
    Deck.prototype.getDeck = function () {
        for (var i = 0; i < 5; i++) {
            this.playerDeck.push(new MonsterCard_1.MonsterCard("Besart The Creator", "/images/shrek.png", "The Creator of this cruel, cruel game.", false, 6900, 4200, false, false, 4));
        }
        return this.playerDeck;
    };
    Deck.prototype.shuffleDeck = function () {
    };
    Object.defineProperty(Deck.prototype, "_playerDeck", {
        get: function () {
            return this.playerDeck;
        },
        enumerable: false,
        configurable: true
    });
    return Deck;
}());
exports.Deck = Deck;
