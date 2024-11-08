import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://be.astrafs.shop/api/auth/login';

  constructor(private http: HttpClient) {}

  async login(Email: string, Password: string): Promise<any> {
    const body = { Email, Password };
    try {
      const response = await firstValueFrom(this.http.post<any>(this.apiUrl, body));

      if (response && response.access_token) {
        localStorage.setItem('token', response.access_token);
        return { success: true, message: 'Login successful' };
      } else {
        return { success: false, message: 'Invalid email or password' };
      }
    } catch (error) {
      return { success: false, message: 'An error occurred during login. Please try again later.' };
    }
  }

  IsLogin(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
