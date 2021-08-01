import { DataService } from './data.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [],
  providers: [DataService],
  exports: [],
})
export class DataModule {}
