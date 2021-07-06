import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: {
    name: string;
    DOB: Date | undefined;
    tel: string;
  } = { name: '', DOB: undefined, tel: '' };
  constructor() {}

  ngOnInit(): void {}
  register() {
    
  }
}
