import { TouchSequence } from 'selenium-webdriver';
import { Ingrediant } from '../shared/ingredient.model';

export class Recipie {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingrediants : Ingrediant[];

    constructor(name: string,desc: string,imagePath: string,ingrediants : Ingrediant[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingrediants = ingrediants;

    }
}