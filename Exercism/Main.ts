import { Easy } from "./Easy";
import { Color, ColorName } from "./shared/color";
import { ElectricUnit } from "./shared/unit";

/**
 * For Easy Difficulty
 */
// Create an instance of Easy
const easy = new Easy();

// Defined and revoke
console.log("---------"); // Devider

const hello_world = easy.HelloWorld();
console.log(`1. Hello World: "${hello_world}"`);

console.log("---------"); // Devider

let two_fer!: string;

two_fer = easy.TwoFer();
console.log(`2.1. Two Fer Without Param: "${two_fer}"`);
two_fer = easy.TwoFer("Alice");
console.log(`2.2. Two Fer With Param: "${two_fer}"`);

console.log("---------"); // Devider

let colors!: ColorName[];
let resistor_color_duo!: string;

colors = [ColorName.Black, ColorName.Blue];
resistor_color_duo = easy.ResistorColorDuo(colors);
console.log(`3.1. Resistor Duo Colors: "${resistor_color_duo}"`);

colors = [ColorName.Blue, ColorName.Black, ColorName.Brown, ColorName.Green];
resistor_color_duo = easy.ResistorColorDuo(colors);
console.log(
	`3.2. Resistor Duo Colors - More Than Two: "${resistor_color_duo}"`
);

console.log("---------"); // Devider

let resistor_color_trio!: string;

colors = [ColorName.Blue, ColorName.Brown];
resistor_color_trio = easy.ResistorColorTrio(colors);
console.log(
	`4.1 Resistor Trio Colors - With Two Colors: "${resistor_color_trio} ${ElectricUnit.Ohm}"`
);

colors = [ColorName.Blue, ColorName.Brown, ColorName.Black];
resistor_color_trio = easy.ResistorColorTrio(colors);
console.log(
	`4.2 Resistor Trio Colors - With Black Color In Last: "${resistor_color_trio} ${ElectricUnit.Ohm}"`
);

colors = [ColorName.Blue, ColorName.Brown, ColorName.Orange];
resistor_color_trio = easy.ResistorColorTrio(colors);
console.log(
	`4.3 Resistor Trio Colors - Without Black Color In Last: "${resistor_color_trio} ${ElectricUnit.Ohm}"`
);

console.log("---------"); // Devider

/** END */
