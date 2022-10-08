import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum MessageStatus {
  UNRESOLVED = 'UNRESOLVED',
  RESOLVED = 'RESOLVED',
}

@Entity({ name: 'message' })
export class Message {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  label: string;

  @Column()
  textMessage: string;

  @Column({ type: 'timestamp' })
  createdAt: string;

  @Column({
    type: 'enum',
    enum: MessageStatus,
    default: MessageStatus.UNRESOLVED,
  })
  status?: MessageStatus;
}
