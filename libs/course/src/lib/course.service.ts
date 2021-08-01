import { Lesson } from './models/lesson';
//import { DataService } from '@beehive/data'
import { Injectable } from '@nestjs/common';
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
  // constructor(private readonly data: DataService) {}
  public courses() {
    return this.items;
    // return this.data.course.findMany({ include: this.courseIncludes })
  }

  public async course(id: string /*number*/) {
    /*  const found = await this.data.course.findOne({
      where: { id },
      include: this.courseIncludes,
    })
    if (!found) {
      throw new NotFoundException(`Course with id ${id} not found!`)
    }
    return found
    */
    return this.items.find((item) => item.id === id);
  }

  public createCourse(/*userId: number,*/ input: CreateCourseInput) {
    /*return this.data.course.create({
      data: {
        ...input,
        author: { connect: { id: userId } },
      },
    })*/
    const newCourse: Course = {
      id: Date.now().toString(),
      ...input,
    };
    this.items.push(newCourse);
    return newCourse;
  }

  public async updateCourse(/*userId: number,*/ id: string /*number*/, input: UpdateCourseInput, lessons?: Lesson[]) {
    const course = await this.course(id);

    const updated: Course = {
      ...course,
      ...input,
      lessons: lessons ? lessons : course.lessons,
    };
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return updated;
      }
      return item;
    });

    return updated;
    /* return this.data.course.update({
      where: { id: course.id },
      data: { ...input },
    })*/
  }

  public async deleteCourse(/*userId: number*,*/ id: string /*number*/) {
    /*const deleted = await this.data.course.delete({
      where: {
        id,
      },
    })
    return !!deleted*/
    const course = this.course(id);
    if (!course) {
      return false;
    }
    this.items = this.items.filter((item) => item.id !== id);
    return true;
  }

  public async createLesson(/*userId: number,*/ courseId: string /*number*/, input: CreateLessonInput) {
    const course = await this.course(courseId);

    /* return this.data.lesson.create({
      data: {
        course: {
          connect: { id: course.id },
        },
        ...input,
      },
    })*/
    const newLesson: Lesson = {
      id: Date.now().toString(),
      ...input,
    };
    this.updateCourse(courseId, {}, [...course.lessons, newLesson]);

    return newLesson;
  }

  public async updateLesson(
    /*userId: number,*/ courseId: string,
    lessonId: string /*number*/,
    input: UpdateLessonInput,
  ) {
    /* return this.data.lesson.update({
      where: { id: lessonId },
      data: { ...input },
    })*/
    const course = this.course(courseId);
    const lesson = (await course).lessons.find((item) => item.id === lessonId);

    const updated: Lesson = {
      ...lesson,
      ...input,
    };

    (await course).lessons = (await course).lessons.map((item) => {
      if (item.id === lessonId) {
        return updated;
      }
      return item;
    });

    return updated;
  }

  public async deleteLesson(/*userId: number,*/ courseId: string, lessonId: string /*number*/) {
    // TODO: Check if userId can actually delete this?
    /*    const deleted = await this.data.lesson.delete({ where: { id: lessonId } })

    return !!deleted*/
    const course = this.course(courseId);
    if (!course) {
      return false;
    }
    const lesson = (await course).lessons.find((item) => item.id === lessonId);
    if (!lesson) {
      return false;
    }
    (await course).lessons = (await course).lessons.filter((item) => item.id !== lessonId);
    return true;
  }
}
