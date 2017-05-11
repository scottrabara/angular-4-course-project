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
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.messages.push("Computer: Hello, start typing!");
    this.db.list('/messages').subscribe(
      (messages: string[]) => {
        for (let m of messages) {
          this.messages.push(m);
        }
      }
    );
    this.messageForm = new FormGroup({
      'text': new FormControl('')
    });
  }

  onSubmit() {
    this.messages.push('Player 1: ' + this.messageForm.get('text').value);
    this.messageForm.reset();
  }

}
