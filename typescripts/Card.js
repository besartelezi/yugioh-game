"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(cardName, cardImage, cardDescription, isFaceUp) {
        if (isFaceUp === void 0) { isFaceUp = false; }
        this.cardName = cardName;
        this.cardImage = cardImage;
        this.cardDescription = cardDescription;
        this.isFaceUp = isFaceUp;
    }
    Object.defineProperty(Card.prototype, "_cardName", {
        get: function () {
            return this.cardName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "_cardImage", {
        get: function () {
            return this.cardImage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "_CardDescription", {
        get: function () {
            return this.cardDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "_IsFaceUp", {
        get: function () {
            return this.isFaceUp;
        },
        enumerable: false,
        configurable: true
    });
    return Card;
}());
exports.Card = Card;
