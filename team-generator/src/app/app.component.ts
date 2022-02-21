import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  newMemberInput = ""
  numberOfTeams: number | "" = 0
  membersArray: string[] = [];
  errorMessage = ""
  teams: string[][] = []

  // Skip strict class checking with "! definite assignment assertion" and give it the focus after view created 
  @ViewChild("addMemberInput") memberInput!: ElementRef
  ngAfterViewInit() {
    this.memberInput.nativeElement.focus()
  }

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
    if (this.numberOfTeams === 0 || this.numberOfTeams < 0) {
      this.errorHandler("Select the amount of teams to create")
    } else if (this.membersArray.length === 0) {
      this.errorHandler("No team members added")
    } else if (this.numberOfTeams > this.membersArray.length) {
      this.errorHandler("Not enough players for teams, please decrease team amount, or increase player count")
    }
    else {
      const allMembers = [...this.membersArray]
      if (this.teams) this.teams = []
      // Loop until every player is assigned
      while (allMembers.length) {
        // Create and assing players to arrays corresponding team amount
        for (let i = 0; i < this.numberOfTeams; i++) {
          let randIndex = Math.floor(Math.random() * (allMembers.length - 1))
          const member = allMembers.splice(randIndex, 1)[0]
          if (member) {
            if (this.teams[i]) {
              this.teams[i].push(member)
            } else {
              this.teams[i] = [member]
            }
          }
        }
      }
      console.log(this.teams); // access the second value of the first array
      this.membersArray = []
      this.numberOfTeams = 0
    }
  }


  //Adds members to member array
  addToMembers = () => {
    if (this.newMemberInput) {
      this.membersArray.push(this.newMemberInput)
      this.newMemberInput = ""
    } else {
      this.errorHandler("No name present")
    }

  }
}

