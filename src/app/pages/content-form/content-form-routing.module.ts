import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentFormPage } from './content-form.page';

const routes: Routes = [
  {
    path: '',
    component: ContentFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentFormPageRoutingModule {}
