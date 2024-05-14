import { Advertisement } from "./advertisement";
import { Product } from "./product";
import { Slide } from "./slide";




export interface IndexVM {
    slides: Slide[] | null;
    advertisements: Advertisement[] | null;
    newestProducts: Product[] | null;
    bestSellerProducts: Product[] |null;
    campaignProducts: Product[] | null;
    //blogs: Blog[];
}

