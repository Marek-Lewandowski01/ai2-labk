import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Person } from '../person';
import { PersonLs } from '../person-ls';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  people!: Person[];
  private personLsService = inject(PersonLs);

  ngOnInit() {
    this.people = this.personLsService.getAll(); // load people from ls on init
  }

  delete(index: number): void {
    const shouldDelete = confirm('Delete this person?');
    if (!shouldDelete) {
      return;
    }
    this.personLsService.deletePerson(index);
    this.people = this.personLsService.getAll();
  }
}
