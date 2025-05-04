import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSpecialtiesController } from './school-specialties.controller';

describe('SchoolSpecialtiesController', () => {
  let controller: SchoolSpecialtiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolSpecialtiesController],
    }).compile();

    controller = module.get<SchoolSpecialtiesController>(SchoolSpecialtiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
