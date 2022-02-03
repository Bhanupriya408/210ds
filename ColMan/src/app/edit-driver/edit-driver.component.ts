import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DvrserviceService } from '../dvrservice.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  public driverData: any = {};
  submitted = false;
  public did: any = this.aroute.snapshot.params['did'];
  public selectedId: any;
  onSubmit() {
    this.submitted = true;
    alert('driver datas are validated successfully!');
  }
  constructor(private service: DvrserviceService,
    public router: Router,
    private aroute: ActivatedRoute
    ) { }

    ngOnInit(): void {
      console.log('from ng oninit' + this.did);
      this.service
        .getDriver(this.did)
        .subscribe((data) => (this.driverData = data));
    }

  updateDriver() {
    console.log('Driver Data ----->' + this.driverData);
    this.service
      .updateDriver(this.driverData)
      .subscribe((data: {}) => this.router.navigate(['/viewdvr']));
  }

}
