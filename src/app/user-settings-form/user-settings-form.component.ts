import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../model/user-settings-model';
import { NgForm, NgControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }

  //make a copy and spread data {...}
  userSettings : UserSettings = {...this.originalUserSettings};
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm): void {
    console.log('in onSubmit: ', form.valid);
  }
 
  onBlur(field: NgModel){
    console.log('in blur: ', field.valid);
  }
}
