import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } })
  }

  async findById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne(id)
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user)
  }
}
