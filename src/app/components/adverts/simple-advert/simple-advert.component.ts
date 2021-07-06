import { Component, OnInit } from '@angular/core';
import { RouteDependciesService } from 'src/app/services/route-dependcies.service';
import { RouteDependentComponent } from '../../base/route-dependent/route-dependent.component';


@Component({
  selector: 'app-simple-advert',
  templateUrl: './simple-advert.component.html',
  styleUrls: ['./simple-advert.component.css'],
  providers: [RouteDependciesService]
})
export class SimpleAdvertComponent extends RouteDependentComponent implements OnInit {
  
  constructor(public deps: RouteDependciesService) {
    super(deps);
  }

  ngOnInit(): void {
  }

}
