import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone) { }

  showSuccess(message: string): void {
    // Had an issue with the snackbar being ran outside of angular's zone.
    this.zone.run(() => {
      this.snackBar.open(message);
    });
  }

  showError(message: string): void {
     
    const processedMessage = this.processMessageText(message);
    this.zone.run(() => {
      const config = new MatSnackBarConfig();
      config.data = processedMessage;
      config.verticalPosition = 'top';
      // config.direction = 'ltr';
      config.announcementMessage = 'SERVER ERROR';
      config.horizontalPosition = 'center';
      config.panelClass = ['error'];
      this.snackBar.openFromComponent(SnackbarComponent, config);
    });
  }

  processMessageText(message: any) {
    const displayMessage = 'ОШИБКА СЕРВЕРА';
    if (message.includes('400')) {
      // ANALYZE MESSAGE AND DO SMTH
    }
    return displayMessage;
  }
}
