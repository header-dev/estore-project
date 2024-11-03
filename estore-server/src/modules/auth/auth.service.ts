import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { QueryFailedError } from 'typeorm';
import { User } from '../users/user';
import { SignUpDto } from './dtos/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validate(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findOne({
      where: { email: email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await user.validatePassword(pass);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.userId, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private handleError(error: any): never {
    if (error instanceof QueryFailedError) {
      if (error.message.includes('duplicate key value')) {
        throw new ConflictException('Email already exists');
      }
    }
    throw new InternalServerErrorException(error.message, { cause: error });
  }

  async register(body: SignUpDto): Promise<{ access_token: string }> {
    try {
      if (body.password !== body.password_confirm) {
        throw new Error('Passwords do not match');
      }

      const newUser = new User();
      newUser.email = body.email;
      newUser.username = body.username;
      newUser.password = body.password;
      newUser.firstName = body.firstName;
      newUser.lastName = body.lastName;
      newUser.address = body.address;
      newUser.city = body.city;
      newUser.state = body.state;
      newUser.pin = body.pin;

      const user = await this.userService.save(newUser);
      const payload = { sub: user.userId, username: user.username };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      this.handleError(error);
    }
  }
}
