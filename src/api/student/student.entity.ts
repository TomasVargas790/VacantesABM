import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SchoolSpecialtyByStudent } from '../school-specialty-by-student/school-specialty-by-student.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    name: 'first_name',
    length: '110',
    nullable: false,
  })
  firstName!: string;

  @Column({
    type: 'varchar',
    name: 'last_name',
    length: '110',
    nullable: false,
  })
  lastName!: string;

  @Column({ type: 'varchar', length: '8', unique: true, nullable: false })
  dni!: string;

  @Column({
    type: 'varchar',
    name: 'parent_first_name',
    length: '8',
    unique: true,
    nullable: false,
  })
  parentFirstName!: string;

  @Column({
    type: 'varchar',
    name: 'parent_last_name',
    length: '8',
    unique: true,
    nullable: false,
  })
  parentLastName!: string;

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  birthdate!: Date;

  @OneToMany(
    () => SchoolSpecialtyByStudent,
    (application) => application.student,
  )
  applications: SchoolSpecialtyByStudent[];

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  updatedAt!: Date;
}
