import { Component, OnInit } from '@angular/core';
import { RouteDependciesService } from 'src/app/services/route-dependcies.service';
import { RouteDependentComponent } from '../base/route-dependent/route-dependent.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [RouteDependciesService]
})
export class HeaderComponent extends RouteDependentComponent implements OnInit {

  constructor(public deps: RouteDependciesService) {
    super(deps);
  }

  ngOnInit(): void {
  }

}
