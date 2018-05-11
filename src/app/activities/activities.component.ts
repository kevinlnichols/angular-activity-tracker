import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  selectedActivity: Activity;
 
  activities: Activity[];

  constructor(private activityService: ActivityService) {
    
  }

  ngOnInit() {
    this.getActivities();
  }

  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

  getActivities(): void {
    this.activityService.getActivities()
      .subscribe(activities => this.activities = activities);
  }
  

}
