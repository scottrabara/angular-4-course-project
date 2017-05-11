import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-shenanigans',
  templateUrl: './shenanigans.component.html',
  styleUrls: ['./shenanigans.component.css']
})
export class ShenanigansComponent implements OnInit {

  messages: string[] = [];
  messageForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.messages.push("Computer: Hello, start typing!");

    this.messageForm = new FormGroup({
      'text': new FormControl('')
    });
  }

  onSubmit() {
    this.messages.push('Player 1: ' + this.messageForm.get('text').value);
    this.messageForm.reset();
  }

}
