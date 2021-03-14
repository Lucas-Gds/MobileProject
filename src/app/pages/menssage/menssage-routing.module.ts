import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenssagePage } from './menssage.page';

const routes: Routes = [
  {
    path: '',
    component: MenssagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenssagePageRoutingModule {}
