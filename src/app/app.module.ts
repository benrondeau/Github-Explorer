import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetUserComponent } from './get-user/get-user.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AppRoutingModule } from './app.router';
import { HomeComponent } from './home/home.component';
import { FetchService } from './fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    MenubarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
