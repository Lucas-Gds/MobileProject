import { User } from '../models/user';
export class Comments {
    comment: string;
    IdComment: string;
    idtopic: string;
    idUser: string;
    user: User;
    date: Date;
}
