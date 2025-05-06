import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from './school.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateSchoolDTO, updateSchoolDTO } from './school.dto';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School) private schoolRepository: Repository<School>,
  ) {}

  getAll() {
    return this.schoolRepository.find();
  }

  getById(id: number) {
    return this.schoolRepository.findBy({ id });
  }

  getWithPagination(page: number, limit: number) {
    return this.schoolRepository.find({ skip: page * limit, take: limit });
  }

  getWhere(where: FindOptionsWhere<School>) {
    return this.schoolRepository.find({ where });
  }

  create(data: CreateSchoolDTO) {
    return this.schoolRepository.insert(data);
  }

  update(id: number, data: updateSchoolDTO) {
    return this.schoolRepository.update(id, data);
  }

  delete(id: number) {
    return this.schoolRepository.delete(id);
  }
}
