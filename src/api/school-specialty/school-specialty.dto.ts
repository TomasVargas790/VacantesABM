import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateSchoolSpecialtyDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @IsNotEmpty()
  vacancies!: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  schoolId!: number;
}

export class updateSchoolSpecialtyDTO extends PartialType(
  CreateSchoolSpecialtyDTO,
) {}
