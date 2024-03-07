import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InService } from './in.service';
import { CreateInDto } from './dto/create-in.dto';
import { UpdateInDto } from './dto/update-in.dto';

@Controller('in')
export class InController {
  constructor(private readonly inService: InService) {}

  @Post()
  create(@Body() createInDto: CreateInDto) {
    return this.inService.create(createInDto);
  }

  @Get()
  findAll() {
    return this.inService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInDto: UpdateInDto) {
    return this.inService.update(+id, updateInDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inService.remove(+id);
  }
}
