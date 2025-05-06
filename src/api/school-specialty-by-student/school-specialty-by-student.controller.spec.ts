import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSpecialtyByStudentController } from './school-specialty-by-student.controller';

describe('SchoolSpecialtyByStudentController', () => {
  let controller: SchoolSpecialtyByStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolSpecialtyByStudentController],
    }).compile();

    controller = module.get<SchoolSpecialtyByStudentController>(
      SchoolSpecialtyByStudentController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
