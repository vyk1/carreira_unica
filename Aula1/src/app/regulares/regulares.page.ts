import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regulares',
  templateUrl: './regulares.page.html',
  styleUrls: ['./regulares.page.scss'],
})
export class RegularesPage implements OnInit {
  items: object[]

  constructor(public router: Router) {
    this.items = [
      { url: 'https://www.geeksforgeeks.org/difference-between-dfa-and-nfa/?ref=rp', title: 'GeeksForGeeks', key: '1*' },
      { url: 'https://ths.rwth-aachen.de/wp-content/uploads/sites/4/regular_exercises_ws1718.pdf', title: 'Exercício' },
    ]
  }

  navigateToAF() {
    this.router.navigate(['regulares/automatos-finitos'], {})
  }

  ngOnInit() {
  }

}
