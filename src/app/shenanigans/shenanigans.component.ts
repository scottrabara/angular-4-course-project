import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-shenanigans',
  templateUrl: './shenanigans.component.html',
  styleUrls: ['./shenanigans.component.css']
})
export class ShenanigansComponent implements OnInit {

  messages: string[] = [];
  messageForm: FormGroup;
  userName: string = '';
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    //this.messages.push("Computer: Hello, start typing!");
    this.db.list('/messages').subscribe(
      (messages) => {
        this.messages = [];
        for (let m of messages) {
          this.messages.push(m.$value);
        }
      }
    );
    this.messageForm = new FormGroup({
      'text': new FormControl('')
    });
  }

  onAdd() {
    this.db.object('/messages').set(this.messages);
  }

  onSubmit() {
    this.messages.push(this.userName + ': ' + this.messageForm.get('text').value);
    this.onAdd();
    this.messageForm.reset();
  }

  onClearHistory() {
    this.db.object('/messages').remove();
  }

  isUser(message: string) {
    return {
      'isUser': message.toUpperCase().indexOf(this.userName.toUpperCase()) > 0
    };
  }

}
