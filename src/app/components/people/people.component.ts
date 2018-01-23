import { Component, OnInit } from '@angular/core';
import { Person } from '../../classes/person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Array<Person> = [
    {
      id: 1,
      name: "Andrew",
      age: 23,
      occupation: "Software developer",
      attributes: ["cool","awesome","the best"]
    },
    {
      id: 2,
      name: "Blake",
      age: 20,
      occupation: "Student",
      attributes: ["not-cool","not-awesome","not the best"]
    },
    {
      id: 3,
      name: "Seth",
      age: 16,
      occupation: "Student",
      attributes: ["uncool","unawesome","unthe best"]
    }
  ]

  onSelect: object = function(person) {
    console.log(person);
  }

  constructor() { }

  ngOnInit() {
  }

}
