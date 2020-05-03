import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../../_utils/my-error-state-matcher';
import {error} from '@angular/compiler/src/util';
import {AlertService} from '../../_components_core/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  isSubmitted = false;
  matcher: MyErrorStateMatcher;
  private email: string;
  private password: string;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern, Validators.min(6)]]
    });
    this.matcher = new MyErrorStateMatcher();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  getErrorMessageEmail() {
    const email = this.f.email;
    if (email.hasError('required')) {
      return 'Bạn phải nhập email';
    }
    return email.hasError('email') ? 'Sai dịnh dạng mail' : '';
  }

  getErrorMessagePassword() {
    const password = this.f.password;
    if (password.hasError('required')) {
      return 'Bạn phải nhập mật khẩu';
    }
    return password.hasError('min') ? 'Mật khẩu phải dài hơn 6 kí tự' : '';
  }

  onSubmit() {
    this.isSubmitted = true;
    this.email = this.f.email.value;
    this.password = this.f.password.value;
    if (this.email.trim().length <= 0 && this.password.trim().length <= 6) {
      return;
    }
    this.authService.login(this.email, this.password).subscribe(
      data => {
        this.authService._setSession(data);
        this.router.navigate(['/home']);
      },
      error1 => {
        this.alertService.onError(error1);
      }
    );
  }
}
