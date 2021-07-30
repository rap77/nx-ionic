import { Module } from '@nestjs/common';
import { CourseResolver } from './resolvers/course.resolver';
import { LessonResolver } from './resolvers/lesson.resolver';
import { CourseService } from './course.service';

@Module({
  controllers: [],
  providers: [CourseResolver, LessonResolver, CourseService],
  exports: [],
})
export class CourseModule {}
