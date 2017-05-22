import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shenanigans',
  templateUrl: './shenanigans.component.html',
  styleUrls: ['./shenanigans.component.css']
})

// Currently uses own instance of AngularFireDatabase to connect to Firebase.
// Need to change this to connect using the data-storage service and implement auth service as well

export class ShenanigansComponent implements OnInit, AfterViewChecked, OnDestroy {

  @ViewChild('text') textBox;

  messages: string[] = [];
  sub: Subscription;
  messageForm: FormGroup;
  // userName: string = 'RandomPerson' + Math.floor(Math.random() * + 10000);
  userName: string;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    //this.messages.push("Computer: Hello, start typing!");
    this.sub = this.db.list('/messages').subscribe(
      (messages) => {
        this.messages = [];
        for (let m of messages) {
          this.messages.push(m.$value);
        }
      }
    );
    this.userName = this.db.app.auth().currentUser.displayName;
    this.messageForm = new FormGroup({
      'text': new FormControl('')
    });
    // this.db.app
    // .auth().onAuthStateChanged(
    //   (user) => {
    //     this.userName = user.displayName;
    //   }
    // );
    this.db.app.auth().onAuthStateChanged(
      () => {
        this.userName = this.db.app.auth().currentUser.displayName;
      }
    );
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onAdd() {
    this.db.object('/messages').set(this.messages);
  }

  getTime() {
    return '[' + new Date().toLocaleTimeString() + ']';
  }

  onSubmit() {
    this.messages.push(
      this.getTime() + ' ' +
      this.userName + ': ' + 
      this.messageForm.get('text').value);
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

  scrollToBottom() {
    if (this.textBox != null) {
      this.textBox.nativeElement.scrollTop = this.textBox.nativeElement.scrollHeight;
    }
  }

}
