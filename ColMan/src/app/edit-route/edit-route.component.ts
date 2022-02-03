import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RteserviceService } from '../rteservice.service';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.css']
})
export class EditRouteComponent implements OnInit {

  public routeData: any = {};
  submitted = false;
  public rid: any = this.aroute.snapshot.params['rid'];
  public selectedId: any;
  onSubmit() {
    this.submitted = true;
    alert('route datas are validated successfully!');
  }
  constructor(private service: RteserviceService,
    public router: Router,
    private aroute: ActivatedRoute
    ) { }

    ngOnInit(): void {
      console.log('from ng oninit' + this.rid);
      this.service
        .getRoute(this.rid)
        .subscribe((data) => (this.routeData = data));
    }

  updateRoute() {
    console.log('Route Data ----->' + this.routeData);
    this.service
      .updateRoute(this.routeData)
      .subscribe((data: {}) => this.router.navigate(['/viewrte']));
  }
}
