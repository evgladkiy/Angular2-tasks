import { Injectable } from "@angular/core";

import { CourseInterface } from "../interfaces";
import courses from "./initialData/courses";

@Injectable()
export class  CoursesService {
    courses: Array<CourseInterface> = courses;

    getCourses(): CourseInterface[] {
        return this.courses;
    }

    removeCourse(id: number): void {
        const index: number = this.courses.findIndex(course => course.id === id);

        this.courses.splice(index, 1);
    }

    createCourse(id: number, title: string, duration:number, description: string, author: string): void {
        const newCourse: CourseInterface = {
            id,
            title,
            duration,
            description,
            author,
            creatingDate: new Date(),
        };

        this.courses.push(newCourse);
    }
}