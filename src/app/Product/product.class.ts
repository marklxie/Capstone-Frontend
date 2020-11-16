import { Vendor } from '../Vendor/vendor.class';
export class Product{
    id: number = 0;
    partNumber: string = "";
    name: string = "";
    price: number = 0;
    unit: string;
    photopath: string;
    vendorId: number;
    vendor: Vendor;
    constructor(){}
}