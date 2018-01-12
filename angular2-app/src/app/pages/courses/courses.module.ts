import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Course } from './course/course.component';
import { Toolbox } from './toolbox/toolbox.component';


@NgModule({
    imports: [
        FormsModule, CommonModule
    ],
    declarations: [
      Course,
      Toolbox,
    ],
    exports: [
      Course,
      Toolbox,
  ]

})

export class CoursesModule {}
