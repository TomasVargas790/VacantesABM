import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { School } from '../school/school.entity';
import { SchoolSpecialtyByStudent } from '../school-specialty-by-student/school-specialty-by-student.entity';

@Entity()
export class SchoolSpecialty {
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
    nullable: false,
  })
  vacancies!: number;

  @ManyToOne(() => School, (school) => school.specialties)
  @JoinColumn({ name: 'school_id' })
  school!: School;

  @OneToMany(
    () => SchoolSpecialtyByStudent,
    (applications) => applications.specialty,
  )
  applications!: SchoolSpecialtyByStudent[];

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
