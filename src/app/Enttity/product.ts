export interface Product {
    stockCode: string;
    barcode: string;
    name: string;
    categoryID: number | null;
    categoryName: string;
    brandID: number | null;
    brandName: string;
    price: number;
    discountPrice: number;
    discountPrice2: number;
    tax: number;
    stock: number;
    expiryDate: string;
    description: string;
    content: string;
    mF: string;
    lastBuyDate: string;
    salesCount: number;
    productStock: boolean;
    wStatus: boolean;
    recUpdate: string | null;
    maxAdet: number;
}