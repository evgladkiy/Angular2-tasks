import { Injectable } from "@angular/core";

import { CourseInterface } from "../interfaces";
import { CoursesService } from "./courses.service";

@Injectable()
export class  ModalWindowService {
    public shouldShowModal: boolean =  false ;
    public courseToDelete: CourseInterface = null;

    constructor ( private CoursesService: CoursesService) {}

    showModal(course: CourseInterface):void {
        this.shouldShowModal = true;
        this.courseToDelete = course;
    }

    hideModal(shouldDeleteCourse:boolean):void {
        if (shouldDeleteCourse) {
            const courseId: number = this.courseToDelete.id;
            this.CoursesService.removeCourse(courseId);
            this.courseToDelete = null;
            console.log(`Course id: ${courseId} was deleted`);
        }

        this.shouldShowModal = false;
    }
}