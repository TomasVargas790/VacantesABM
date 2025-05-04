import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSpecialtiesByStudentService } from './school-specialties-by-student.service';

describe('SchoolSpecialtiesByStudentService', () => {
  let service: SchoolSpecialtiesByStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolSpecialtiesByStudentService],
    }).compile();

    service = module.get<SchoolSpecialtiesByStudentService>(SchoolSpecialtiesByStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
