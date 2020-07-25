export enum UserType {
    Member = 'member',
    Admin = 'admin'
}
export class CreateUserDTO {
    email: string;
}