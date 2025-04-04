import { TechEnum } from "../enum/TechEnum";

export interface ITechLayout {
    color?: string;
    labelColor?: string;
    textColor?: string;
}

export const getTechLayout = (tech: TechEnum) => {
    let layout: ITechLayout = {};

    if (tech === TechEnum.PHP) {
        layout.color = "linear-gradient(to bottom right,rgb(85, 93, 218),rgb(127, 162, 238))";
        layout.labelColor = "rgb(40, 48, 155)";
        layout.textColor = "white"
    }

    if (tech === TechEnum.LARAVEL) {
        layout.color = "linear-gradient(to bottom right,rgb(221, 47, 47),rgb(248, 127, 127))";
        layout.labelColor = "rgb(197, 46, 46)";
        layout.textColor = "white"
    }

    if (tech === TechEnum.NODE) {
        layout.color = "linear-gradient(to bottom right,rgb(43, 182, 62),rgb(92, 165, 102))";
        layout.labelColor = "rgb(3, 75, 35)";
        layout.textColor = "white"
    }

    if (tech === TechEnum.REACTJS) {
        layout.color = "linear-gradient(to bottom right,rgb(31, 184, 223),rgb(85, 169, 184))";
        layout.labelColor = "rgb(22, 75, 88)";
        layout.textColor = "white"
    }

    if (tech === TechEnum.TYPESCRIPT) {
        layout.color = "linear-gradient(to bottom right,rgb(31, 184, 223),rgb(85, 169, 184))";
        layout.labelColor = "rgb(22, 75, 88)";
        layout.textColor = "white"
    }

    if (tech === TechEnum.JAVASCRIPT) {
        layout.color = "linear-gradient(to bottom right, #FFF176, #FFEB3B)";
        layout.labelColor = "rgb(208, 218, 71)";
        layout.textColor = "white"
    }

    return layout
    
}