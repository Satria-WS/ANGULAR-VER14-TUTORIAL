import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { character } from '../types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  //charCyberPunk is object from books.component.ts
  @Input() charCyberPunk: character = {} as character;
  constructor() { }
  // Child to parent Event
  @Output() emitCharacter = new EventEmitter<character>()

  ngOnInit(): void {
  }

  addToCard() {

    // console.log(this.charCyberPunk);
    this.emitCharacter.emit(this.charCyberPunk);
  }

  addHello() {
    console.log(this.charCyberPunk);
  }

}
