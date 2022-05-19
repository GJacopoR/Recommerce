export interface objAmount{
    title: string;
    categoriesIDs: string[]; 
    imageURL: string;
    popularity: number;
    description: string;
    id: string;
    pricing: {
        price: string;
        discount?: string | undefined; 
    };
    brand: string;
    rating: number[];
    amount: number
}