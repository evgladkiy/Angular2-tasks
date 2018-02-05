import { Component, OnInit } from '@angular/core';

import { CoursesService, ModalWindowService } from "../../shared/services";
import  { CourseInterface }  from "../../shared/interfaces";

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})

export class Courses implements OnInit {
    public courses: CourseInterface[];

    constructor (
        private CoursesService: CoursesService,
        public ModalWindowService: ModalWindowService
    ){}

    ngOnInit(): void {
        this.courses = this.CoursesService.getCourses();
    }
}
