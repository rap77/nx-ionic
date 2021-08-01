import { Module } from '@nestjs/common';
import { CourseResolver } from './resolvers/course.resolver';
import { LessonResolver } from './resolvers/lesson.resolver';
import { CourseService } from './course.service';
import { DataService } from '@nx-ionic/data';

@Module({
  controllers: [],
  providers: [CourseResolver, LessonResolver, CourseService, DataService],
  exports: [],
})
export class CourseModule {}
