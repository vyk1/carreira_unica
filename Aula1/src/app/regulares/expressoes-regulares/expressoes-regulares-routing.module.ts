import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpressoesRegularesPage } from './expressoes-regulares.page';

const routes: Routes = [
  {
    path: '',
    component: ExpressoesRegularesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpressoesRegularesPageRoutingModule {}
