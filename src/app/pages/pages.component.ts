import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare function init_plugins();


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc) {
    this.doc.getElementById('body').className = '';
    this.doc.getElementById('body').classList.add('skin-blue');
   }

  ngOnInit() {
    init_plugins();

  }

}
