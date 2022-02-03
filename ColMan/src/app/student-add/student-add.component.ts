import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { StdserviceService } from '../stdservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  @Input()
  studentDetails: any ={
    sid:'',
    sname: '',
    address: '',
    phno: '',
    gender:'',
    busno: '',
    status: '',
  };
  submitted = false;
  constructor(private service: StdserviceService, public router: Router) { }

  onSubmit() {
    this.submitted = true;
    alert('Student datas are validated successfully!');
  }

  addStudent() {
    console.log('From std.comp.ts ' + this.studentDetails);
    this.service.addStudent(this.studentDetails).subscribe((data: {}) => this.router.navigate(['/viewstd']));
  }
  ngOnInit(): void {
  }

}
