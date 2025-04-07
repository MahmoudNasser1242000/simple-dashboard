export interface IProduct {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    imageUrl: string;
}

export interface IPriceFilteration {
    highPrice: number;
    fromPrice: number;
    setFromPrice: React.Dispatch<React.SetStateAction<number>>;
    toPrice: number;
    setToPrice: React.Dispatch<React.SetStateAction<number>>;
}