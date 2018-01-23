import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DataBindingComponent} from './components/data-binding/data-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/people/person/person.component';

const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'databinding', component: DataBindingComponent},
  { path: 'propertybinding', component: PropertyBindingComponent},
  { path: 'eventbinding', component: EventBindingComponent},
  { path: 'pipes', component: PipeExampleComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'people/:id', component: PersonComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
