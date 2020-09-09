import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserInfo(): User {
    return this.currentUserSubject.value;
  }

  // tslint:disable-next-line:typedef
  login(email: string, password: string) {
    return this.http.post<any>(`${environment.STORY_SERVICE}/auth`, {email, password})
      .pipe(map(res => {
        // Store user details and jwt token in local storage to keep user logged in between page refresh
        if (res.status === 'success') {
          localStorage.setItem('TOKEN', res.result.token);
          localStorage.setItem('currentUser', JSON.stringify(res.result.info));
          this.currentUserSubject.next(res.result.info);
          return res.result.info;
        }
      }));
  }

  // tslint:disable-next-line:typedef
  logout() {
    // Remove user from local storage to log user out
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  // tslint:disable-next-line:typedef
  isLoggedIn() {
    return localStorage.getItem('TOKEN') !== null;
  }
}
