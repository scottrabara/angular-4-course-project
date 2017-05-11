import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shenanigans',
  templateUrl: './shenanigans.component.html',
  styleUrls: ['./shenanigans.component.css']
})
export class ShenanigansComponent implements OnInit {

  chatHistory: string;
  constructor() { }

  ngOnInit() {
    this.chatHistory = "Start typing!";
  }

}
