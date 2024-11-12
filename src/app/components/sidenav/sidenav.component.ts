import { Component, Input, ViewChild } from '@angular/core';
import { MenuItem } from '../../untils/schema';
import {
  MAIN_MENU_ITEMS,
  SECOND_MENU_ITEMS,
  THIRT_MENU_ITEMS,
} from '../../untils/routes';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Input() isOpen = true;
  @ViewChild(ToastComponent) toast!: ToastComponent;

  mainMenuItems: MenuItem[] = MAIN_MENU_ITEMS;
  secondMenuItems: MenuItem[] = SECOND_MENU_ITEMS;
  thirtMenuItems: MenuItem[] = THIRT_MENU_ITEMS;

  constructor(private authService: AuthService, private router: Router) {}

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.authService.logout();

    if (!this.authService.IsLogin()) {
      this.toast.showToast('You have been logged out.', 'success');
      setTimeout(() => {
        this.router.navigate(['/auth']);
      }, 5000);
    } else {
      this.toast.showToast('Failed to log out. Please try again.', 'error');
    }
  }
}
