import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SchoolSpecialty } from '../school-specialty/school-specialty.entity';
import { Student } from '../student/student.entity';

@Entity()
export class SchoolSpecialtyByStudent {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => SchoolSpecialty, (specialty) => specialty.applications)
  @JoinColumn({ name: 'school_id' })
  specialty: SchoolSpecialty;

  @ManyToOne(() => Student, (student) => student.applications)
  @JoinColumn({ name: 'student_id' })
  student: Student;

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
