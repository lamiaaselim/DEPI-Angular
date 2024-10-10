import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ListComponent } from './Components/employees/list/list.component';
import { DetailsComponent } from './Components/employees/details/details.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeAdminComponent } from './Components/adminDashBoard/home-admin/home-admin.component';
import { ListAdminComponent } from './Components/adminDashBoard/list-admin/list-admin.component';
import { AddComponent } from './Components/adminDashBoard/add/add.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { authChildGuard, authParentGuard } from './Guards/auth.guard';
import { EditComponent } from './Components/adminDashBoard/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employee-list', component: ListComponent , canActivate: [authParentGuard]},
  { path: 'employee/:id', component: DetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: HomeAdminComponent,
    canActivateChild: [authChildGuard],
    children: [
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'list', component: ListAdminComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
