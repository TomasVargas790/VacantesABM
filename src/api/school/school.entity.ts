import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SchoolSpecialty } from '../school-specialty/school-specialty.entity';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: '255',
    nullable: false,
  })
  name!: string;

  @Column({
    type: 'integer',
    name: 'school_number',
    nullable: false,
  })
  schoolNumber!: number;

  @OneToMany(() => SchoolSpecialty, (specialty) => specialty.school)
  specialties: SchoolSpecialty[];

  @Column({
    type: 'integer',
    nullable: false,
  })
  district!: number;

  @Column({
    type: 'varchar',
    name: 'school_core_number',
    length: '15',
    nullable: false,
  })
  schoolCoreNumber!: string;

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
