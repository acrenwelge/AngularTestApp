import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  value: String = '';
  changeValue: object = function(newval){
    this.value = newval;
  }
  changeColor = function(event) {
    event.target.style.color = 'red';
    event.target.style.backgroundColor = 'black';
  }
  divStyle: object = {};
  editDiv = function() {
    this.divStyle = {
      backgroundColor: "green",
      color: "magenta"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
