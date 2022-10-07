import { Module } from '@nestjs/common';
import { FailureMessagesController } from './failure-messages.controller';
import { FailureMessagesService } from './failure-messages.service';

@Module({
  controllers: [FailureMessagesController],
  providers: [FailureMessagesService]
})
export class FailureMessagesModule {}
