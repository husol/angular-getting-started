import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {first} from 'rxjs/operators';
import {ToastNotificationService} from '../../services/toast-notification.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;
  return = '';

  constructor(
    private toast: ToastNotificationService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    // Redirect to home if already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Get the query params
    this.route.queryParams
      .subscribe(params => this.return = params.return || '/admin');
  }

  // tslint:disable-next-line:typedef
  get formControls() {
    return this.authForm.controls;
  }

  // tslint:disable-next-line:typedef
  signIn() {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }

    this.authService.login(this.authForm.value.email, this.authForm.value.password).pipe(first())
      .subscribe(
        () => {
          this.ngOnInit();
          this.router.navigateByUrl(this.return);
        },
        error => {
          this.toast.error(error);
        });
  }
}
