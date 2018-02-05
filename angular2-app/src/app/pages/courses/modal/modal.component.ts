import { Component, OnInit } from '@angular/core';
import { ModalWindowService } from "../../../shared/services";
import { CourseInterface } from "../../../shared/interfaces";

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})

export class Modal implements OnInit {
    public courseToDelete: CourseInterface;
    constructor (
        private ModalWindowService: ModalWindowService
    ){}

    ngOnInit(): void {
        this.courseToDelete = this.ModalWindowService.courseToDelete;
    }
}
