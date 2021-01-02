import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegularesPageRoutingModule } from './regulares-routing.module';

import { RegularesPage } from './regulares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegularesPageRoutingModule
  ],
  declarations: [RegularesPage]
})
export class RegularesPageModule {}
