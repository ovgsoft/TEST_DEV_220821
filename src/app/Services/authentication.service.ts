import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('https://api.toka.com.mx/candidato/api/login/authenticate', { username, password })
          .pipe(map(user => {
                if (user) {
                    localStorage.setItem('TokenInfo', user["Data"]);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('TokenInfo');
    }
}
