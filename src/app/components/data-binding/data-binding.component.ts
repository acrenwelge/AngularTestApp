import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name: String = "";
  text: String = "Some text will be displayed";
  myobject: object = {
    a: "hello",
    b: "world",
    toString: function() {
      return `${this.a} ${this.b}`; // template literal (ES6)
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
