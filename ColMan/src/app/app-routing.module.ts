import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { BusroutesComponent } from './busroutes/busroutes.component';
import { DriverdetailsComponent } from './driverdetails/driverdetails.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { EditRouteComponent } from './edit-route/edit-route.component';
import { ListRouteComponent } from './list-route/list-route.component';

const routes: Routes = [
  { path:'signup',component: SignupComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'driverdetails', component: DriverdetailsComponent },
  { path: 'busroutes', component: BusroutesComponent },
  { path: 'addstd', component: StudentAddComponent },
  { path: 'updatestd/:sid', component: StudentEditComponent },
  { path: 'viewstd', component: StudentListComponent },
  { path: 'addDvr',component: AddDriverComponent},
  { path: 'updateDvr/:did',component: EditDriverComponent},
  { path: 'viewdvr',component: DriverListComponent},
  { path: 'addRte',component: AddRouteComponent},
  { path: 'updateRte/:rid',component: EditRouteComponent},
  { path: 'viewrte',component: ListRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
