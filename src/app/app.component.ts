import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Templete Driven Forms
export class AppComponent {
  topics = ['DSA', 'DBMS', 'Flutter', 'Angular js', 'React js', 'PHP', 'Javascript'];
  topicHasError = true;
  submitted = false;
  errorMsg = "";

  userModel = new User('', 'd@gmail.com', 0, 'default', '',true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateSubject(value: any){
    if(value === 'default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }

  onSubmit(userForm: any){
    console.log(userForm);
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Data: ', data),
        error => this.errorMsg = error.statusText    
      )
  }
}
