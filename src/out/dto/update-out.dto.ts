import { PartialType } from '@nestjs/mapped-types';
import { CreateOutDto } from './create-out.dto';

export class UpdateOutDto extends PartialType(CreateOutDto) {}
