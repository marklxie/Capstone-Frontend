import { Requestline } from '../Requestline/requestline.class';
import { User } from '../User/user.class';

export class PRequest{
    id: number = 0;
    description: string = "";
    justification: string;
    rejectionreason: string;
    deliveryMode: string = "";
    status: string = "NEW";
    total: number = 0;
    userId: number;
    user: User;
    requestlines: Requestline[];
    constructor(){}
}