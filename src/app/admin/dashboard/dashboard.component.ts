import { Component, ViewChild } from '@angular/core';
import { ToastComponent } from '../../components/toast/toast.component';

@Component({
  selector: 'app-dashboard',
  // standalone: true,
  // imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  @ViewChild('toast') toast!: ToastComponent;

  showSuccessToast() {
    this.toast.showToast('Operation successful!', 'success');
  }

  showErrorToast() {
    this.toast.showToast('Something went wrong!', 'error');
  }
}
