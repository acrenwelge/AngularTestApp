import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataBindingComponent} from './data-binding/data-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';

const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'databinding', component: DataBindingComponent},
  { path: 'propertybinding', component: PropertyBindingComponent},
  { path: 'eventbinding', component: EventBindingComponent},
  { path: 'pipes', component: PipeExampleComponent}
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
