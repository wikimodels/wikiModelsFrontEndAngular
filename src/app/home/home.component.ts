import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  playVideo() {
    this.router.navigate(['/video', 'n81_Y8biV9A']);
  }

  getTile() {
    this.router.navigate(['modelcard', 'gf']);
  }

}
