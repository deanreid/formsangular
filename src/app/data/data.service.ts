import { Injectable } from '@angular/core';
import { UserSettings } from '../model/user-settings-model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  url: string = 'https://putsreq.com/I7sG6ci0OJ7R3dlTi00j';
  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    return this.http.post(this.url,userSettings);  
   // return of(userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly','Annual','LifeTime']);
  }
}
