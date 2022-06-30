
import {MonsterCard} from "./MonsterCard";
import {EffectMonster} from "./EffectMonster";





const BesartTheLearner = new EffectMonster("Besart The Learner",
    "/images/shrek.png",
    "When this card is normal summoned, add 1 'Besart The Web Developer' to your hand",
    false,
    1200, 800,
    false,false,
    1)

const BesartTheCreator = new MonsterCard("Besart The Creator",
    "/images/shrek.png",
    "The Creator of this cruel, cruel game.",
    false,
    6900, 4200,
    false, false,
    4);

console.log(BesartTheCreator)

