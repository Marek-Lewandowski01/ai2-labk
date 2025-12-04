import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonLs {
  readonly KEY = 'stored-people-data';
  constructor() {}

  public getAll(): Person[] {
    let people: Person[] = []; // empty arr
    const data = localStorage.getItem(this.KEY); // get from ls
    if (data) {
      people = JSON.parse(data); // parse if exists
    }
    return people; // return arr
  }

  public getPerson(index: number): Person {
    const people = this.getAll(); // get all
    return people[index]; // return by index
  }

  public addPerson(person: Person): void {
    const people = this.getAll(); // get all
    people.push(person); // add new
    localStorage.setItem(this.KEY, JSON.stringify(people)); // save back
  }

  public deletePerson(index: number): void {
    const people = this.getAll(); // get all
    people.splice(index, 1); // remove by index
    localStorage.setItem(this.KEY, JSON.stringify(people)); // save back
  }
}
