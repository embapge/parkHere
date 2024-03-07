import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OutService } from './out.service';
import { CreateOutDto } from './dto/create-out.dto';
import { UpdateOutDto } from './dto/update-out.dto';

@Controller('out')
export class OutController {
  constructor(private readonly outService: OutService) {}

  @Post()
  create(@Body() createOutDto: CreateOutDto) {
    return this.outService.create(createOutDto);
  }

  @Get()
  findAll() {
    return this.outService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.outService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOutDto: UpdateOutDto) {
    return this.outService.update(+id, updateOutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.outService.remove(+id);
  }
}
