import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  trackId = '97287230'; 
  videoId = '1DItAHN126A'; 
  // videoId = '90vC6TnjLAs';
  // tslint:disable-next-line:max-line-length
  videoCoverUrl = '../../assets/img/videoCovers/videoCover-popodchemu.jpg';
  musicCoverUrl = '../../assets/img/musicCovers/mc-430by350.jpg';
  constructor() { }

  ngOnInit() {
  }

}
