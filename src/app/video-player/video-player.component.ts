import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DynamicScriptLoaderService } from '../shared/services/dynamic-script-loader.service';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit, OnDestroy {

  slideBarSub: Subscription;
  videoIdSub: Subscription;
  routerSub: Subscription;
  timer: string;
  endTimeInSecs: number;
  videoId: string;
  player: any;
  playerReady = false;
  videoDuration: number;
  sliderValue: number;
  isMuted: boolean;
  interval: any;

  constructor(
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private sliderService: SliderService,
    private dynamicScriptLoader: DynamicScriptLoaderService
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      };

      this.routerSub = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
    }

ngAfterViewInit() {
  this.loadScripts();  
  // const doc = (window as any).document;
  // const tag = doc.createElement('script');
  // tag.type = 'text/javascript';
  // tag.src = '../../assets/scripts/youtube.iframe.api.js';
  // const firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  if ((window as any).YT && (window as any).YT.loaded) {
    this.createPlayer();
  }
}

ngOnInit() {

  //  VIDEO_ID SUBSCRIPTION
    this.videoIdSub = (this.route.params.subscribe( params => {
    this.videoId = params.videoId;
    this.isMuted = true;
    console.log('VIDEO ID ', this.videoId);
  }));

  // SLIDEBAR SUBSCRIPTION
    this.slideBarSub = (this.sliderService.getSliderInput().subscribe( v => {
    console.log('VALUE FROM SLIDE BAR', v);
    this.jumpToTimePoint(v);
  }));

    console.log('onYouTubeIframeAPIReady - BEFORE', (window as any).onYouTubeIframeAPIReady);

    if ((window as any).YT) {
    console.log('ON-Y-F-API-READY LOADED');
  }

    if (!(window as any).YT) {
    console.log('ON-Y-F-API-READY NOT LOADED');
  }
    (window as any).onYouTubeIframeAPIReady = () => {
    console.log('YT', (window as any).YT );

    if (this.player === undefined) {
     this.createPlayer();
  }
    console.log('JUST CREATED PLAYER', this.player);
  };
}

// The API will call this function when the video player is ready
onPlayerReady(event) {
  this.playerReady = true;
  console.log('ON PLAYER READY EVENT', event);
  console.log('EVENT', event);
  this.updateProgressBar();

  // FIRST CLEAR UP ALL OLD INTERVALS THEN SET UP A NEW INTVERVAL
  console.log('INTERVAL BEFORE', (window as any).time_update_interval);

  clearInterval((window as any).time_update_interval);

  // SET INTERVAL FOR DATA REFRASHING
  (window as any).time_update_interval = setInterval(() => {
      this.timer = this.formatTime(this.player.getCurrentTime()) + ' / ' + this.formatTime(this.player.getDuration());
      this.updateProgressBar();
  }, 1000);

  // SET VOLUME
  this.player.setVolume(100);
  this.isMuted = false;

  // SET TIMER
  this.endTimeInSecs = Math.floor(this.player.getDuration());
  this.timer = '0:00 / ' + this.formatTime(this.player.getDuration());

  console.log('END TIME', this.timer);
  this.cd.detectChanges();
}
  // The API calls this function when the player's state changes.
  onPlayerStateChange(event) {
      console.log('onPlayerStateChange');
      console.log(event.data);
      console.log('ON PLAYER STATE CHANGE: EVENT-TARGET THIS.VIDEO.CURRENT-TIME', event.target.getCurrentTime());
      console.log('ON PLAYER STATE CHANGE: EVENT-TARGET THIS.VIDEO.GET-RUDATION', event.target.getDuration());

  }

  createPlayer() {
    this.player = new (window as any).YT.Player('player', {
      events: {
          onReady: (event: any) => { this.onPlayerReady(event); },
          onStateChange: (event: any) => { this.onPlayerStateChange(event); },
          onError: (event: any) => { console.log('ERROR', event); }
        },
      origin: window.location.origin,

    });
  }

  // Обновляем прогресс
  updateProgressBar = () => {
    this.sliderValue =  Math.floor(this.player.getCurrentTime());
    console.log('SLIDER VALIE', this.sliderValue);
    this.cd.detectChanges();
}
  // Формат времени
  formatTime(time: number): string {
    time = Math.round(time);
    const minutes = Math.floor(time / 60);
    const seconds = (time - minutes * 60);
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes.toString() + ':' + displaySeconds;
  }

  mute() {
    this.player.mute();
    this.isMuted = !this.isMuted;
    console.log('MUTED', this.isMuted);
  }

  unmute() {
    this.player.unMute();
    this.isMuted = !this.isMuted;
    console.log('MUTED', this.isMuted);
  }

  jumpToTimePoint(value) {
    this.player.seekTo(value);
  }

  ngOnDestroy(): void {
    clearInterval((window as any).time_update_interval);
    (window as any).onYouTubeIframeAPIReady = null;
    if (this.player) {
      console.log('this player', this.player);
      // this.player.stopVideo();
      console.log('player stopped', this.player);
      this.player.destroy();
      console.log('this player is destroyed', this.player);
      this.player = null;
      console.log('this player is null', this.player);
    }

    this.cd.detach();
    this.slideBarSub.unsubscribe();
    this.videoIdSub.unsubscribe();
    this.routerSub.unsubscribe();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('youtube-iframe-api').then(d => {
      // Script Loaded Successfully
      console.log('Youtube-iframe-api loaded successfully');
    }).catch(error => console.log(error));
  }

}
