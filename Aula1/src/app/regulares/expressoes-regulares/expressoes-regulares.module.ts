import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpressoesRegularesPageRoutingModule } from './expressoes-regulares-routing.module';

import { ExpressoesRegularesPage } from './expressoes-regulares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpressoesRegularesPageRoutingModule
  ],
  declarations: [ExpressoesRegularesPage]
})
export class ExpressoesRegularesPageModule {}
