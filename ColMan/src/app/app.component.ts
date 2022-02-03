import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ColMan';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 ngOnSubmit() {
    if (window.confirm('Are you sure,you want to logout?')) {
      this.router.navigate(['/login']);
    }

  }
}
