import { Color, ColorName, ColorValue } from "./shared/color";

export class Easy {
    HelloWorld(): string {
        return "Hello World :)";
    }
    
    TwoFer(name?: string): string {
        if (name)
            return `One for ${name}, one for me.`;
        return 'One for you, one for me.';
    }
    
    ResistorColorDuo(colors: ColorName[]): string {
        if(colors.length > 2) colors.splice(2);
        
        let temp_result: ColorValue[] = [];
        Color.forEach(el => {
            colors.forEach(ele => {
                if (el.name.toLocaleLowerCase() === ele.toLocaleLowerCase())
                    temp_result.push(el.value);
            });
        });
        const result = temp_result.join('');

        return result;
    }
}