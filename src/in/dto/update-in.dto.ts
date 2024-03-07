import { PartialType } from '@nestjs/mapped-types';
import { CreateInDto } from './create-in.dto';

export class UpdateInDto extends PartialType(CreateInDto) {}
