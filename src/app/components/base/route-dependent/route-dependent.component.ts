import { Component, OnInit } from '@angular/core';
import { RouteDependciesService } from 'src/app/services/route-dependcies.service';

@Component({
  selector: 'app-route-dependent',
  templateUrl: './route-dependent.component.html',
  styleUrls: ['./route-dependent.component.css']
})
export class RouteDependentComponent implements OnInit {

  constructor(public routeDep: RouteDependciesService) { }

  ngOnInit(): void {
  }
  
  getRoute() {
    return this.routeDep.router.url;
  }

  isRouteEqual(route: string) {
    return this.routeDep.router.url === route;
  }
}
