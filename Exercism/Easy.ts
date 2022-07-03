import { Color, ColorName, ColorValue } from "./shared/color";

export class Easy {
	HelloWorld(): string {
		return "Hello World :)";
	}

	TwoFer(name?: string): string {
		if (name) return `One for ${name}, one for me.`;
		return "One for you, one for me.";
	}

	ResistorColorDuo(colors: ColorName[]): string {
		let temp_result: ColorValue[] = [];

		if (colors.length > 2) colors.splice(2);

		colors.forEach((el) => {
			Color.forEach((ele) => {
				if (el.toLocaleLowerCase() === ele.name.toLocaleLowerCase())
					temp_result.push(ele.value);
			});
		});
		const result = temp_result.join("");

		return result;
	}

	ResistorColorTrio(colors: ColorName[]): string {
		// Copy origin raw data to new array
		const temp_colors = [...colors];
		// For save convert raw data from string to number
		let temp_result: ColorValue[] = [];
		// For check last item is black color or not
		let isBlackColor!: boolean;
		// For while loop
		let index = 0;

		if (temp_colors.length > 3) temp_colors.splice(3);
		isBlackColor = temp_colors[temp_colors.length - 1].toLowerCase() === ColorName.Black.toLowerCase();
		if (isBlackColor) temp_colors.pop();

		temp_colors.forEach((el) => {
			Color.forEach((ele) => {
				if (el.toLocaleLowerCase() === ele.name.toLocaleLowerCase()) {
					temp_result.push(ele.value);
				}
			});
		});

		const temp_string_result = [...temp_result.toString().split(",")];
		let lastIndex = temp_string_result.length - 1;
		if (temp_string_result.length === 3 && lastIndex) {
			temp_string_result[lastIndex] = "";
			while(index <= lastIndex) {
				temp_string_result[lastIndex] += ColorValue.Black;
				index++;
			}
		}
		const result = temp_string_result.join("");

		return result;
	}
}
