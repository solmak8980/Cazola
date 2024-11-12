import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  // standalone: true,
  // imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  @Input() message = 'This is a toast message!';
  @Input() type: 'success' | 'error' = 'success';

  isVisible = false;

  showToast(message: string, type: 'success' | 'error' = 'success') {
    this.message = message;
    this.type = type;
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, 5000); 
  }
}
