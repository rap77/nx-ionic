import { Lesson } from './models/lesson';
import { DataService } from '@nx-ionic/data';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './models/course';
import { CreateCourseInput } from './dto/create-course.input';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { UpdateLessonInput } from './dto/update-lesson.input';

@Injectable()
export class CourseService {
  private readonly courseIncludes = {
    author: true,
    lessons: true,
  };

  items: Course[] = [
    {
      id: 'intro-to-graphql',
      title: 'introduccion a graphQL',
      lessons: [
        { id: 'lesson-1', title: 'Introduccion al curso', content: 'Hello world' },
        { id: 'lesson-2', title: 'First REal lesson course', content: 'Get busy' },
      ],
    },
    {
      id: 'grapql-forexperts',
      title: 'GraphQL para Expertos',
      lessons: [
        { id: 'lesson-1-course-2', title: 'Introduccion al export curso', content: 'Hello export' },
        { id: 'lesson-2-course-2', title: 'First Real lesson export course', content: 'Get busy export' },
      ],
    },
  ];

  constructor(private readonly data: DataService) {}

  public courses() {
    return this.data.course.findMany({ include: this.courseIncludes });
  }

  public async course(id: number) {
    const found = await this.data.course.findUnique({
      where: { id },
      include: this.courseIncludes,
    });
    if (!found) {
      throw new NotFoundException(`Course with id ${id} not found!`);
    }
    return found;
  }

  public createCourse(/*userId: number,*/ input: CreateCourseInput) {
    return this.data.course.create({
      data: {
        ...input,
        //author: { connect: { id: userId } },
      },
    });
  }

  public async updateCourse(/*userId: number,*/ id: number, input: UpdateCourseInput, lessons?: Lesson[]) {
    const course = await this.course(id);

    return this.data.course.update({
      where: { id: course.id },
      data: { ...input },
    });
  }

  public async deleteCourse(/*userId: number*,*/ id: number) {
    const deleted = await this.data.course.delete({
      where: {
        id,
      },
    });
    return !!deleted;
  }

  public async createLesson(/*userId: number,*/ courseId: number, input: CreateLessonInput) {
    const course = await this.course(courseId);

    return this.data.lesson.create({
      data: {
        course: {
          connect: { id: course.id },
        },
        ...input,
      },
    });
  }

  public async updateLesson(/*userId: number,*/ courseId: number, lessonId: number, input: UpdateLessonInput) {
    return this.data.lesson.update({
      where: { id: lessonId },
      data: { ...input },
    });
  }

  public async deleteLesson(/*userId: number,*/ courseId: number, lessonId: number) {
    // TODO: Check if userId can actually delete this?
    const deleted = await this.data.lesson.delete({ where: { id: lessonId } });

    return !!deleted;
  }
}
