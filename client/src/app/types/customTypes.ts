import { IUser } from './user.interface';
import { IRoles } from '.';

export class User implements IUser {
    Id: string;
    Name: string;
    Group;
    role;
    Email: string;
}
export class Roles implements IRoles {

}

export class BookAllocationType {
    proceedWithAllocation: boolean;
    bookRefToBeAllocated: number;

}
