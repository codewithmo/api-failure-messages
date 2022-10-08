import { MessageStatus } from "./message.entity";

export class CreateMessageDto {
    label: string;
    textMessage: string;
    status?: MessageStatus;
  }
  