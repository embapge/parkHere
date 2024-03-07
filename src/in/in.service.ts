import { Injectable } from '@nestjs/common';
import { CreateInDto } from './dto/create-in.dto';
import { UpdateInDto } from './dto/update-in.dto';

@Injectable()
export class InService {
  create(createInDto: CreateInDto) {
    return 'This action adds a new in';
  }

  findAll() {
    return `This action returns all in`;
  }

  findOne(id: number) {
    return `This action returns a #${id} in`;
  }

  update(id: number, updateInDto: UpdateInDto) {
    return `This action updates a #${id} in`;
  }

  remove(id: number) {
    return `This action removes a #${id} in`;
  }
}
