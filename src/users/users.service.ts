import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
//import { Kysely } from 'kysely';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    //  private readonly db: Kysely<any>, // Replace 'any' with your database type
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    /*const user = await this.db
      .selectFrom('users')
      .selectAll()
      .where('username', '=', username)
      .where('password', '=', password) // Ensure you hash passwords in production!
      .executeTakeFirst();

    return user ? { userId: user.id, username: user.username } : null; */
    return { userId: 1, username, password };
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
