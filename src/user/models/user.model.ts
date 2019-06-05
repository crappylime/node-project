export enum UserRole {
    ADMIN = 'admin',
    ROOT = 'root',
}
export class UserModel {
    id?: number;
    name: string;
    email?: string;
    password?: string;
    roles?: UserRole[];
}