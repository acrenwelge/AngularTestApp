import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../../../classes/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person;

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

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.person = this.people[id-1];
  }

}
