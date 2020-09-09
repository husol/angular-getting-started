import {Component} from '@angular/core';
import {User} from './models/user';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Husol - Angular Getting Started';
  currentUser: User;

  constructor(
    private router: Router,
    public authService: AuthService
  ) {
    this.authService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/sign-in');
  }
}
