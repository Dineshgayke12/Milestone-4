import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  @Input() notificationTitle: string = 'Notification';
  @Input() notificationMessage: string = 'You have a new notification!';
  showNotification: boolean = true;

  closeNotification() {
    this.showNotification = false;
  }
}
