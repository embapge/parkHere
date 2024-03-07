import { Injectable } from '@nestjs/common';
import { CreateOutDto } from './dto/create-out.dto';
import { UpdateOutDto } from './dto/update-out.dto';

@Injectable()
export class OutService {
  create(createOutDto: CreateOutDto) {
    return 'This action adds a new out';
  }

  findAll() {
    return `This action returns all out`;
  }

  findOne(id: number) {
    return `This action returns a #${id} out`;
  }

  update(id: number, updateOutDto: UpdateOutDto) {
    return `This action updates a #${id} out`;
  }

  remove(id: number) {
    return `This action removes a #${id} out`;
  }
}
