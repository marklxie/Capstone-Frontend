import { Product } from "../Product/product.class";
import { PRequest } from "../Request/request.class";

export class Requestline{
    id: number = 0;
    requestId: number = 0;
    request: PRequest;
    productId: number = 0;
    product:Product;
    quantity: number = 0;
}