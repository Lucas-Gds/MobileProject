import { User } from 'src/app/models/user'
export class Topic {
    title: string;
    active: boolean;
    topicId: string;
    content: string;
    date: Date;
    idUser: string;
    UsercreateTopic: User;
}
