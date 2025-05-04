import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSpecialtiesByStudentController } from './school-specialties-by-student.controller';

describe('SchoolSpecialtiesByStudentController', () => {
  let controller: SchoolSpecialtiesByStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolSpecialtiesByStudentController],
    }).compile();

    controller = module.get<SchoolSpecialtiesByStudentController>(SchoolSpecialtiesByStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
