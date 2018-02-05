import { Component } from '@angular/core';
import { AuthService } from "./shared/services";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor (public AuthService: AuthService) {}
}
