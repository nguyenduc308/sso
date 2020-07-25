import { IsNotEmpty, IsEmail, IsEmpty, Validate } from 'class-validator';
import { IsUniqueEmail } from '../validator/isUniqueEmail';
export enum UserType {
    Member = 'member',
    Admin = 'admin'
}
export class CreateUserDTO {
    @IsNotEmpty()
    @IsEmail()
    @Validate(IsUniqueEmail, {message: 'Email already exist'})
    email: string;

    @IsEmpty()
    userType: UserType;
}