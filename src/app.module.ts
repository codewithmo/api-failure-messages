import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FailureMessagesModule } from './failure-messages/failure-messages.module';

@Module({
  imports: [FailureMessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
