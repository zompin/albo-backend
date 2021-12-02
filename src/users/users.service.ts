import { Injectable } from '@nestjs/common';

export interface User {
  _id: string;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      _id: '1',
      username: 'test',
      password: 'test',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((item) => item.username === username);
  }
}
