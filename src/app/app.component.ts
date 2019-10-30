import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {

      matIconRegistry.addSvgIcon(
        'wm-logo', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/wm-logo.svg'));

      matIconRegistry.addSvgIcon(
          'vertical-dots', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/mbri-vertical-dots.svg'));

      matIconRegistry.addSvgIcon(
            'video', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/video_call_24.svg'));

      matIconRegistry.addSvgIcon(
            's_cart', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/s_cart_24.svg'));
    }
}
