import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services";

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})

export class LoginPage implements OnInit {
    public login: string;
    public password: string;

    constructor (
        private AuthService: AuthService
    ){}

    ngOnInit(): void {
        this.login = '';
        this.password = '';
    }

    submitHandler() {
        const login: string = this.login.trim();
        const password: string = this.password.trim();

        if (login !== '' && password !== '') {
            this.AuthService.login(login, password);
            this.login = '';
            this.password = '';
        }
    }
}
