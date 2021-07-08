import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IApplicationState } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cryptonomicon';
}
