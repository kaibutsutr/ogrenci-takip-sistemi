import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  BeforeRemove,
  OneToMany,
} from 'typeorm'; // decorators for typeorm

@Entity() // mark this class as an entity
export class GoogleUser {
  @PrimaryGeneratedColumn()
  id: number; // id column for db

  @Column() // other columns for user
  email: string;

  @Column() // other columns for user
  name: string;

  @AfterInsert()
  insertLog() {
    console.log('Created a new user with id:', this.id);
  }
  @BeforeRemove()
  removeLog() {
    console.log('Deleted user with id:', this.id);
  }
  @AfterUpdate()
  updateLog() {
    console.log('Updated user with id:', this.id);
  }
}
