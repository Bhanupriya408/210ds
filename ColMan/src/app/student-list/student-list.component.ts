import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Student';
import { StdserviceService } from '../stdservice.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students = [] as any;
  constructor(private eservice: StdserviceService, private router: Router) {}
  public selectedId: number = 0;
  ngOnInit(): void {
    this.eservice
      .getStudentFromService()
      .subscribe((data) => (this.students = data));
  }

  onDelete(std: Student) {
    this.selectedId = std.sid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.eservice
        .deleteStudent(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/viewstd']));
    }
  }
  

}
