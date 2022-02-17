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
  @ViewChild("addMemberInput") memberInput! : ElementRef
  ngAfterViewInit(){
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
      for (let y=this.membersArray.length; y>= 0;y--){
        for (let i = 0; i < this.numberOfTeams; i++) {
          let randPlayer = this.membersArray[Math.floor(Math.random() * (this.membersArray.length - 1))]
          let arr : string[] = []
          arr.push(randPlayer)
          this.membersArray = this.membersArray.filter(x => x !== randPlayer)
          console.log(randPlayer)

        }
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

