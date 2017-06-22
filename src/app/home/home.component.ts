import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <!--Header Text-->
          <h1 class="text-center">
            Welcome!!
          </h1>

        </div>
      </div>
    </div>
  `,
  styles: [ ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
