import { Easy } from "./Easy";
import { ColorName } from "./shared/color";

/**
 * For Easy Difficulty
 */
// Create an instance of Easy
const easy = new Easy();

// Defined and revoke
console.log("---------") // Devider

const hello_world = easy.HelloWorld();
console.log(`1. Hello World: "${hello_world}"`);

console.log("---------") // Devider

let two_fer!: string;

two_fer = easy.TwoFer();
console.log(`2.1. Two Fer Without Param: "${two_fer}"`);
two_fer = easy.TwoFer("Alice");
console.log(`2.2. Two Fer With Param: "${two_fer}"`);

console.log("---------") // Devider

let colors!: ColorName[];
let resistor_color_duo !: string;

colors = [ColorName.Black, ColorName.Blue];
resistor_color_duo = easy.ResistorColorDuo(colors);
console.log(`3.1. Resistor With 2 Colors: "${resistor_color_duo}"`);

colors = [ColorName.Black, ColorName.Blue, ColorName.Brown, ColorName.Green];
resistor_color_duo = easy.ResistorColorDuo(colors);
console.log(`3.2. Resistor With Greater Than 2 Colors: "${resistor_color_duo}"`);

console.log("---------") // Devider

/** END */

