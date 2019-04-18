import { IGroup } from './group.interface';
import { IRoles } from './roles.interface';


export interface IUser {
    Id?: string;
    Name: string;
    Group?: IGroup;
    role?: IRoles;
    Email: string;
    FBUserId?: string;
}
