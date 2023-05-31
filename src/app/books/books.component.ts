import { Component, OnInit } from '@angular/core';
interface character {
  name: string;
  gender: string;
  image: string;
  contract: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  // ======= variable =========
  nameInput: string = '';
  nameHandleInput: string = '';

  name: string = 'tanginamo clean';
  author: string = 'gg';
  imageMonkey =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngd2R7OMVGG0hpRXVk4FIoMoGdrkJQP4fUCD2Pzq4568i2_FM&s';

  name2: string = 'kudanil val halla';
  author2: string = 'kudanil';
  imageDonkey: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzrvjUn2DHIpaxqqtuJngDKvhGUvZU8YY35uYU4aymRI0BbY&s';

  charCyberPunk: character[] = [
    {
      name: 'David',
      gender: 'male',
      contract: 25000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kdsVrdA_4KwW2kfGHbf_8Yn8kADUnEW4lQ&usqp=CAU',
    },
    {
      name: 'Lucyna',
      gender: 'female',
      contract: 95000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRib_7iE2Bj8Dey3SYuuqdlEvk6pLvc37CVce1d0T3D_nQhj1gsQcdnwNTvk87g1eHLIY&usqp=CAU',
    },
    {
      name: 'Rebecca',
      gender: 'female',
      contract: 55000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQoCmG0oSK3y3RlHvvX_APqrj7KKp8EfJqz6kogp3XQ&s',
    },
  ];

  //DIRECTIVE
  isShowing: boolean = false;

  isDirective: boolean = true;

  card: character[] = [];
  // ======= function ========
  handleClick() {
    alert('woi kerja !');

    this.isShowing = true;

    console.log(this.isShowing);
  }

  handleInput(event: InputEvent | Event) {
    // alert('hello')
    console.log((event.target as HTMLInputElement).value);

    this.nameHandleInput = (event.target as HTMLInputElement).value;
  }

  toogleAnimal() {
    // this.isDirective = this.isShowing
    this.isDirective = !this.isDirective;
  }
  addToCard(event: any) {
    console.log(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
