//import { DataService } from '@beehive/data'
import { Injectable, NotFoundException } from '@nestjs/common'
import { Course } from './models/course'
import { CreateCourseInput } from './dto/create-course.input'
import { CreateLessonInput } from './dto/create-lesson.input'
import { UpdateCourseInput } from './dto/update-course.input'
import { UpdateLessonInput } from './dto/update-lesson.input'

@Injectable()
export class CourseService {
  private readonly courseIncludes = {
    author: true,
    lessons: true,
  }

  items: Course[] = [
    {id:'intro-to-grapql', title:'introduccion a graphQL'},
    {id:'grapql-forexperts', title:'GraphQL para Expertos'},
  ]
 // constructor(private readonly data: DataService) {}
  public courses() {
    return this.items
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
    return this.items.find(item => item.id === id)
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
      ...input
    }
    this.items.push(newCourse)
    return newCourse
  }

  public async updateCourse(/*userId: number,*/ id: string /*number*/, input: UpdateCourseInput) {
    const course = await this.course(id)

    const updated: Course = {
      ...course,
      ...input,
    }
    this.items = this.items.map(item => {
      if (item.id === id) {
        return updated
      }
      return item
    })

    return updated
   /* return this.data.course.update({
      where: { id: course.id },
      data: { ...input },
    })*/
  }

  public async deleteCourse(/*userId: number*,*/ id: string/*number*/) {
    /*const deleted = await this.data.course.delete({
      where: {
        id,
      },
    })
    return !!deleted*/
    const course = this.course(id)
    if (!course){
      return false
    }
    this.items = this.items.filter(item => item.id !== id)
    return true
  }

  public async createLesson(/*userId: number,*/ courseId: string/*number*/, input: CreateLessonInput) {
    const course = await this.course(courseId)

    return this.data.lesson.create({
      data: {
        course: {
          connect: { id: course.id },
        },
        ...input,
      },
    })
  }

  public updateLesson(userId: number, lessonId: number, input: UpdateLessonInput) {
    return this.data.lesson.update({
      where: { id: lessonId },
      data: { ...input },
    })
  }

  public async deleteLesson(userId: number, lessonId: number) {
    // TODO: Check if userId can actually delete this?
    const deleted = await this.data.lesson.delete({ where: { id: lessonId } })

    return !!deleted
  }

}
