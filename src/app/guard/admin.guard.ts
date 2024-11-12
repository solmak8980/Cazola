import { Injectable } from '@angular/core';
import { CanActivate, IsActiveMatchOptions, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('token'); 
    if (isLoggedIn) {
      this.router.navigate(['/admin']);
      return false;
    }
    return true;
  }
}
