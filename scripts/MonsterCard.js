import {Card} from "./Card";

export class MonsterCard extends Card{
    constructor(cardName, cardImage, cardDescription, isShown, attack, defense, attackMode, defenseMode, stars) {
        super(cardName, cardImage, cardDescription, isShown);
        this.attack = attack;
        this.defense = defense;
        this.atackMode = attackMode;
        this.defenseMode = defenseMode;
        this.stars = stars;
    }
    getMonsterCard () {
        return (this.cardName, this.cardImage, this.cardDescription, this.isShown, this.attack, this.defense, this.atackMode, this.defenseMode, this.stars);
    }

}
