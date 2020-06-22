import { IUser } from './user.interface';
import { IRoles } from './roles.interface';

export class User implements IUser {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
}
export class Roles implements IRoles {

}

export class BookAllocationType {
  proceedWithAllocation: boolean;
  bookRefToBeAllocated: number;

}
