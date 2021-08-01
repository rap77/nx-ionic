import { DataModule } from '@nx-ionic/data';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '@nx-ionic/core';
import { CourseModule } from '@nx-ionic/course';

@Module({
  imports: [CoreModule, CourseModule,DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
