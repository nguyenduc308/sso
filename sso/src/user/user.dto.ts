import { isNotEmpty, IsNotEmpty, IsEmail, Min, MinLength } from 'class-validator'
import { IsMatch } from 'src/auth/validator/is-match.decorator';
export class CreateUserDTO {
  @IsNotEmpty()
  @IsEmail()
  //unique
  email: string;

  // not empty
  // min: 6 chars
  @IsNotEmpty() // strategy local
  @MinLength(6)
  password?: string;

  // not empty
  // match
  @IsNotEmpty()
  @IsMatch('password', {message: 'Confirm password should match'})
  password2?: string;

  avatarUrl?: string
  bio?: string;
  fullName?: string;
}