import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegularesPage } from './regulares.page';

const routes: Routes = [
  {
    path: '',
    component: RegularesPage
  },
  {
    path: 'automatos-finitos',
    loadChildren: () => import('./automatos-finitos/automatos-finitos.module').then(m => m.AutomatosFinitosPageModule)
  },
  {
    path: 'expressoes-regulares',
    loadChildren: () => import('./expressoes-regulares/expressoes-regulares.module').then(m => m.ExpressoesRegularesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegularesPageRoutingModule { }
