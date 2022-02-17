import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  newMemberInput = ""
  numberOfTeams: Number = -1
  membersArray: string[] = [];
  errorMessage = ""

  onInput(member: string) {
    this.newMemberInput = member
  }

  onChange(amount : string) {
    this.numberOfTeams = Number(amount)
    console.log(this.numberOfTeams) 
  }

  errorHandler = (errMessage : string) => {
    this.errorMessage = errMessage
    setTimeout(() => {
      this.errorMessage = ""
    },1800)
  }

  generateTeams = () => {
    if (this.numberOfTeams >= 1){

    }else {
      this.errorHandler("Select the amount of teams to create")
    }
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

