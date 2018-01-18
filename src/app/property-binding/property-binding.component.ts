import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  btnDisabled: boolean = true;
  changeState: object = function() {
    this.btnDisabled = !this.btnDisabled;
  }

  constructor() { }

  ngOnInit() {
  }

}