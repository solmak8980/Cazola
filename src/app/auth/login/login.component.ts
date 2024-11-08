import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  Email: string = '';
  Password: string = '';
  loginFailed: boolean = false;
  loginErrorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    const response = await this.authService.login(this.Email, this.Password);

    if (response.success) {
      this.router.navigate(['/admin']);
    } else {
      this.loginFailed = true;
      this.loginErrorMessage = response.message || 'Login failed';
    }
  }
}
