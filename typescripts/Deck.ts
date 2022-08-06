import {MonsterCard} from "./MonsterCard";
import {Card} from "./Card";

export class Deck {

    private playerDeck : Array<Card>

    constructor(playerDeck = []) {
        this.playerDeck = playerDeck;
    }

    public getDeck () {
        for (let i = 0; i<5; i++) {
            this.playerDeck.push(new MonsterCard("Besart The Creator",
                "/images/shrek.png",
                "The Creator of this cruel, cruel game.",
                false,
                6900, 4200,
                false, false,
                4))
        }
        return this.playerDeck
    }

    public shuffleDeck () {

    }



    public get _playerDeck () {
        return this.playerDeck;
    }

}
