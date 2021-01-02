import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regulares',
  templateUrl: './regulares.page.html',
  styleUrls: ['./regulares.page.scss'],
})
export class RegularesPage implements OnInit {

  constructor(public router: Router) { }

  navigateToAF() {
    this.router.navigate(['regulares/automatos-finitos'], {})
  }

  ngOnInit() {
  }

}
