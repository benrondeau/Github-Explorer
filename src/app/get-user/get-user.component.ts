import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch/fetch.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  results: object = {};
  resultsAvailable = false;

  constructor(private fetchService: FetchService) { }

  ngOnInit() {
  }

  getUserInfo(event, username: string) {
    event.preventDefault(); // Prevent form submission
    this.fetchService.getUser(username)
      .subscribe(
        results => {
          console.log(results);
          this.results = results;
          this.resultsAvailable = true;
        },
        error =>  console.error(error));
  }

}
