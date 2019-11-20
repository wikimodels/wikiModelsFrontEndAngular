import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorInterceptor } from './server-error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandler } from './global-error-handler';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SnackbarComponent } from './snackbar/snackbar.component';
import { SlackService } from './services/slack.service';

@NgModule({
  declarations: [
    SnackbarComponent
   ],
  imports: [
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SnackbarComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass:
    GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }],
    entryComponents: [
      SnackbarComponent
    ]
})
export class ErrorHandlerModule { }
