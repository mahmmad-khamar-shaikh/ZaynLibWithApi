import { IUser } from './user.interface';

export interface IBook {
    Id: number;
    Title: string;
    SubTitle?: string;
    Summary?: string;
    Owner: IUser;
    IsAvailable: boolean;
    Assignee: string;
    Author: string;

}

