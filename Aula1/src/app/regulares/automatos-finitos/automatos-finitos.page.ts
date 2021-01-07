import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-automatos-finitos',
  templateUrl: './automatos-finitos.page.html',
  styleUrls: ['./automatos-finitos.page.scss'],
})
export class AutomatosFinitosPage {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  constructor() { }

  scrollToElement(elementId: string) {
    let yOffset = document.getElementById(elementId).offsetTop;
    console.log(yOffset)
    this.content.scrollToPoint(0, yOffset);
  }
  ngOnInit() {
  }

}
