export interface objAmount{
    title: string;
    categories: string[]; 
    imageURL: string;
    product_carousel:string[];
    popularity: number;
    description: string;
    slugid: string;
    pricing: {
        price: string;
        discount?: string | undefined; 
    };
    brand: string;
    rating: number[];
    amount: number
}