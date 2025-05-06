import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateSchoolDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  schoolNumber!: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  district!: number;

  @IsString()
  @IsNotEmpty()
  schoolCoreNumber!: string;
}

export class updateSchoolDTO extends PartialType(CreateSchoolDTO) {}
