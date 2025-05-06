import { Controller, Get, Inject } from '@nestjs/common';
import { SchoolService } from './school.service';

@Controller('school')
export class SchoolsController {
  constructor(@Inject(SchoolService) private schoolService: SchoolService) {}

  @Get()
  getAll() {
    return this.schoolService.getAll();
  }
}
