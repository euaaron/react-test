import { v4 as uuid } from 'uuid'
import { User } from '../model/User'
import database from '@lib/services/database'

export class UserService {
  static async create(user: User): Promise<User> {
    return await database.user.create({
      data: {
        id: user?.id || uuid(),
        username: user.username,
        password: user.password,
      },
    })
  }

  static async get(user: string): Promise<User | null> {
    return await database.user.findUnique({
      where: { username: user },
    })
  }

  static async remove(user: User): Promise<User> {
    return await database.user.delete({
      where: { username: user.username },
    })
  }

  static async listAll(): Promise<User[]> {
    return await database.user.findMany()
  }

  static async listSome(quantity: number): Promise<User[]> {
    return await database.user.findMany({ take: quantity })
  }
}
