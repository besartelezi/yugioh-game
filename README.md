# Yu-Gi-Oh-OOP!
This will be a rather challenging personal task.
I want to try and make a Yu-Gi-Oh game, made on Javascript using OOP.
###### If I'm able to pull this off, I might remake the fighting system of the game Megaman Battle Network.

## I Summon 'Elemental Hero: Programmer' in Attack Mode!
I'd like to imagine that I know enough about Yu-Gi-Oh since I grew up playing/watching it.
But just to be sure, I'll be playing the **critically acclaimed** game Yu-Gi-Oh GX: Duel Academy on my good ol' Gameboy Micro.

The way I think I should tackle this, is by:
### Cards
* Monster Cards (normal monsters)
  * Effect Monsters
* Spell Cards 
* Trap Cards

**Cards** Possess:
* Backside
  * Standard Back of YUGIOH card
* Frontside
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

Effect Monsters Possess: 
* Effect Type
  * Flip Effects, if monster flipped, then =>
    * Action that happens when effect activated
  * Summon Effects, if monster is summoned, then =>
    * Action that happens when effect is activated
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
  * End Turn Buttons
  * Cards
  * Deck
  * Graveyard

## Every Phase/Turn a Class
I think that, theoretically, it should be possible to add the game rules like this

Order of creation will be:
1. Cards
   1. Monster Cards
      1. Normal Monsters
      2. Effect Monsters
2. Player/CPU
3. Field
4. Spell Cards
5. Trap Cards
6. ...

## Future Features Ft. Future
Things I'd like to add in the future of this project:
* Fusion Summons
* Legendary Cards
* ...