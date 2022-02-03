import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../Driver';
import { DvrserviceService } from '../dvrservice.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  public drivers = [] as any;
  constructor(private eservice: DvrserviceService, private router: Router) {}
  public selectedId: number = 0;
  ngOnInit(): void {
    this.eservice
      .getDriverFromService()
      .subscribe((data) => (this.drivers = data));
  }

  onDelete(dvr: Driver) {
    this.selectedId = dvr.did;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.eservice
        .deleteDriver(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/viewdvr']));
    }
  }

}
