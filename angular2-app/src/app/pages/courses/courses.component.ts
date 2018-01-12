import { Component } from '@angular/core';
import Course from './interfaces/course';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})

export class Courses {
    courses: Array<Course> = [
                {
                    id: 1,
                    title: 'Video Course 1',
                    creatingDate: new Date(1975, 5, 12),
                    duration: 190,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque possimus vel, quisquam libero vitae ipsa hic beatae veniam voluptatum! Sunt soluta, qui dolorum tempore. Facilis laborum eum fugit voluptatibus ratione!'
                },
                {
                    id: 2,
                    title: 'Video Course 2',
                    creatingDate: new Date(2018, 1, 1 ),
                    duration: 30,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque possimus vel, quisquam libero vitae ipsa hic beatae veniam voluptatum! Sunt soluta, qui dolorum tempore. Facilis laborum eum fugit voluptatibus ratione!'
                },
                {
                    id: 3,
                    title: 'Video Course 3',
                    creatingDate: new Date(2005, 9, 11),
                    duration: 259,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque possimus vel, quisquam libero vitae ipsa hic beatae veniam voluptatum! Sunt soluta, qui dolorum tempore. Facilis laborum eum fugit voluptatibus ratione!'
                },
                {
                    id: 4,
                    title: 'Video Course 4',
                    creatingDate: new Date(2002, 2, 20),
                    duration: 132,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque possimus vel, quisquam libero vitae ipsa hic beatae veniam voluptatum! Sunt soluta, qui dolorum tempore. Facilis laborum eum fugit voluptatibus ratione!'
                },
                {
                    id: 5,
                    title: 'Video Course 5',
                    creatingDate: new Date(1994, 7, 29),
                    duration: 42,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque possimus vel, quisquam libero vitae ipsa hic beatae veniam voluptatum! Sunt soluta, qui dolorum tempore. Facilis laborum eum fugit voluptatibus ratione!'
                },
            ];

            logDeletedCourse(course:Course):void {
                console.log(`Deleted course id: ${course.id}`);
            };
}
