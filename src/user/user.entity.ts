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
export class User {
  @PrimaryGeneratedColumn()
  id: number; // id column for db
  @Column({ default: false })
  admin: boolean; // check if its admin
  @Column() // other columns for user
  email: string;
  @Column()
  @Exclude() // exclude this info with interceptor
  password: string;
  @Column() // other columns for user
  name: string;
  @Column() // other columns for user
  surname: string;
  
  @Column() // other columns for user
  phone: number;
  @CreateDateColumn()
  public registration_date: Date;
  

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
