import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSpecialtyController } from './school-specialty.controller';

describe('SchoolSpecialtyController', () => {
  let controller: SchoolSpecialtyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolSpecialtyController],
    }).compile();

    controller = module.get<SchoolSpecialtyController>(SchoolSpecialtyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
