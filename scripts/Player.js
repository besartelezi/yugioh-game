export class Player {
    constructor(health = 4000, deck = [], hand) {
        this.health = health;
        this.deck = deck;
        this.hand = hand;
    }
}