import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomatosFinitosPage } from './automatos-finitos.page';

const routes: Routes = [
  {
    path: '',
    component: AutomatosFinitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomatosFinitosPageRoutingModule {}
