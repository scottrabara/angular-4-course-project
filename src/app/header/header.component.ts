import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class headerComponent {
	@Output() headerSelected = new EventEmitter<string>();

	onSelected(redirect: string) {
		this.headerSelected.emit(redirect);
	}
}