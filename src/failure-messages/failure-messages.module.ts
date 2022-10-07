import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FailureMessagesController } from './failure-messages.controller';
import { FailureMessagesService } from './failure-messages.service';
import { Message } from './message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [FailureMessagesController],
  providers: [FailureMessagesService],
})
export class FailureMessagesModule {}
