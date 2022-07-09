export class Card {
    cardName: string;
    cardImage: string;
    cardDescription: string;
    isShown: boolean;

    constructor(cardName: string, cardImage: string, cardDescription: string, isShown:boolean = false) {
        this.cardName = cardName;
        this.cardImage = cardImage;
        this.cardDescription = cardDescription;
        this.isShown = isShown;
    }
}