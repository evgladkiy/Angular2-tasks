import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})

export class Course {
    @Input() course: Course;
    @Output('delete') logDeletedCourse = new EventEmitter();

    deleteCourse(course: Course): void {
        this.logDeletedCourse.emit(course);
    }

    formatMinToHourMin(min: number): string {
        const hours = Math.floor(min / 60);
        const minutesRest = min - (hours * 60);

        return `${hours > 0 ? hours + 'h' : ''} ${minutesRest > 0 ? minutesRest + 'min' : ''}`;
    }
}
