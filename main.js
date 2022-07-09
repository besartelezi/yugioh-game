import {Card} from "./scripts/Card";
import {MonsterCard} from "./scripts/MonsterCard";
import {EffectMonster} from "./scripts/EffectMonster";
import {Player} from "./scripts/Player";
import {PlayingField} from "./scripts/PlayingField";

const BesartTheCreator = new MonsterCard("Besart The Creator",
    "/images/shrek.png",
    "The Creator of this cruel, cruel game.",
    false,
    6900, 4200,
    false, false,
    4);

console.log(BesartTheCreator)