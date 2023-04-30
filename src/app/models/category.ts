import { Produit } from "./produit";

export class Category {
    idCategory!: number; 
    name!: string ;
    photo!: string ;
    description!: string ;
    product! : Produit ; 
}