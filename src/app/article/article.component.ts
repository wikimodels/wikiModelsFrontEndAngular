import { Component, OnInit } from '@angular/core';
import data from '../../testdata.json';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  sections = data;

   
  constructor() { }

  ngOnInit() {
    console.log(this.sections);
  }

}
