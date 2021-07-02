import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticker } from 'src/app/Ticker';

@Component({
  selector: 'app-iconed-button',
  templateUrl: './iconed-button.component.html',
  styleUrls: ['./iconed-button.component.css'],
})
export class IconedButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter();

  @Input() iconPath: string = '';
  @Input() text: string = "";
  @Input() isEnabled: boolean = true;
  
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
