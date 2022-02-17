import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  newMemberInput = ""
  numberOfTeams: Number = 0
  membersArray: string[] = [];
  errorMessage = ""

  onInput(member: string) {
    this.newMemberInput = member
  }

  onChange(amount : string) {
    if (Number(amount) >= 0) {
      this.numberOfTeams = Number(amount)
    } 
  }

  errorHandler = (errMessage : string) => {
    this.errorMessage = errMessage
    setTimeout(() => {
      this.errorMessage = ""
    },1500)
  }

  addToMembers = () => {
    if (this.newMemberInput) {
      this.membersArray.push(this.newMemberInput)
      this.newMemberInput = ""
    } else {
      this.errorHandler("No name present")
    }

  }
}

