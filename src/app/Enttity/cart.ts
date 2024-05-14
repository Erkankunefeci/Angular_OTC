export interface Cart {
    iD: number;
    memberGLN: string;
    memberGLN2: string;
    barcode: string;
    stockCode: string;
    name: string;
    price: number;
    mfsizPrices: number | null;
    discountPrice: number;
    verilcekmf: number;
    discountPrice2: number;
    tax: number;
    stock: number;
    picture: string;
    quantity: number;
    expiryDate: string;
    mF: string;
    productMFID: number;
    rec_Date: string | null;
}