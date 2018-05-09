import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
