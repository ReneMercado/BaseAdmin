import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare function init_plugins();

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc) {
    this.doc.getElementById('body').className = '';
    this.doc.getElementById('body').classList.add('register-page');
   }

  ngOnInit() {
    init_plugins();

    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  }

}
