import { IsString, IsNotEmpty, IsDate, IsNumberString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class createStudentDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  readonly parentFirstName: string;

  @IsString()
  @IsNotEmpty()
  readonly parentLastName: string;

  @IsString()
  @IsNumberString()
  @IsNotEmpty()
  readonly dni: string;

  @IsDate()
  @IsNotEmpty()
  readonly birthdate: string;
}

export class updateStudentDTO extends PartialType(createStudentDTO) {}
