import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  escondeMiolo = false;
  esconder() {
    this.escondeMiolo = true;
    console.log('oi');
  }
}
