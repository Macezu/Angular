import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  newMemberInput = ""
  membersArray: string[] = [];
  errorMessage = ""

  onInput(member: string) {
    this.newMemberInput = member
  }

  addToMembers = () => {
    if (this.newMemberInput) {
      this.membersArray.push(this.newMemberInput)
      this.newMemberInput = ""
    } else {
      this.errorMessage = "No name present"
      setTimeout(() => { this.errorMessage = "" }, 1500)
    }

  }
}

