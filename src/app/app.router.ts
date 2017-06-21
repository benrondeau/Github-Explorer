import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { GetUserComponent } from './get-user/get-user.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'getuser', component: GetUserComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {}
