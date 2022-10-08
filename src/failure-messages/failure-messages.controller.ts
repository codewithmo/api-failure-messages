import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './create-message.dto';
import { FailureMessagesService } from './failure-messages.service';

@Controller('failure-messages')
export class FailureMessagesController {
  constructor(private readonly failureMessageService: FailureMessagesService) {}

  @Post()
  async create(@Body() inputDto: CreateMessageDto) {
    return await this.failureMessageService.createMessage(inputDto);
  }

  @Get()
  async findAll() {
    return await this.failureMessageService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.failureMessageService.getById(id);
  }
}
