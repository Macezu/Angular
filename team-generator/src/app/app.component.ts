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

  onChange(amount: string) {
    this.numberOfTeams = Number(amount)
  }

  errorHandler = (errMessage: string) => {
    // Don't overlap
    if (!this.errorMessage) {
      this.errorMessage = errMessage
      setTimeout(() => {
        this.errorMessage = ""
      }, 1800)
    }

  }

  generateTeams = () => {
    if (this.numberOfTeams === 0) {
      this.errorHandler("Select the amount of teams to create")
    } else if (this.membersArray.length === 0) {
      this.errorHandler("No team members added")
    } else {
      for (let i = 0; i < this.numberOfTeams; i++) {
        let rand = Math.floor(Math.random() * (this.membersArray.length - 1))
        console.log(rand)
      }

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

