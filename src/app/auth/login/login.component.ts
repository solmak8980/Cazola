import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastComponentLTS } from '../../components/toast/LTS/toast.component';

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

  @ViewChild(ToastComponentLTS) toast!: ToastComponentLTS;

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    const response = await this.authService.login(this.Email, this.Password);
  
    if (response.success) {
      this.toast.showToast('Login successful.', 'success');
      setTimeout(() => {
        this.router.navigate(['/admin']);
      }, 3000); // Optional delay before redirecting
    } else {
      this.loginFailed = true;
      this.loginErrorMessage = response.message || 'Login failed';
      this.toast.showToast(this.loginErrorMessage, 'error');
    }
  }
  
}
