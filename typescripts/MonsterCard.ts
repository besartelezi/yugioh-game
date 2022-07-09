import {Card} from "./Card";

export class MonsterCard extends Card{
    private attack: bigint;
    private defense: bigint;
    private attackMode: boolean;
    private defenseMode: boolean;
    private stars: bigint;

    constructor( cardName, cardImage, cardDescription, isFaceUp, attack: bigint, defense: bigint, attackMode: boolean =false , defenseMode: boolean =false, stars: bigint) {
        super(cardName, cardImage, cardDescription, isFaceUp);
        this.attack = attack;
        this.defense = defense;
        this.attackMode = attackMode;
        this.defenseMode = defenseMode;
        this.stars = stars;
    }
}