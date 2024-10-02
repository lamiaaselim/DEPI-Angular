import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactivFormsComponent } from './components/reactiv-forms/reactiv-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeAdminComponent } from './components/adminDashboard/home-admin/home-admin.component';
import { AddEmployeeAdminComponent } from './components/adminDashboard/add-employee-admin/add-employee-admin.component';
import { EditEmployeeAdminComponent } from './components/adminDashboard/edit-employee-admin/edit-employee-admin.component';
import { ListEmployeeAdminComponent } from './components/adminDashboard/list-employee-admin/list-employee-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ReactivFormsComponent,
    HomeAdminComponent,
    AddEmployeeAdminComponent,
    EditEmployeeAdminComponent,
    ListEmployeeAdminComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
