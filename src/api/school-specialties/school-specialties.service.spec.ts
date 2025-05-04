import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSpecialtiesService } from './school-specialties.service';

describe('SchoolSpecialtiesService', () => {
  let service: SchoolSpecialtiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolSpecialtiesService],
    }).compile();

    service = module.get<SchoolSpecialtiesService>(SchoolSpecialtiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
