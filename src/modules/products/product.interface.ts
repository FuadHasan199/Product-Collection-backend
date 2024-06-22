export type Tvarient = {
    type: string;
    value: string;
}

export type Tinventory = {
    quantity : number;
    inStock : boolean;
}


export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[]
    variants: Tvarient[];
    inventory: Tinventory;
}