import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../Route';
import { RteserviceService } from '../rteservice.service';

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['./list-route.component.css']
})
export class ListRouteComponent implements OnInit {

  public routes = [] as any;
  constructor(private eservice: RteserviceService, private router: Router) {}
  public selectedId: number = 0;
  ngOnInit(): void {
    this.eservice
      .getRouteFromService()
      .subscribe((data) => (this.routes = data));
  }

  onDelete(rte: Route) {
    this.selectedId = rte.rid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.eservice
        .deleteRoute(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/viewrte']));
    }
  }

}
