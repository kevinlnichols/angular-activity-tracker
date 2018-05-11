import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { ACTIVITIES } from './mock-activities';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {

  constructor(private messageService: MessageService) {

  }

  getActivities(): Observable<Activity[]> {
    this.messageService.add('ActivityService: fetched activities');
    return of(ACTIVITIES);
  }
}
