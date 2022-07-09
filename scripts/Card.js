export class Card {
    constructor(cardName, cardImage, cardDescription, isShown = false) {
        this.cardName = cardName;
        this.cardImage = cardImage;
        this.cardDescription = cardDescription;
        this.isShown = isShown;
    }
}
