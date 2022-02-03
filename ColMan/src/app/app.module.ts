import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { BusroutesComponent } from './busroutes/busroutes.component';
import { DriverdetailsComponent } from './driverdetails/driverdetails.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { EditRouteComponent } from './edit-route/edit-route.component';
import { ListRouteComponent } from './list-route/list-route.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
  
    LoginComponent,
    BusroutesComponent,
    DriverdetailsComponent,
    SignupComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentListComponent,
    AddDriverComponent,
    EditDriverComponent,
    DriverListComponent,
    AddRouteComponent,
    EditRouteComponent,
    ListRouteComponent,

  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
