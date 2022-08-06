import {Card} from "./Card";

export class MonsterCard extends Card{
    private attack: number;
    private defense: number;
    private attackMode: boolean;
    private defenseMode: boolean;
    private stars: number;

    constructor( cardName, cardImage, cardDescription, isFaceUp, attack: number, defense: number, attackMode: boolean =false , defenseMode: boolean =false, stars: number) {
        super(cardName, cardImage, cardDescription, isFaceUp);
        this.attack = attack;
        this.defense = defense;
        this.attackMode = attackMode;
        this.defenseMode = defenseMode;
        this.stars = stars;
    }
}