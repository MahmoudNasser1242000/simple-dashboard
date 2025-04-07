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

export interface IProductsSliceState {
    loading: boolean,
    error: string | null,
    products: IProduct[],
}

export interface IProductsFilterationSlice {
    category: string,
    fromPrice: number,
    toPrice: number,
    keyword: string,
    sortBy: string,
    page: number,
    limit: number,
}