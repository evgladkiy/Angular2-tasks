import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoursesService, ModalWindowService, AuthService } from "./shared/services";

import { CoursesModule, Courses } from './pages/courses';
import { LoginPageModule, LoginPage } from "./pages/loginPage/";

import { AppComponent } from './app.component';
import { AppHeader, AppFooter } from './shared/components/';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CoursesModule,
        LoginPageModule,
    ],
    declarations: [
        AppComponent,
        Courses,
        LoginPage,
        AppHeader,
        AppFooter,
    ],
    providers: [
        CoursesService,
        ModalWindowService,
        AuthService,
    ],
    bootstrap: [ AppComponent ],
})

export class AppModule { }
