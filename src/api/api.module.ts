import { Module } from '@nestjs/common';
import { SchoolsController } from './schools/schools.controller';
import { StudentsController } from './students/students.controller';
import { SchoolSpecialtiesController } from './school-specialties/school-specialties.controller';
import { SchoolSpecialtiesByStudentController } from './school-specialties-by-student/school-specialties-by-student.controller';
import { SchoolSpecialtiesByStudentService } from './school-specialties-by-student/school-specialties-by-student.service';
import { SchoolsService } from './schools/schools.service';
import { StudentsService } from './students/students.service';
import { SchoolSpecialtiesService } from './school-specialties/school-specialties.service';

@Module({
  controllers: [
    SchoolsController,
    StudentsController,
    SchoolSpecialtiesController,
    SchoolSpecialtiesByStudentController,
  ],
  providers: [
    SchoolsService,
    StudentsService,
    SchoolSpecialtiesService,
    SchoolSpecialtiesByStudentService,
  ],
})
export class ApiModule {}
