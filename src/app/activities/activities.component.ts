import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ACTIVITIES } from '../mock-activities';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activity = ACTIVITIES;
  

  constructor() {}

  ngOnInit() {
  }

}
