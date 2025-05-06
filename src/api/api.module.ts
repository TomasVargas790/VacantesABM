import { Module } from '@nestjs/common';
import { SchoolsController } from './school/school.controller';
import { StudentsController } from './student/student.controller';
import { SchoolSpecialtyController } from './school-specialty/school-specialty.controller';
import { SchoolSpecialtyByStudentController } from './school-specialty-by-student/school-specialty-by-student.controller';
import { SchoolSpecialtyByStudentService } from './school-specialty-by-student/school-specialty-by-student.service';
import { SchoolService } from './school/school.service';
import { StudentService } from './student/student.service';
import { SchoolSpecialtyService } from './school-specialty/school-specialty.service';
import { School } from './school/school.entity';
import { SchoolSpecialty } from './school-specialty/school-specialty.entity';
import { SchoolSpecialtyByStudent } from './school-specialty-by-student/school-specialty-by-student.entity';
import { Student } from './student/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      School,
      SchoolSpecialty,
      SchoolSpecialtyByStudent,
      Student,
    ]),
  ],
  controllers: [
    SchoolsController,
    StudentsController,
    SchoolSpecialtyController,
    SchoolSpecialtyByStudentController,
  ],
  providers: [
    SchoolService,
    StudentService,
    SchoolSpecialtyService,
    SchoolSpecialtyByStudentService,
  ],
})
export class ApiModule {}
