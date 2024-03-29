export class Card {
    private cardName: string;
    private cardImage: string;
    private cardDescription: string;
    private isFaceUp: boolean;

    constructor(cardName: string, cardImage: string, cardDescription: string, isFaceUp:boolean = false) {
        this.cardName = cardName;
        this.cardImage = cardImage;
        this.cardDescription = cardDescription;
        this.isFaceUp = isFaceUp;
    }

     get _cardName () {
        return this.cardName
    }

    public get _cardImage () {
        return this.cardImage
    }

    public get _CardDescription () {
        return this.cardDescription
    }

    public get _IsFaceUp () {
        return this.isFaceUp
    }
}
//Because of some reason, when compiling ts files that possess private properties, use the following: tsc -t es5 script.ts