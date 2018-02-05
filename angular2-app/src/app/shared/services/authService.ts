import { Injectable } from "@angular/core";

import { UserInterface } from "../interfaces/UserInterface";

@Injectable()
export class  AuthService {
    private user: UserInterface = JSON.parse(localStorage.getItem('user')) || {
        login: '',
        password: '',
    };

    getUserInfo(): string {
        return this.user.login;
    }

    isAuthenticated(): boolean {
        return Boolean(this.user.login);
    }

    login(login: string, password: string): void {
        this.user = {
            login,
            password,
        };

        window.localStorage.setItem('user', JSON.stringify(this.user));
    }

    logout(): void {
        console.log(`User ${this.user.login} logged out`);
        this.user.login = '';
        this.user.password = '';
        window.localStorage.removeItem('user');
    }
}