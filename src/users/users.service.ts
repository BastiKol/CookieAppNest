import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  getUsers(): string {
    return 'Test';
  }
  async createUser(user: CreateUserDto): Promise<void> {
    await this.prismaService.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
      },
    });
  }
}
