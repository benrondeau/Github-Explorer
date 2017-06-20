import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchForUser(input) {
    fetch(`https://api.github.com/users/${input}`, {
      headers: new Headers({
        Accept: 'application/vnd.github.v3+json'
      })
    })
    .then((response) => {
      response.json().then((json) => {
        console.log(json);
      });
    })
    .catch((response) => {
      console.error(response);
    });
  }

}
