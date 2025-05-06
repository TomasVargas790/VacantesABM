import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSpecialtyService } from './school-specialty.service';

describe('SchoolSpecialtyService', () => {
  let service: SchoolSpecialtyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolSpecialtyService],
    }).compile();

    service = module.get<SchoolSpecialtyService>(SchoolSpecialtyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
