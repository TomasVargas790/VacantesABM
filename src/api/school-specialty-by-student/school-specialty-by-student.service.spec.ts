import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSpecialtyByStudentService } from './school-specialty-by-student.service';

describe('SchoolSpecialtyByStudentService', () => {
  let service: SchoolSpecialtyByStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolSpecialtyByStudentService],
    }).compile();

    service = module.get<SchoolSpecialtyByStudentService>(SchoolSpecialtyByStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
