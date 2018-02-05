import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'toolbox',
    templateUrl: './toolbox.component.html',
    styleUrls: ['./toolbox.component.css'],
})

export class Toolbox implements OnInit {
    public searchValue: string;

    ngOnInit(): void {
        this.searchValue = '';
    }

    logSearchValue():void {
        console.log(this.searchValue);
    }
}
