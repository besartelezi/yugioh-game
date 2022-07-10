# Yu-Gi-Oh-OOP!
This will be a rather challenging personal task.
I want to try and make a Yu-Gi-Oh game, made on Javascript using OOP.
Once the game is up and ready, you'll be able to [play it here!](https://besartelezi.github.io/yugioh-game/)

The main reason why I'm working on this project is to help me understand OOP better.
One day, I was talking to a fellow learner of mine about the advantages of OOP, when all of a sudden, I was thinking to myself.
'Could I make an entire Yu-Gi-Oh game with Javascript and OOP?'
Just the thought itself actually helped me understand OOP much better.

I've learned that learning things just goes a lot faster/better, when you're having fun with it.
It also helps a lot if you recreate something that you have a lot of knowledge of.
Growing up I played a lot of Yu-Gi-Oh, both with my little brother and my friends, but also just on the Playstation and Gameboy (yes I had a Yu-Gi-Oh game on both devices please don't be too jealous).

As much as I'd like to show off a completed Yu-Gi-Oh game, the real purpose of this project is to help me get a more in depth understanding of OOP.
But that doesn't mean I'm not gonna work off my :bee: -hind so I can play some darn' tootin' Yu-Gi-Oh with some of my very own cool custom made cards!

###### If I'm able to pull this off, I might remake the fighting system of the game Megaman Battle Network (but that's a vvery, VERY big IF).

---
##  I Summon 'Elemental Hero: Programmer' in Attack Mode!
I'd like to imagine that I know enough about Yu-Gi-Oh since I grew up playing/watching it.
But just to be sure, I'll be playing the **critically acclaimed** game Yu-Gi-Oh GX: Duel Academy on my good ol' Gameboy Micro.
I just want to clarify that the following things that I wrote down are meant to help me visualize better how to tackle this ginormous project.

The way I think I should tackle this, is by creating the following classes:
### Cards
* Monster Cards (normal monsters)
  * Effect Monsters
* Magic Cards
  * Spell Cards
  * Trap Cards

**Cards** Possess:
* Name 
* Image
* Description / Effect Description

**Monster Cards** Possess:
* Attack
* Defense
* Attack Mode
* Defense Mode
* Stars
  * Determines normal summon or sacrifice

**Monster Cards** Functions:
* From hand or deck
  * Summon
  * Special Summon (later)
* From field
  * Set to
    * Attack Mode
    * Defense Mode
  * Attack

Effect Monsters Possess: 
* Effect Type
  * Flip Effects, if monster flipped, then =>
    * Action that happens when effect activated
  * Summon Effects, if monster is summoned, then =>
    * Action that happens when effect is activated
  * Cards on the field effects, if there is a card with 'example' in their name, then =>
    * Action that happens when the effect is activated
  * ...

### Player and CPU
* Player
  * CPU

Player and CPU possess:
* Health
* A Deck
  * Made out of Cards
* A Hand
  * Made out of Cards

### Field
* Player Side / CPU side
  * Monster Field
    * 5 slots
  * Spell/Trap Field
    * 5 Slots
  * Health
  * Graveyard

## Every Phase/Turn a Class
I think that, theoretically, it should be possible to add the game rules like this

Create a class called 'Turns', every function in this class = a turn
Set all turns to negative, when gameStarts() -> set the turn that comes after it to true, and if that turn is set to true, that function will be called.
-> Is this possible?
(Probably need to add variables that are all set to false, and if those variables are set to true = start the corresponding turn)

First turn => skips attack turn

## I will be following this order
- [x] Cards 
  - [x] Monster Cards/Normal Monsters
- [ ] Deck
  - [ ] Made out of Cards (monster cards)
- [ ] Field
- [ ] Player/CPU
- [ ] Turns
- [ ] Effect Monsters
- [ ] Magic Cards
  -[ ]  Spell Cards
  -[ ] Trap Cards
- [ ] ...

---

## Bundlers, it can be your angle, or yuor devil...
I received some feedback from one of the coaches, who told me two things.
For this very, very, **very**, **VERY** beefy project two work, I should checkout:
* Typescript
* Bundlers

Now typescript was relatively easy to get into.
I decided that once I'm done with the bundler and I can use all my scripts, I would remove all the JS files and replace them with Typescript files.
But using a bundler, on the other hand.
Now that took a lot more time than I previously had imagined.

I decided to use Parcel. 
But, like almost every single person that has ever set one molecule of their being into the IT-sector, I ran into some issues.
After a lot of trial and error, I was finally able to resolve it.
When installing parcel on your computer, I accidentally installed the older version of parcel.
The one with **a lot** of security issues.
But thanks to a random comment on Youtube, I was finally able to console log my very first Yu-Gi-Oh card on the site.
So here's a quick shout-out to Uriahs Victor on Youtube, you saved my life buddy!

![alt-text](images/youtube.PNG)

With that headache and a half out of the way, I can finally focus on making the same card appear on the site again.
But this time in Typescript.

## The Deck of Cards
I now know that my Card and MonsterCard classes are working, the next step is to create a deck.
I know how to create it in simple JS, but I'm a little stuck in figuring out how to create it while respecting the rules of OOP.
What I want to do for now is set the code below in a class:
````
let playerDeck = [];

function createCards () {
    for (let i = 0; i<40; i++) {
    //BesartTheCreator is the name of the new Card object I created.
        playerDeck.push(BesartTheCreator);
    }
}
createCards()
````
Once I've figured out how to construct a deck of cards with this loop, I'll try to add a .text file where I'll write down all the different cards.
For now it'll be purely normal monster cards.
After the deck has been made out of different cards, I will also create a 'Hand' Class.
Then it'll be time to create the following functions:
* Draw a card
* Shuffle deck
* ...

I have also decided on the very first **major goal/milestone** of this project.
I'm currently aiming to have a completely functioning Yu-Gi-Oh game, but just with normal monster cards.
So no spell/trap/effect monsters/fusion summons/ritual summons,...
So basically, create Yu-Gi-Oh with the game rules of the very first episode.

The biggest challenges of this goal will be:
* Creating the CPU
* The Turns System (and different Phases within those turns)
* Doing everything in OOP




## Future Features Ft. Future
Things I'd like to add in the future of this project:
* Different Decks
  * At the start of the game, let the player choose what kind of deck they want to use.
    * Machine Deck
    * Spellcaster Deck
    * The BeCode Deck (my personal favourite)
      * Ask the fellow learners at BeCode to design their own cards, and create a deck out of these cards
      * Some examples at the top of my head are:
      * Spellcard - VDAB = "Sacrifice 1 'Learner' or 'Coach' card on your side of the field, to inflict 1000 healthpoints of damage directly to your opponent"
      * Trapcard - PHP: The Hill = "When an enemy summons a monster card on the field, destroy the summoned monster card"
      * Effect Monster Card - Besart, The Creator: "When this monster has been summoned on your side of the field, destroy all the face-down monster cards on your opponents side of the field"
      * ...
* Fusion Summons
* Legendary Cards
* Exodia
  * This is a monster, that's made out of 5 cards 'the 5 pieces of exodia'.
  * If the player has all 5 cards in their hand, they automatically win
* Spell cards that control enemy cards
* Monster reborn
  * Returns monster from the graveyard to your field
* ...

