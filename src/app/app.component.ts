import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationError, NavigationEnd, NavigationCancel } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Subject, interval, Observable } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';
import { Location, PopStateEvent } from '@angular/common';
import { IsLoadingService } from '@service-work/is-loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  lastPoppedUrl = '';
  yScrollStack: number[] = [];
  scrollInterval: any;
  isLoading: Observable<boolean>;
  
  constructor(
    private location: Location,
    private router: Router,
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry,
    private isLoadingService: IsLoadingService
    ) {

      matIconRegistry.addSvgIcon(
        'wm-logo', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/wm-logo.svg'));

      matIconRegistry.addSvgIcon(
        'vertical-dots', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/mbri-vertical-dots.svg'));

      matIconRegistry.addSvgIcon(
        'video', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/video_call_24.svg'));

      matIconRegistry.addSvgIcon(
        'exit', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/exit.svg'));

      matIconRegistry.addSvgIcon(
        'volume-up', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/volume-up-24.svg'));

      matIconRegistry.addSvgIcon(
        'volume-off', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/volume-off-24.svg'));

      matIconRegistry.addSvgIcon(
        's_cart', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/s_cart_24.svg'));

      matIconRegistry.addSvgIcon(
        'play', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/play.svg'));
    }

    ngOnInit(): void {
      this.location.subscribe((ev: PopStateEvent) => {
        this.lastPoppedUrl = ev.url;
        console.log('LAST POPPED URL', this.lastPoppedUrl);
      });
    
      this.router.events.subscribe((ev: any) => {
        if (ev instanceof NavigationStart) {
          if (ev.url !== this.lastPoppedUrl) {
            this.yScrollStack.push(window.scrollY);
          } else {
            this.lastPoppedUrl = undefined;
            const yposition = this.yScrollStack.pop();
            console.log('Y-POSITION', this.yScrollStack.pop());        
            let maxInterval = 0; // used to stop subscription
            interval(this.scrollInterval)
              .pipe(
                takeWhile(_ => window.scrollY < yposition && maxInterval < 5000)
              )
              .subscribe(_ => {
                maxInterval += this.scrollInterval;
                window.scrollTo({
                  top: yposition,
                  left: 0,
                  behavior: 'smooth',
                });
              });
          }
        }
      });

      this.isLoading = this.isLoadingService.isLoading$();

      this.router.events
      .pipe(
        filter(
          event =>
          event instanceof NavigationStart ||
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError,
        ),
      )
      .subscribe(event => {
        // If it's the start of navigation, `add()` a loading indicator
        if (event instanceof NavigationStart) {
          this.isLoadingService.add();                    
          return;
        }

        setTimeout(() => {
        this.isLoadingService.remove();
        }, 2000);
        // Else navigation has ended, so `remove()` a loading indicator
        // this.isLoadingService.remove();          

      });
    }
}
