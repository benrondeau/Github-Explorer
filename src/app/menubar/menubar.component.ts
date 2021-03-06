import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  template: `
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <!--Hamburger Menu-->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!--Brand Label-->
          <a class="navbar-brand" routerLink="/">Github Explorer</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a routerLink="/" routerLinkActive="active">Home</a></li>
            <li><a routerLink="/getuser" routerLinkActive="active">Get User</a></li>
          </ul>

          <!--<ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
          </ul>-->
        </div>
      </div>
    </nav>
  `,
  styles: [ ]
})
export class MenubarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
