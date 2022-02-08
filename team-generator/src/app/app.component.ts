import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  newMemberInput = ""
  membersArray: string[] = [];

  onInput(member:string){
    this.newMemberInput = member
  }

  addToMembers = () => {
    this.membersArray.push(this.newMemberInput)
    console.log(this.membersArray)
  }
}

