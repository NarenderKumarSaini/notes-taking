import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 512 })
  content: string;
}
