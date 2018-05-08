import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ACTIVITIES } from '../mock-activities';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
 
  activities = ACTIVITIES;

  selectedActivity: Activity;

  constructor() {
    console.log(ACTIVITIES);
  }

  ngOnInit() {
  }

  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }
  

}
