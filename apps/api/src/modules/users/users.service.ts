import { Injectable } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput, User } from '@shared/types/user';

@Injectable()
export class UsersService {
  private users: Map<string, User> = new Map();
  private nextId = 1;

  create(input: CreateUserInput): User {
    const user: User = {
      id: String(this.nextId++),
      ...input,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.set(user.id, user);
    return user;
  }

  findAll(): User[] {
    return Array.from(this.users.values());
  }

  findById(id: string): User | null {
    return this.users.get(id) || null;
  }

  update(id: string, input: UpdateUserInput): User | null {
    const user = this.users.get(id);
    if (!user) return null;

    const updated: User = {
      ...user,
      ...input,
      updatedAt: new Date(),
    };
    this.users.set(id, updated);
    return updated;
  }

  delete(id: string): boolean {
    return this.users.delete(id);
  }
}
