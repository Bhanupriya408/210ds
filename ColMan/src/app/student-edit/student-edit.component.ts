import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StdserviceService } from '../stdservice.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  
  public studentData: any = {};
  submitted = false;
  public sid: any = this.aroute.snapshot.params['sid'];
  public selectedId: any;
  onSubmit() {
    this.submitted = true;
    alert('student datas are validated successfully!');
  }
  constructor(private service: StdserviceService,
    public router: Router,
    private aroute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log('from ng oninit' + this.sid);
    this.service
      .getStudent(this.sid)
      .subscribe((data) => (this.studentData = data));
  }

  updateStudent() {
    console.log('Student Data ----->' + this.studentData);
    this.service
      .updateStudent(this.studentData)
      .subscribe((data: {}) => this.router.navigate(['/viewstd']));
  }
}
