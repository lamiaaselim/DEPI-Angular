import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AddComponent } from './Components/adminDashBoard/add/add.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DetailsComponent } from './Components/employees/details/details.component';
import { HomeAdminComponent } from './Components/adminDashBoard/home-admin/home-admin.component';
import { ListAdminComponent } from './Components/adminDashBoard/list-admin/list-admin.component';
import { EditComponent } from './Components/adminDashBoard/edit/edit.component';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent, HomeComponent, AddComponent, RegisterComponent, LoginComponent, NotFoundComponent, DetailsComponent, HomeAdminComponent, ListAdminComponent, EditComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
