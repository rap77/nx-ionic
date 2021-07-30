import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '@nx-ionic/core';
import { CourseModule } from '@nx-ionic/course';

@Module({
  imports: [CoreModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
