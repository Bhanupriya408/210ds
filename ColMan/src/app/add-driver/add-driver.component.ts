import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DvrserviceService } from '../dvrservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  @Input()
  driverDetails: any ={
    did:'',
    dname: '',
    address: '',
    phno: '',
    busno: '',
  };
  submitted = false;
  constructor(private service: DvrserviceService, public router: Router) { }

  onSubmit() {
    this.submitted = true;
    alert('Driver datas are validated successfully!');
  }
  addDriver() {
    console.log('From dvr.comp.ts ' + this.driverDetails);
    this.service.addDriver(this.driverDetails).subscribe((data: {}) => this.router.navigate(['/viewdvr']));
  }
  ngOnInit(): void {
  }

}
