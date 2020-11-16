import { Product } from "../Product/product.class";
import { PRequest } from "../Request/request.class";

export class Requestline{
    id: number = 0;
    requestId: number;
    request: PRequest;
    productId: number;
    product:Product;
    quantity: number;
}