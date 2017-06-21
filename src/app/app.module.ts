import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
// Modules
import { AppRoutingModule } from './app.router';
// Components
import { AppComponent } from './app.component';
import { GetUserComponent } from './get-user/get-user.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { FetchService } from './services/fetch/fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    MenubarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule // Must go last in array, else 404s can occur
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
