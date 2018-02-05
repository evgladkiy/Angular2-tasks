import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services";

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css'],
})

export class AppHeader implements OnInit {
    public isUserAuthenticated: boolean;
    public userLogin: string;

    constructor (
        private AuthService: AuthService
    ){}

    ngOnInit(): void {
        this.isUserAuthenticated = this.AuthService.isAuthenticated();
        this.userLogin = this.AuthService.getUserInfo();
    }
}
