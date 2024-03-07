import { Module } from '@nestjs/common';
import { InService } from './in.service';
import { InController } from './in.controller';

@Module({
  controllers: [InController],
  providers: [InService],
})
export class InModule {}
