import { Module } from '@nestjs/common';
import { OutService } from './out.service';
import { OutController } from './out.controller';

@Module({
  controllers: [OutController],
  providers: [OutService],
})
export class OutModule {}
