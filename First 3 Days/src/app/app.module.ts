import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BindingComponent } from './Components/binding/binding.component';
import { InterpolationComponent } from './Components/interpolation/interpolation.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './Components/directives/directives.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { SquarePipe } from './Components/square.pipe';
import { ReverseStringPipe } from './Components/reverse-string.pipe';
import { LifecycleDemoComponent } from './Components/lifecycle-demo/lifecycle-demo.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { Square2Pipe } from './Components/square2.pipe';
import { Square3Pipe } from './Components/square3.pipe';
import { ReverseString2Pipe } from './Components/reverse-string2.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BindingComponent,
    InterpolationComponent,
    DirectivesComponent,
    PipesComponent,
    SquarePipe,
    ReverseStringPipe,
    LifecycleDemoComponent,
    ParentComponent,
    ChildComponent,
    Square2Pipe,
    Square3Pipe,
    ReverseString2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
