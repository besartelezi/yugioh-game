import {MonsterCard} from "./MonsterCard";

class EffectMonster extends MonsterCard {
    constructor(cardName, cardImage, cardDescription, isShown, attack, defense, attackMode, defenseMode, stars, effectType, effectAction) {
        super(cardName, cardImage, cardDescription, isShown, attack, defense, attackMode, defenseMode, stars);
        this.effectType = effectType;
        this.effectAction = effectAction;
    }
}