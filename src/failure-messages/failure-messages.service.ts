import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './create-message.dto';
import { Message } from './message.entity';

@Injectable()
export class FailureMessagesService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
  ) {}
  async createMessage(input: CreateMessageDto) {
    try {
      return await this.messageRepository.save(input);
    } catch (err) {
      return err;
    }
  }

  async findAll() {
    return await this.messageRepository.find();
  }
}
