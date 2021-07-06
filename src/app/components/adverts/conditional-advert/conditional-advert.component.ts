import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-conditional-advert',
  templateUrl: './conditional-advert.component.html',
  styleUrls: ['./conditional-advert.component.css']
})
export class ConditionalAdvertComponent implements OnInit {
 
  constructor(public templateRef: TemplateRef<unknown>) { }

  ngOnInit(): void {
  }

}
