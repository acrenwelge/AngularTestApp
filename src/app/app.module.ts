import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/people/person/person.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent, NavbarComponent, DataBindingComponent, PropertyBindingComponent, EventBindingComponent, PipeExampleComponent, FooterComponent, PeopleComponent, PersonComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
