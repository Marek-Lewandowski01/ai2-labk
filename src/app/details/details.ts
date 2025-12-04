import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Person } from '../person';
import { PersonLs } from '../person-ls';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  personId?: number;
  person?: Person;
  private route = inject(ActivatedRoute);
  private personLsService = inject(PersonLs);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.personId = params['id'];
      this.person = this.personId ? this.personLsService.getPerson(this.personId) : undefined;
    });
  }
}
