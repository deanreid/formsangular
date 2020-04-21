import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../model/user-settings-model';
import { NgForm, NgControl, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

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
  postError: boolean = false;
  postErrorMessage: string = '';
  singleModel: string ='1';
  startDate: Date;
  userRating: number= 0;
  maxRating: number = 10;
  isReadonly: boolean = false;

  subscriptionTypes: Observable<string[]>;
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes= this.dataservice.getSubscriptionTypes(); 
    this.startDate = new Date();  
  }

  onSubmit(form: NgForm): void {
    console.log('in onSubmit: ', form.valid);
    if (form.valid){
      this.dataservice.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    }
    else{
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors."
    }
   
  }
 
  onHttpError(errorResponse: any){
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
  onBlur(field: NgModel){
    console.log('in blur: ', field.valid);
  }
}
