import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../model/user-settings-model';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  userSettings: UserSettings = {
    name: 'Dean',
    emailOffers: true,
    interfaceStyle: 'Blue Style',
    subscriptionType: 1,
    notes: 'This is a test note'
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
