import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import models from '../../testData/models.json';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.css']
})
export class ModelCardComponent implements OnInit, OnDestroy {
  model: {};
  routeSub: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = (this.route.params.subscribe(params => {
      console.log(models);
      console.log(params);
      this.model = models.find(m => m.modelId === params.modelId);
      console.log('MODEL FROM TILE COMPONENT', this.model);
    }));
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
