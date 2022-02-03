import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RteserviceService } from '../rteservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {

  @Input()
  routeDetails: any ={
    rid:'',
    location: '',
    starttime: '',
    reachtime: '',
    busno: '',
  };
  submitted = false;
  constructor(private service: RteserviceService, public router: Router) { }

  onSubmit() {
    this.submitted = true;
    alert('Route datas are validated successfully!');
  }
  addRoute() {
    console.log('From rte.comp.ts ' + this.routeDetails);
    this.service.addRoute(this.routeDetails).subscribe((data: {}) => this.router.navigate(['/viewrte']));
  }

  ngOnInit(): void {
  }

}
