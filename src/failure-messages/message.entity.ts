import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'message' })
export class Message {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  label: string;

  @Column()
  textMessage: string;
}
