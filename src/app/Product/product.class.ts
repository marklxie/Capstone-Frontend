import { Vendor } from '../Vendor/vendor.class';
export class Product{
    id: number = 0;
    partNumber: string = "";
    name: string = "";
    price: number = 0;
    unit: string = "Each";
    photopath: string = null;
    vendorId: number = 0;
    vendor: Vendor = null;
    constructor(){}
}