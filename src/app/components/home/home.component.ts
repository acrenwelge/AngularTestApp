import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  name: String = "";
  text: String = "Some text will be displayed";
  myobject: object = {
    a: "hello",
    b: "world",
    toString: function() {
      return `${this.a} ${this.b}`; // template literal (ES6)
    }
  }
}
