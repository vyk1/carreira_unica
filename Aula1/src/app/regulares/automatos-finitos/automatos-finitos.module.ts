import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomatosFinitosPageRoutingModule } from './automatos-finitos-routing.module';

import { AutomatosFinitosPage } from './automatos-finitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomatosFinitosPageRoutingModule
  ],
  declarations: [AutomatosFinitosPage]
})
export class AutomatosFinitosPageModule {}
