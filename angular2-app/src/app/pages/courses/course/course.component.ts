import { Component, Input } from '@angular/core';
import { ModalWindowService } from "../../../shared/services";
import { CourseInterface } from "../../../shared/interfaces";

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
})

export class Course {
    @Input() course: CourseInterface;

    constructor (
        public ModalWindowService: ModalWindowService
    ){}

    formatMinToHourMin(min: number): string {
        const hours = Math.floor(min / 60);
        const minutesRest = min - (hours * 60);

        return `${hours > 0 ? hours + 'h' : ''} ${minutesRest > 0 ? minutesRest + 'min' : ''}`;
    }
}
