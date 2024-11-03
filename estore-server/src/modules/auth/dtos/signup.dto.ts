import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  pin: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  password_confirm: string;
}
