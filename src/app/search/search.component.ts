import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  firstName: string;

  lastName: string;

  updateFirstName(firstName: string) {
    this.firstName = firstName;
  }

  updateLastName(lastName: string) {
    this.lastName = lastName;
  }
}
