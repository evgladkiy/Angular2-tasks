import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


import { CoursesModule } from './pages/courses/courses.module';
import { Courses } from './pages/courses/courses.component';

import  { AppFooter } from './shared/components/footer/app-footer.component';
import  { AppHeader } from './shared/components/header/app-header.component';

import { AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModule, CoursesModule,
  ],
  declarations: [
    AppComponent, Courses, AppHeader, AppFooter
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
