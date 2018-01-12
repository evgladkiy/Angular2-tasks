import { Component } from '@angular/core';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})

export class Toolbox {
    searchValue = '';

    logSearchValue():void {
        console.log(this.searchValue);
    }
}
