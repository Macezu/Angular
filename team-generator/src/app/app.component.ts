import { Component, ElementRef, ViewChild } from '@angular/core';


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
    if (this.numberOfTeams === 0) {
      this.errorHandler("Select the amount of teams to create")
    } else if (this.membersArray.length === 0) {
      this.errorHandler("No team members added")
    } else {
      const originalAmount = this.membersArray.length
      var container = []
      // Loop until every player is assigned
      for (let i = 0; i < originalAmount; i++) {
        // Create and assing players to arrays corresponding team amount
        for (let y = 0; y < this.numberOfTeams; y++) {
          console.log(this.membersArray.length)
          if (this.membersArray.length >= 0) {
            let randPlayer = this.membersArray[Math.floor(Math.random() * (this.membersArray.length - 1))]
            var teamArray = new Array();
            teamArray = [randPlayer , i];
            container.push(teamArray);

            this.membersArray = this.membersArray.filter(x => x !== randPlayer)
            console.log(randPlayer)
          }
        }
      }
      console.log(container[0][1]); // access the second value of the first array
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

