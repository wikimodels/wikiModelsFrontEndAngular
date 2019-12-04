import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goHome() {
    this.router.navigate(['home']);
  }
  goToRibbon1() {
    this.router.navigate(['home']);
  }

  goToRibbon2() {
    this.router.navigate(['ribbon2']);
  }

  goToRibbon3() {
    this.router.navigate(['ribbon3']);
  }

  goToRibbon4() {
    this.router.navigate(['ribbon4']);
  }


}
