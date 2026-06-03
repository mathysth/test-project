import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateUserInput } from '@shared/types/user';

export class CreateUserDto implements CreateUserInput {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;
}
