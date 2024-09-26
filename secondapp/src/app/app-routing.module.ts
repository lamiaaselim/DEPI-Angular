import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactivFormsComponent } from './components/reactiv-forms/reactiv-forms.component';
import { AdminHomeComponent } from './components/dash/admin-home/admin-home.component';
import { AdminEditComponent } from './components/dash/admin-edit/admin-edit.component';
import { AdminAddComponent } from './components/dash/admin-add/admin-add.component';
import { AdminDashComponent } from './components/dash/admin-dash/admin-dash.component';
import { authChildGuard } from './Guards/auth-guard.service';
import { HomeAdminComponent } from './components/adminDashboard/home-admin/home-admin.component';
import { AddEmployeeAdminComponent } from './components/adminDashboard/add-employee-admin/add-employee-admin.component';
import { EditEmployeeAdminComponent } from './components/adminDashboard/edit-employee-admin/edit-employee-admin.component';
import { ListEmployeeAdminComponent } from './components/adminDashboard/list-employee-admin/list-employee-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'reactive-forms', component: ReactivFormsComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminn', component: HomeAdminComponent , children:[
    { path: 'list', component: ListEmployeeAdminComponent},
    { path: 'add', component: AddEmployeeAdminComponent},
    { path: 'edit/:id', component: EditEmployeeAdminComponent },
  ]},


  // { path: 'admin', component: AdminHomeComponent },
  // { path: 'admin/add', component: AdminAddComponent },
  // { path: 'admin/:id', component: AdminEditComponent },
  // {
  //   path: 'admin',
  //   component: AdminHomeComponent,
  //   canActivateChild: [authChildGuard],
  //   children: [
  //     { path: 'dash', component: AdminDashComponent },
  //     { path: 'add', component: AdminAddComponent },
  //     { path: ':id', component: AdminEditComponent },
  //   ],
  // },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
