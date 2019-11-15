import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('not-found-init').then(d => {
      // Script Loaded Successfully
      console.log('not-found-init script loaded successfully');
    }).catch(error => console.log(error));
  }

}
