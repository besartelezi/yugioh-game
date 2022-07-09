"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterCard = void 0;
var Card_1 = require("./Card");
var MonsterCard = /** @class */ (function (_super) {
    __extends(MonsterCard, _super);
    function MonsterCard(cardName, cardImage, cardDescription, isFaceUp, attack, defense, attackMode, defenseMode, stars) {
        if (attackMode === void 0) { attackMode = false; }
        if (defenseMode === void 0) { defenseMode = false; }
        var _this = _super.call(this, cardName, cardImage, cardDescription, isFaceUp) || this;
        _this.attack = attack;
        _this.defense = defense;
        _this.attackMode = attackMode;
        _this.defenseMode = defenseMode;
        _this.stars = stars;
        return _this;
    }
    return MonsterCard;
}(Card_1.Card));
exports.MonsterCard = MonsterCard;
